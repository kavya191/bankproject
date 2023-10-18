import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//method for header overloading
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  sData="data inside service file"


//depentency injection
  constructor(private http:HttpClient) { }

  //method to add token  in api header
  createHeader(){
    //create object
    const headers=new HttpHeaders()
    //access token from localstorage
    if(localStorage.getItem("token")){
      var token=JSON.parse(localStorage.getItem("token") || "")
      //add token to api header
      //add object to api header
      options.headers=headers.append("access_token",token)
    }
    return options
  }
  //signupApi 
    signupApi(accNo:any,uName:any,pwd:any){
      const bodyData={
        accNo,uName,pwd
      }
      return this.http.post('https://bankserver-9rjg.onrender.com/bankuser/userRegister',bodyData)
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
    return this.http.post('https://bankserver-9rjg.onrender.com/bankuser/userLogin',bodyData)

  }

    //get userprofle api
    getProfile(accNo:any){
      return this.http.get('https://bankserver-9rjg.onrender.com/bankuser/userProfile/'+accNo,this.createHeader())
    }
  //balance enquiry api
  getBalance(accNo:any){
    return this.http.get('https://bankserver-9rjg.onrender.com/bankuser/userBalance/'+accNo,this.createHeader())
  }
  //money transfer api
//fromAccno,toAccno,fromAccPwd,amount,dateandtime
moneyTransferApi(fromAccno:any,toAccno:any,pwd:any,amount:any,date:any){
  const bodyData={
   fromAccno,toAccno,pwd,amount,date
 }
 return this.http.post('https://bankserver-9rjg.onrender.com/bankuser/moneyTransfer',bodyData,this.createHeader())
}

//transaction history api
transactionHistory(accNo:any){
  return this.http.get('https://bankserver-9rjg.onrender.com/bankuser/userHistory/'+accNo,this.createHeader())
}
//detele account api
acDelete(accNo:any){
  return this.http.delete('https://bankserver-9rjg.onrender.com/bankuser/userDelete/'+accNo,this.createHeader())

}



}
