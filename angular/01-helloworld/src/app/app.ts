import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1 } from './c1/c1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, C1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('helloworld');
  messageData: string="CHILD BITCH";
}
