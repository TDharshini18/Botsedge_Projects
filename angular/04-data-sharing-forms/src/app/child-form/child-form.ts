import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child-form.html',
  styleUrl: './child-form.css',
})
export class ChildForm {

  name: string = "";
  city: string = "";
  age: string = "";

  @Output() SubmitEvent = new EventEmitter<any>();

  onSubmit() {
    this.SubmitEvent.emit({
      name: this.name,
      age: this.age,
      city: this.city,
    });
  }
}
