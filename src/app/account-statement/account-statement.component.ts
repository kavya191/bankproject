import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatastorageService } from '../service/datastorage.service';
import jspdf from 'jspdf';
import 'jspdf-autotable'
@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent {
  accNo: any
  transactions: any = []
  date: any
  searchKey: any = ""
  row: any = []
  constructor(private ds: DatastorageService, private rout: Router) { }

  ngOnInit(): void {

    //date
    this.date = new Date()
    console.log(this.date);

    //take accNo from localstoeage
    if (localStorage.getItem("currentAccno")) {
      this.accNo = localStorage.getItem("currentAccno")

    }

    this.ds.transactionHistory(this.accNo)
      .subscribe((result: any) => {
        this.transactions = result
        console.log(this.transactions);


      })
  }
  //searchkey change
  searchKeyChange(key: any) {
    this.searchKey = key
  }
  //convert as pdf
  convertPdf() {
    //create an object for jsPDF
    var pdf = new jspdf()

    //set colum title
    let col = ["Type", "Amount", "Account Holder Name", "Date"]
    //create an empty row for holding data
    let row: any = []

    // title font style setting
    pdf.setFontSize(16)
    //pdf title setting
    //text() method have 2 argument .one is pdf title and 2nd is x-axis y-axis value of table

    pdf.text("Account Statement", 15, 10)
    
    //text color
    //99-black color
    pdf.setTextColor(99)
    // data font size reset
    pdf.setFontSize(12)
    //array of object convert to array of array(nested array)
    //transactions is array of object that contains tranaction details of user
    //store all objects in transactions in allItems variable
    var allItems = this.transactions
    //iterate allItems
    //nested array
    for (let i of allItems) {
      //convert object to array
      let rowData = [i.type, i.amount, i.user, i.date]
      //push array elements to row
      row.push(rowData)
    }
    //nested array convert to pdf
    (pdf as any).autoTable(col, row, { startY: 15 })
    //open pdf into a new window
    //dataurlnewwindow is an inbuilt method using for viewing pdf in new window
    pdf.output('dataurlnewwindow')
    //save pdf
    pdf.save('statement.pdf')
  }


  //back to home
  backHome() {
    this.rout.navigateByUrl('home')
  }

}
