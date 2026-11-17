import { Component ,Output,EventEmitter} from '@angular/core';
import db from "../db.json"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Account } from '../account';
import { Accountservice } from '../accountservice';
import { RouterLink,Router } from '@angular/router';


@Component({
  selector: 'app-account-dashboard',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './account-dashboard.html',
  styleUrl: './account-dashboard.css',
  standalone:true
})
export class AccountDashboard {
  acctlist:Account[]=[];
  constructor(private accts:Accountservice, private router:Router){}

  
  @Output() SubmitEvent=new EventEmitter<Account>();

  deletei(id: string){
    this.accts.delete(id).subscribe(()=>{
      this.acctlist=this.acctlist.filter(s=>s.id!=id);
    });
  }

  ngOnInit(){
  this.accts.getAll().subscribe(data=>{
    this.acctlist=data;
  })
}


  viewdetails(user:Account){
        this.SubmitEvent.emit(user);
        this.router.navigate(['/viewAccount']);
  };

  addAccount(){
    this.router.navigate(['/AddAccount'])
  }

}
