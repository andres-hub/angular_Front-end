import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdministrationComponent,
    UsersComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  exports:[
    DashboardComponent,
    AdministrationComponent,
    UsersComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})

export class PagesModule { }
