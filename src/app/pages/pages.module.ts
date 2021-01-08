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
import { ParametrosComponent } from './parametros/parametros/parametros.component';
import { ListarParametrosComponent } from './parametros/listar-parametros/listar-parametros.component';
import { ParametroComponent } from './parametros/parametro/parametro.component';
import { RolesComponent } from './roles/roles.component';
import { ListarRolesComponent } from './roles/listar-roles/listar-roles.component';
import { RolComponent } from './roles/rol/rol.component';
import { PermisosComponent } from './permisos/permisos.component';
import { IngresosComponent } from './ingresos/ingresos.component';

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
    ListarEntidadesComponent,
    ParametrosComponent,
    ListarParametrosComponent,
    ParametroComponent,
    RolesComponent,
    ListarRolesComponent,
    RolComponent,
    PermisosComponent,
    IngresosComponent
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
