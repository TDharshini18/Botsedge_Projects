import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  Name: string="";
  Age: String="";

@Output() SubmitEvent = new EventEmitter<any>();
Onsubmit(){
  this.SubmitEvent.emit({
  Name: this.Name, 
  Age: this.Age });

}
}
