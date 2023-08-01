import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatastorageService } from '../service/datastorage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any=""
  accNo:any=""
  profileDAta:any={}
  message:any=""
  accountBalance:any={}
  status:any=true
  shareAccNo:any=""


   //model driven form for money transfer
   moneyTransferForm=this.fb.group({
    toAccno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })
  constructor(private rout:Router,
    private ds:DatastorageService,
    private fb:FormBuilder,
    private datePipe:DatePipe){}

  ngOnInit():void{
    if(!localStorage.getItem("currentAccno")){
      alert("please login first")
      this.rout.navigateByUrl("")
    }
    if(localStorage.getItem("currentUname")){
      this.user=localStorage.getItem("currentUname")
  }
  }
  logout(){
   localStorage.removeItem("currentAccno")
   localStorage.removeItem("currentUname")
    this.rout.navigateByUrl("")
  }

 

//view profile
  profileView(){
   
    if(localStorage.getItem("currentAccno")){
      this.accNo=localStorage.getItem("currentAccno")
      console.log(this.accNo);
      
    }
    this.ds.getProfile(this.accNo).subscribe((response:any)=>{
      this.profileDAta=response
    })
  }
//account balance
userBalance(){
  if(localStorage.getItem("currentAccno")){
    this.accNo=localStorage.getItem("currentAccno")
    console.log(this.accNo);
    
  }
  this.ds.getBalance(this.accNo).subscribe((response:any)=>{
    this.accountBalance=response
  })
}
//money transfer
transfer(){
  if(this.moneyTransferForm.valid){
     //from accNo
  if(localStorage.getItem("currentAccno")){
    this.accNo=localStorage.getItem("currentAccno")
    console.log(this.accNo);
    
  }
  let path=this.moneyTransferForm.value
  //toAccno
  let toAccno=path.toAccno
  console.log(toAccno);
  
  //pwd
  let pwd=path.pwd
  console.log(pwd);
  //amount
  let amount=path.amount
  console.log(amount);
  //date
  let dateTime=new Date()
  let dateData=this.datePipe.transform(dateTime,'short')
  console.log(dateData);
  //monettransfer api
  this.ds.moneyTransferApi(this.accNo,toAccno,pwd,amount,dateData).subscribe((result:any)=>{
    this.message=result.message
    this.status=true

    
  },
  result=>{
    this.message=result.error.message})
    this.status=false
  
  
  }else{
    alert("invalid form")
    this.status=false
  }
 

}

statement(){
  this.rout.navigateByUrl("statement")
}
//delete account
deleteAccount(){
  //share data
  //access data from localstorage
  if(localStorage.getItem('currentAccno')){
   this.shareAccNo= localStorage.getItem('currentAccno')
   console.log(this.shareAccNo);
   
  }
  
}
//no button click cheyyumboo onCancel event  work cheyyum
cancel(){
  this.shareAccNo=""

}
//yes button click cheyyumbo
deleteAc(event:any){
console.log(event);
this.ds.acDelete(event).subscribe((result:any)=>{
  alert(`${event} deleted successfully`)
  this.logout()
})

}
}
