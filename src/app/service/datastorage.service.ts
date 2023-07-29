import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  sData="data inside service file"


//depentency injection
  constructor(private http:HttpClient) { }
  //signupApi 
    signupApi(accNo:any,uName:any,pwd:any){
      const bodyData={
        accNo,uName,pwd
      }
      return this.http.post('http://localhost:3004/bankuser/userRegister',bodyData)
    }

   // accessData(data:any){
  //   console.log(data);
  //
  // }




  //login api
  loginApi(accNo:any,pwd:any){
    const bodyData={
      accNo,pwd
    }
    return this.http.post('http://localhost:3004/bankuser/userLogin',bodyData)

  }

    //get userprofle api
    getProfile(accNo:any){
      return this.http.get('http://localhost:3004/bankuser/userProfile/'+accNo)
    }
  //balance enquiry api
  getBalance(accNo:any){
    return this.http.get('http://localhost:3004/bankuser/userBalance/'+accNo)
  }
  //money transfer api
//fromAccno,toAccno,fromAccPwd,amount,dateandtime
moneyTransferApi(fromAccno:any,toAccno:any,pwd:any,amount:any,date:any){
  const bodyData={
   fromAccno,toAccno,pwd,amount,date
 }
 return this.http.post('http://localhost:3004/bankuser/moneyTransfer',bodyData)
}



}
