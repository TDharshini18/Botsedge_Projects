import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TypeSpeedcom} from './type-speedcom/type-speedcom.componenet';
import { CommonModule } from '@angular/common';
import { format } from 'path';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TypeSpeedcom,CommonModule,FormsModule],
  templateUrl:'./app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('typing-speed');
}
