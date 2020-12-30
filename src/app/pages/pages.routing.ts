import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ModulosComponent } from './modulos/modulos.component';
import { ModuloComponent } from './modulos/modulo/modulo.component';
import { ListarModulosComponent } from './modulos/listar-modulos/listar-modulos.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { ListarEntidadesComponent } from './entidades/listar-entidades/listar-entidades.component';
import { EntidadComponent } from './entidades/entidad/entidad.component';
import { ListarParametrosComponent } from './parametros/listar-parametros/listar-parametros.component';
import { ParametroComponent } from './parametros/parametro/parametro.component';
import { ParametrosComponent } from './parametros/parametros/parametros.component';
import { RolesComponent } from './roles/roles.component';
import { ListarRolesComponent } from './roles/listar-roles/listar-roles.component';
import { RolComponent } from './roles/rol/rol.component';
import { PermisosComponent } from './permisos/permisos.component';

const routes: Routes = [    
  {
    // TODO: Poner esto como variable global 
    path:'nombreApp', component: PagesComponent,
    canActivate:[AuthGuard],
    children:[
      {path: '', component:DashboardComponent, data: {titulo: 'Home'}},
      {
        path: 'modulos', 
        component:ModulosComponent, 
        data: {titulo: 'Construir menú'},
        children:[
          {path: '', component:ListarModulosComponent, data: {titulo: 'modulo'}},
          {path: 'modulo/:id', component:ModuloComponent, data: {titulo: 'modulo'}},
          {
            path: 'entidades/:id', 
            component:EntidadesComponent, 
            data: {titulo: 'modulo'},
            children:[
              {path: '', component: ListarEntidadesComponent, data: {titulo: 'modulo'}},
              {path: 'entidad/:id', component: EntidadComponent, data: {titulo: 'modulo'}}
            ]
          }
        ]
      },
      {
        path: 'parametros',
        component: ParametrosComponent, 
        data:{titulo: 'Parametros'},
        children:[
          {path: '', component: ListarParametrosComponent, data: {tilulo: 'Listar Parametros'}},
          {path: 'parametro/:id', component: ParametroComponent, data: {titulo: 'Parametro'}}
        ]
      },
      {
        path: 'roles', 
        component: RolesComponent,
        data: {titulo: 'Roles'},
        children:[
          {path: '', component: ListarRolesComponent, data: {titulo: 'roles'}},
          {path: 'rol/:id', component: RolComponent, data: {titulo: 'rol'}}
        ]
      },
      {path: 'permisos/:tipo/:id', component: PermisosComponent, data: {titulo: 'Permisos'}},
      {path: 'users', component: UsersComponent, data: {titulo: 'Usuarios'}},
      {path: 'settings', component: AccountSettingsComponent, data: {titulo: 'Configuraciones'}},
      {path: 'perfil', component: PerfilComponent, data: {titulo: 'Mi perfil'}}
    ]
  },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule {}