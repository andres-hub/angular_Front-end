import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './users/users.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [    
  {
    path:'nombreApp', component: PagesComponent,
    children:[
      {path: '', component:DashboardComponent},
      {path: 'administration', component: AdministrationComponent},
      {path: 'ususers', component: UsersComponent},
      {path: 'account-settings', component: AccountSettingsComponent}
    ]
  },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule {}