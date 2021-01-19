import { Routes, RouterModule, CanActivate } from '@angular/router';
import {NgModule} from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';
import { RutasGuard } from '../guards/rutas.guard';

import { environment } from 'src/environments/environment.prod';

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
import { IngresosComponent } from './ingresos/ingresos.component';

const routes: Routes = [    
  {
    // TODO: Poner esto como variable global 
    path: environment.nombreApi , component: PagesComponent,
    canActivate:[AuthGuard],
    children:[
      {path: '', component:DashboardComponent, canActivate:[AuthGuard], data: {titulo: 'Home'}},
      {
        path: 'modulos', 
        component:ModulosComponent,
        canActivate:[AuthGuard, RutasGuard], 
        data: {titulo: 'Construir menú'},
        children:[
          {path: '', component:ListarModulosComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'Construir Menú'}},
          {
            path: 'modulo/:id', component:ModuloComponent, 
            canActivate:[AuthGuard, RutasGuard], 
            data: {
              ruta:['Construir Menú'], 
              titulo: 'Modulo'
            }
          },
          {
            path: 'entidades/:id', 
            component:EntidadesComponent,
            canActivate:[AuthGuard, RutasGuard], 
            data: {titulo: 'modulo'},
            children:[
              {
                path: '', 
                component: ListarEntidadesComponent, 
                canActivate:[AuthGuard, RutasGuard], 
                data: {
                  titulo: 'Listar Entidades',
                  ruta:['Construir Menú']
                }
              },
              {
                path: 'entidad/:id', 
                component: EntidadComponent, 
                canActivate:[AuthGuard, RutasGuard], 
                data: {
                  titulo: 'Entidad',
                  ruta:['Construir Menú', 'Listar Entidades']
                }
              }
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
          {path: '', component: ListarRolesComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'Listar Roles'}},
          {path: 'rol/:id', component: RolComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'Rol'}}
        ]
      },
      {path: 'permisos/:tipo/:id', component: PermisosComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'Permisos'}},
      {path: 'users', component: UsersComponent, canActivate:[AuthGuard, RutasGuard], data: {titulo: 'Listar Usuarios'}},
      {path: 'settings', component: AccountSettingsComponent, canActivate:[AuthGuard], data: {titulo: 'Configuraciones'}},
      {path: 'perfil', component: PerfilComponent, canActivate:[AuthGuard], data: {titulo: 'Mi perfil'}},

      //negocio
      {path:'ingresos', component: IngresosComponent, canActivate:[AuthGuard], data: {titulo: 'Ingresos'} }

    ]
  },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule {}