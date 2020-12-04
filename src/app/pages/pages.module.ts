import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdministrationComponent,
    UsersComponent,
    PagesComponent,
    AccountSettingsComponent,
    PerfilComponent
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
    RouterModule,
    ReactiveFormsModule
  ]
})

export class PagesModule { }
