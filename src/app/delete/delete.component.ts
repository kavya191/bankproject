import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  //create a variable to accept the data from parent component
  @Input() childAccno:String | undefined
  //decorator for child to parent commmunication
  //EvemtEmitter class for creating event
   @Output() onCancel=new EventEmitter()
   //yes button click cheyyumbo  acc delete aavanamm
   @Output() onDelete=new EventEmitter()
  constructor(){}
//method for no button
  noClick(){
    //no button click cheyyumbo event emit cheyyan emit() method
    this.onCancel.emit()
  }
//yes button click cheeyyumbo  data pass cheyyn $event binding use cheyyunnu
  acDelete(){
    this.onDelete.emit(this.childAccno)

  }
}
