import { Component,Input } from '@angular/core';
import {AccountDashboard} from '../account-dashboard/account-dashboard'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Account } from '../account';
import { Accountservice } from '../accountservice';
import { Route } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-account-details',
  imports: [AccountDashboard,CommonModule,FormsModule,RouterLink],
  templateUrl:'./account-details.html',
styleUrls: ['./account-details.css'],
standalone: true
})
export class AccountDetails {
  @Input() acct:Account = new Account;
  
  selacc: boolean =false;
  accdeposit: boolean=false;
  val: number =0;

    viewdashboard(accct:Account ){
    this.acct=accct;
    }
  onDeposit(account:Account) {
    if (this.acct){
    this.acct.balance=this.acct.balance+Number(this.val);}
  }
  onWithdraw(account:Account){
    if (this.acct){
    this.acct.balance=this.acct.balance-this.val;}
  }

  


}
