import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../../common/datatable.service'
import { MatTableDataSource } from '@angular/material/table';
import { DbService } from '../../common/db.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TransferModel } from '../../models/transfer.model'
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-transfer-records',
  templateUrl: './transfer-records.component.html',
  styleUrls: ['./transfer-records.component.css']
})
export class TransferRecordsComponent implements OnInit {

  displayedColumns: string[] = ['from', 'to', 'credits transfer'];
  transferArray:any;
  dataSource:any;

  transferSub: Subscription;
  transferUsers:TransferModel[]


  constructor(public dataTableServie: DatatableService,
    public dbService: DbService,


    private toastr: ToastrService,
    private spinner: NgxSpinnerService,

) { }

  ngOnInit(): void {

      this.dbService.getTransferRecords()
      this.transferSub = this.dbService.getTransferTableUpdateListener()
      .subscribe((user: TransferModel[]) => {
        this.transferUsers = user

        this.dataSource = new MatTableDataSource(this.transferUsers.reverse());
      });
    }

}
