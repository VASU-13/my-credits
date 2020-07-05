import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatatableService } from '../../common/datatable.service'
import { DbService} from '../../common/db.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/users.model'
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transfer-modal.component.html',
  styleUrls: ['./transfer-modal.component.css']
})
export class TransferModalComponent implements OnInit {


  usersArray: UserModel[];
  currentUser:string;
  creditForm:FormGroup;
  usersSub: Subscription;

  currentUserObject : UserModel;
  transferUserObject: UserModel;
  allUsersObject: UserModel[];
  



  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,

    private formbuilder: FormBuilder,
    public dataTableService: DatatableService,
    public dbService: DbService,
    public dialogRef: MatDialogRef<TransferModalComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }


  onCreditFormSubmit() {
    this.spinner.show();
    let formData = this.creditForm.value;
    if(this.currentUserObject.credit>=formData.credit)
    {
      for (let user of this.allUsersObject) {
        if (user.name === formData.to) {
          this.transferUserObject = user;
          break;
        }
      }
      this.dbService.addDataToTransferTable(formData, this.currentUser, this.currentUserObject, this.transferUserObject)
      this.spinner.hide();
      this.toastr.success("Transfer Successfully", "success", {
        timeOut: 2700
      });
      this.spinner.show();

    }
    else{
      this.spinner.hide();
      this.toastr.error("InSufficient Credit", "error", {
        timeOut: 2700
      });

    }
    this.closeDialog();
    this.spinner.hide();
    

  
}
    





  ngOnInit() {

    this.creditForm = this.formbuilder.group({
      credit: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]
    
      ],
      to: ['', [Validators.required]],
    })




    this.dataTableService.userCreditTransferVariable.subscribe((message: any) => {
      this.currentUserObject = message.userData;
      this.currentUser = message.userData.name;
    })
      this.dbService.getUsers();
      this.usersSub = this.dbService.getUserUpdateListener()
        .subscribe((user: UserModel[]) => {
          this.allUsersObject = user
          let CU = this.currentUser;
          this.usersArray = this.allUsersObject.filter(function (el) { return el.name != CU }); 
        });


  }

}