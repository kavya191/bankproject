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
    // signupApi(accNo:any,uName:any,pwd:any){
    //   const bodyData={
    //     accNo,uName,pwd
    //   }
    //   return this.http.post('http://localhost:3004/bankuser/userRegister',bodyData)
    // }

   // accessData(data:any){
  //   console.log(data);
  //


  //login api

    

  // }
}
