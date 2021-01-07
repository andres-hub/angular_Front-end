import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';
import { RutasGuard } from '../guards/rutas.guard';

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
import { from } from 'rxjs';

const routes: Routes = [    
  {
    // TODO: Poner esto como variable global 
    path:'nombreApp', component: PagesComponent,
    canActivate:[AuthGuard],
    children:[
      {path: '', component:DashboardComponent, canActivate:[AuthGuard], data: {titulo: 'Home'}},
      {
        path: 'modulos', 
        component:ModulosComponent,
        canActivate:[AuthGuard, RutasGuard], 
        data: {titulo: 'Construir menú'},
        children:[
          {path: '', component:ListarModulosComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'modulo'}},
          {path: 'modulo/:id', component:ModuloComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'modulo'}},
          {
            path: 'entidades/:id', 
            component:EntidadesComponent,
            canActivate:[AuthGuard, RutasGuard], 
            data: {titulo: 'modulo'},
            children:[
              {path: '', component: ListarEntidadesComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'modulo'}},
              {path: 'entidad/:id', component: EntidadComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'modulo'}}
            ]
          }
        ]
      },
      {
        path: 'parametros',
        component: ParametrosComponent, 
        canActivate:[AuthGuard, RutasGuard],
        data:{titulo: 'Parametros'},
        children:[
          {path: '', component: ListarParametrosComponent, canActivate:[AuthGuard, RutasGuard], data: {tilulo: 'Listar Parametros'}},
          {path: 'parametro/:id', component: ParametroComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'Parametro'}}
        ]
      },
      {
        path: 'roles', 
        component: RolesComponent,
        canActivate:[AuthGuard, RutasGuard],
        data: {titulo: 'Roles'},
        children:[
          {path: '', component: ListarRolesComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'roles'}},
          {path: 'rol/:id', component: RolComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'rol'}}
        ]
      },
      {path: 'permisos/:tipo/:id', component: PermisosComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'Permisos'}},
      {path: 'users', component: UsersComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'Usuarios'}},
      {path: 'settings', component: AccountSettingsComponent, canActivate:[AuthGuard], data: {titulo: 'Configuraciones'}},
      {path: 'perfil', component: PerfilComponent, canActivate:[AuthGuard], data: {titulo: 'Mi perfil'}}
    ]
  },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule {}