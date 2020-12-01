import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './users/users.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [    
  {
    // TODO: Poner esto como variable global 
    path:'nombreApp', component: PagesComponent,
    canActivate:[AuthGuard],
    children:[
      {path: '', component:DashboardComponent, data: {titulo: 'Home'}},
      {path: 'administration', component: AdministrationComponent, data: {titulo: 'Administración'}},
      {path: 'users', component: UsersComponent, data: {titulo: 'Usuarios'}},
      {path: 'settings', component: AccountSettingsComponent, data: {titulo: 'Configuraciones'}}
    ]
  },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule {}