import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource} from '@angular/material/table';
import { TransferModalComponent } from '../transfer-modal/transfer-modal.component'
import { DbService } from '../../common/db.service'
import {UserModel } from '../../models/users.model'
import { DatatableService } from '../../common/datatable.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
 
})
export class UsertableComponent implements OnInit {



  transferCreditsHandler(userData){
    const dialogRef = this.dialog.open(TransferModalComponent, {
      width: '630px',
      height: '400px'
    });

    this.dataTableService.getUserTransferCredit({
      'userData' : userData
    })



  }


  

 

  users:UserModel[];
  usersSub: Subscription;
  constructor(
    public dialog: MatDialog,
    public dbService: DbService ,
    public dataTableService:DatatableService,

    private toastr: ToastrService,
    private spinner: NgxSpinnerService,

    ) { }

  displayedColumns: string[] = ["name","email",'credits','action'];
  dataSource:any;

  ngOnInit(): void {
    this.spinner.show();
    this.dbService.getUsers();
    this.usersSub = this.dbService.getUserUpdateListener()
      .subscribe((user:UserModel[]) => {
        this.spinner.hide();
        this.users = user
        this.dataSource = new MatTableDataSource(this.users);
      }, (err) => {
          this.spinner.hide();
          this.toastr.error("Something went wrong", "Error: ", { timeOut: 3000 });
        });
    }


}
 