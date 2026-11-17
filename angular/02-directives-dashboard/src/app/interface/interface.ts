import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import db from './db.json';


@Component({
  selector: 'app-interface',
  imports: [CommonModule,FormsModule],
  templateUrl: './interface.html',
  styleUrl: './interface.css',
})
export class Interface {
  users=db
  user:Array<{id: number, name: string, email: string,website:string}>=[];

  // editUser(id:number){
  //   this.db
  // };

  deleteUser(id:number){
    this.db.splice(id-1,1);
  };
}
