import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root',
})
export class Accountservice {
  private useUrl: string="";
  constructor(private http:HttpClient){
    this.useUrl="http://localhost:8080/topics"
  }

  public getAll(): Observable<Account[]>{
    return this.http.get<Account[]>(this.useUrl);

  }

  public save(acct:Account){
    return this.http.post<Account>(this.useUrl,acct);

  }

  public update(acct:Account){
    return this.http.put<Account>(`${this.useUrl}/${acct.id}`,acct);
  }

  public delete(id:string){
    return this.http.delete<Account>(`${this.useUrl}/${id}`);
  }
}
