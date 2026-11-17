import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-c1',
  imports: [FormsModule,CommonModule],
  templateUrl: './c1.html',
  styleUrl: './c1.css',
})
export class C1 {
  ` //interpolation

  userName: string = '';
  userId: number = 101;

  //property binding
  imgsrc: any='https://angular.io/assets/images/logos/angular/angular.png';
  diffname: string='ardgdsgzxfvxsdsdsdgsdddddc';
  aurl:string='https://www.google.com';
  diab: boolean=true;
  curclass :string="cla1";

//

 onClicked(){

    this.curclass=this.curclass=='cla1'? 'cla2':'cla1'; 
    this.diab=!this.diab }
CapValue(event:any){
  console.log("CapValue: " + event.key);
}


onMouseOver(event:any){
  this.curclass = this.curclass==="cla1"?"cla2":"clas1"
}
onMouseOut(event:any){
  this.curclass = this.curclass==="cla2"?"cla1":"clas2"
}

name :string='';
isChecked : boolean=true

selectedop = "";
Option1 : string="I think value 1 ";
Option2 : string="I think value 2";
textareaValue: string ="";
dropdownn : string="null";


a=10
b=20
items=[10,20,30,40,50]
un="admin";

isActive=false;
toggleb(){
  this.isActive=!this.isActive;

}

bcgd : string ="blue";

fs='32';

changest(){
  this.bcgd="pink";
  this.fs="120";
}
`

@Input()message:String="";
}