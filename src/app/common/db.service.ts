import { Injectable } from '@angular/core';
import { UserModel } from '../models/users.model'
import { TransferModel } from '../models/transfer.model'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DbService {

  apiUrl:string=environment.apiUrl

  private userDetails: UserModel[] = [];
  private userDetailsUpdated = new Subject<UserModel[]>()

  private transferDetails: TransferModel[] = [];
  private transferDetailsUpdated = new Subject<TransferModel[]>()



  
  constructor(private http:HttpClient) { }


  getUsers() {

    this.http.get<{message:string, user:UserModel[]}>(this.apiUrl+"users")
      .subscribe((usersData) =>{
        this.userDetails=usersData.user;
        this.userDetailsUpdated.next([...this.userDetails]);
      });
  }

  getUserUpdateListener() {

    return this.userDetailsUpdated.asObservable();

  }


  getTransferTableUpdateListener(){
    return this.transferDetailsUpdated.asObservable();

  }
 

  getTransferRecords(){
    return this.http.get<{message:string,user:TransferModel[]}>(this.apiUrl+"transferRecords")
    .subscribe((transferRecord)=>{
      this.transferDetails = transferRecord.user;
      this.transferDetailsUpdated.next([...this.transferDetails]);
    });

  }


  hello(checkData):any{

    this.http.put< {fu: UserModel, tu: UserModel }>(this.apiUrl+"users", checkData)
      .subscribe((responseData) => {
          const updateData1 = [...this.userDetails];

          const oldDataIndexfu = updateData1.findIndex(p => p._id === responseData.fu._id)
          const oldDataIndextu = updateData1.findIndex(p => p._id === responseData.tu._id)
          for (let i = 0; i < updateData1.length; i++) {
            if (i == oldDataIndexfu) {
              updateData1[i]._id = responseData.fu._id
              updateData1[i].name = responseData.fu.name
              updateData1[i].email = responseData.fu.email
              updateData1[i].credit = responseData.fu.credit
            }
            if (i == oldDataIndextu) {
              updateData1[i]._id = responseData.tu._id
              updateData1[i].name = responseData.tu.name
              updateData1[i].email = responseData.tu.email
              updateData1[i].credit = responseData.tu.credit
            }
          }
          this.userDetails = updateData1;
          this.userDetailsUpdated.next([...this.userDetails])
        

      })
  }

  addDataToTransferTable( formData:any, user, fromUser, toUser){

   
      let userObject = {
        "from": user
      }
      let bodyData = { ...formData, ...userObject }
      bodyData.credit = Number(bodyData.credit);

      this.http.post<{ message: string }>(this.apiUrl+"transferRecords", bodyData)
        .subscribe((responseData) => {
          bodyData.credit = String(bodyData.credit);
          console.log(bodyData);
          this.transferDetails.push(bodyData);
          this.transferDetailsUpdated.next([...this.transferDetails]);

        });

    let checkData = {
      "from": fromUser,
      "to": toUser,
      "transfer": formData
    }
    this.hello(checkData)
    
    

    

  }
 


}
