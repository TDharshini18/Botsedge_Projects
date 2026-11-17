import { Component } from '@angular/core';
import { Account } from '../account';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Accountservice } from '../accountservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-addition',
  imports: [CommonModule,FormsModule],
  templateUrl: './account-addition.html',
  styleUrl: './account-addition.css',
})
export class AccountAddition {
  //name: string='';
  //id: string='';
  //type: string='';
  //balance: number =0;
  curraccount: Account;

  constructor(private accts: Accountservice,private router: Router){
   this.curraccount=new Account();
  };
    //curraccount: Account=new Account();



  SubmitUser(){
    // this.curraccount.name=this.name;
    // this.curraccount.id=this.id;
    // this.curraccount.type=this.type;
    // this.curraccount.balance=this.balance;
    alert(this.curraccount.id);

    this.accts.save(this.curraccount).subscribe();
    this.router.navigate(['/']);
  }
}
