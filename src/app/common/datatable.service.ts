import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

/*private userDetailsTableSource = new BehaviorSubject([]);
  userDetailsTableVariable = this.userDetailsTableSource.asObservable();*/


  private userCreditTransferSource = new BehaviorSubject({});
  userCreditTransferVariable = this.userCreditTransferSource.asObservable();


  /*private transferTableSource = new BehaviorSubject([]);
  transferTableVariable = this.transferTableSource.asObservable();*/




  

  /*getUserDetailsTable(userDetails: any) {
    this.userDetailsTableSource.next(userDetails);
  }*/

  getUserTransferCredit(creditTransfer:any){
    this.userCreditTransferSource.next(creditTransfer)

  }

  /*getTransferTable(transferRecord:any){
    this.transferTableSource.next(transferRecord)

  }*/



  constructor() { }
}
