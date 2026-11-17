import { Component } from '@angular/core';
import { ChildForm } from '../child-form/child-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-list',
  standalone: true,
  imports: [CommonModule, ChildForm],
  templateUrl: './parent-list.html',
  styleUrl: './parent-list.css',
})
export class ParentList {
  users: any[] = [];

  adduser(data: any) {
    this.users.push(data);
  }
}
