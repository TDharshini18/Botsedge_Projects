import { Routes } from '@angular/router';
import { AccountDashboard } from './account-dashboard/account-dashboard';
import { AccountDetails } from './account-details/account-details';
import { AccountAddition } from './account-addition/account-addition';

export const routes: Routes = [
    {
        path: '',
        component: AccountDashboard,
        title:'Home Page'
        

    },
    {
        path:'viewAccount',
        component: AccountDetails,
        title: "Account View"
    }
    ,
    {
        path:"AddAccount",
        component: AccountAddition,
        title: "Add Account"
    }
];
