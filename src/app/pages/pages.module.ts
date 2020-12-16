import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Modulos
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';

import { ModulosComponent } from './modulos/modulos.component';
import { ModuloComponent } from './modulos/modulo/modulo.component';
import { ListarModulosComponent } from './modulos/listar-modulos/listar-modulos.component';

import { EntidadesComponent } from './entidades/entidades.component';
import { EntidadComponent } from './entidades/entidad/entidad.component';
import { ListarEntidadesComponent } from './entidades/listar-entidades/listar-entidades.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdministrationComponent,
    UsersComponent,
    PagesComponent,
    AccountSettingsComponent,
    PerfilComponent,
    ModulosComponent,
    ListarModulosComponent,
    ModuloComponent,
    EntidadesComponent,
    EntidadComponent,
    ListarEntidadesComponent
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
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})

export class PagesModule { }
