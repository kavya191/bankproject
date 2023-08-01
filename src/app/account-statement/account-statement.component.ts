import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatastorageService } from '../service/datastorage.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent {
  accNo: any
  transactions: any = []
  constructor(private ds: DatastorageService) { }

  ngOnInit(): void {
    //take accNo from localstoeage
    if (localStorage.getItem("currentAccno")) {
      this.accNo=localStorage.getItem("currentAccno")
    
    }
    
    this.ds.transactionHistory(this.accNo)
    .subscribe((result: any) => {
      this.transactions = result
      console.log(this.transactions);


    })
  }

}
