import { Component } from '@angular/core';

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


  login(){
    alert("Logged In")
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
