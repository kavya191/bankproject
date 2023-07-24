import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  //model form for signup form

  signUpModelForm=this.fb.group({
    //validation - usr validator class
    accNo:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uName:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    cpwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

  })
  pwsMatch:boolean=false

  constructor(private rout:Router,private fb:FormBuilder){} //Router -class


  signup(){
    let path=this.signUpModelForm.value
    let accNo=path.accNo
    let uname=path.uName
    let pwd=path.pwd
    let cpwd=path.cpwd
    console.log(accNo,uname,pwd,cpwd);
    if(this.signUpModelForm.valid){
      if(pwd == cpwd){
        this.pwsMatch=false // same password
  
      }else{
        this.pwsMatch=true//password doesn't match
      }
    }else{
      alert("invalid form")
    }
    

    
    
  //  this.rout.navigateByUrl("") //navigateByUrl -module
  }

}
