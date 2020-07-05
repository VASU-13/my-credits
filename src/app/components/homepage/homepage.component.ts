import { Component, OnInit } from '@angular/core';
import { DbService } from '../../common/db.service'
import { DatatableService } from '../../common/datatable.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users:any[]
  constructor(public dbService: DbService,

    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public dataTableService: DatatableService) 
  {
 
  }




  ngOnInit(): void {
 
  



  }

}
