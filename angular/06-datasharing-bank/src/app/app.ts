import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AccountDashboard} from './account-dashboard/account-dashboard';
import { AccountDetails } from './account-details/account-details';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AccountDashboard,AccountDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('datasharing-bank');
}
