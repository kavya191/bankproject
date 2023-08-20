import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatastorageService } from '../service/datastorage.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = "Happy Banking With Us"
  accountNo = "Enter Acc No..."
  userPass = "Enter Password..."
  acc: any = ""
  pass: any = ""
  dataService: any = ""
  //set empty stringn initially false  
  accNumber: boolean = false
  userPassword: boolean = false

 


  //event binding using templete rendering variable
  // login(a:any,b:any){
  //initialize cheythuvechekkunna dataye this keyword vechu methodil access cheythu run cheyyamm
  //   this.acc=a.value
  //   this.pass=b.value
  //   console.log(this.acc);
  //   console.log(this.pass);


  // }
  //loginmodel form
  loginModelForm = this.fb.group({
    //validation
    accNo: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]

  })
  ///
  constructor(private route: Router,
    //access data from service data file
    private ds: DatastorageService,
    //FormBuilder - class in reactiveFormModule
    private fb: FormBuilder) { }


  ngOnInit(): void {
    if(localStorage.getItem("currentUname")){


    }
    //  this.dataService=this.ds.sData
    //  console.log(this.dataService);
  


  }
//login api
  login() {

    if (this.loginModelForm.valid) {
      let path = this.loginModelForm.value
      let accNo = path.accNo
      let pwd = path.pwd
      console.log(accNo, pwd);
      this.ds.loginApi(accNo,pwd).subscribe((response:any)=>{
         alert(`${response.uName} login success`)

         //store uName,accNo,in local storage
         localStorage.setItem("currentUname",response.uName)
         localStorage.setItem("currentAccno",response.accNo)
        //token store in local storage
         localStorage.setItem("token",JSON.stringify(response.token))
         console.log(response.token);
         
         this.route.navigateByUrl("home")
        // console.log(response);
        
      },
      response=>{
        alert(response.error)
      })

    } else {
      alert("invalid form")
    }


    // this.ds.accessData("data passed to service data file  ")
    // alert("Logged In")
    // console.log(this.acc);
    // // console.log(this.pass);
    // this.route.navigateByUrl("home")



  }

  // accnoChange(event:any){
  //   this.acc=event.target.value
  //   console.log(this.acc);

  // }
  // passChange(event:any){
  //   this.pass=event.target.value
  //   console.log(this.pass);
  // }

}
