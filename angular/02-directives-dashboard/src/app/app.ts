import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Interface } from './interface/interface';
@Component({
  selector: 'app-root',
  imports: [ Interface],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard');
}
