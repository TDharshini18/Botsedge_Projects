import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChildForm} from './child-form/child-form';
import { ParentList } from './parent-list/parent-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildForm,ParentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-sharing2');
}
