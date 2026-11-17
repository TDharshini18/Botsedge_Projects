import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  db  from './db.json';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './parent.html'
})
export class Parent {
  users=db;
  editobj: Partial<{id:number, name:String , website:string}>={};
  editid: number| null=null;


  id: String="";
  name: String="";
  website: String="";
  cid: number= 0;

  onEdit(Id:number){
    const editval= this.users.find((user) => user.id === Id);
    if(!editval){
    return;}
    this.editid=Id;
    this.editobj={...editval};
 }

saveEdit(){
  const currval=this.users.find((user)=> user.id===this.editid);;
  if(!currval) return;
  Object.assign( currval , this.editobj);
  this.editid=null;
  this.editobj={};

}

cancleEdit(){
  this.editid=null;
  this.editobj={};

}

 

  onDelete(Id:number){
    this.cid =this.users.findIndex((user)=> user.id===Id);  
    this.users.splice(this.cid,1);

  }




}
   