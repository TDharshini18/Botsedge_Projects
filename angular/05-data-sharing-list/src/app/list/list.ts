import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Form} from '../form/form';
@Component({
  selector: 'app-list',
  imports: [CommonModule,Form],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  users: any[]=[]
  addUser(info: any){
    this.users.push(info);
  }


}
