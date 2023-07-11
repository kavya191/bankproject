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


  login(){
    alert("Logged In")
  }

}
