import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatastorageService } from '../service/datastorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  data="Happy Banking with us"
  accountNo="Enter Acc No..."
  userPass="Enter Password..."
  acc:any=""
  pass:any=""
  dataService:any=""


  //event binding using templete rendering variable
  // login(a:any,b:any){
 //initialize cheythuvechekkunna dataye this keyword vechu methodil access cheythu run cheyyamm
  //   this.acc=a.value
  //   this.pass=b.value
  //   console.log(this.acc);
  //   console.log(this.pass);
    
    
  // }
  ////NgModel
  constructor(private route:Router,private ds:DatastorageService){}

  ngOnInit():void{
//  this.dataService=this.ds.sData
//  console.log(this.dataService);
 
    
  }

  login(){

    // this.ds.accessData("data passed to service data file  ")
    // alert("Logged In")
    // console.log(this.acc);
    // console.log(this.pass);
    this.route.navigateByUrl("home")
    
    

  }

  accnoChange(event:any){
    this.acc=event.target.value
    console.log(this.acc);
    
  }
  passChange(event:any){
    this.pass=event.target.value
    console.log(this.pass);
  }

}
