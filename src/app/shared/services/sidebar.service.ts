import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [{

    titulo:'Administración',
    icono:  'mdi mdi-account-settings-variant',
    submenu:[  
      {titulo: 'Construir menú', url: 'modulos', rutas:['Administración']},
      {titulo: 'Parametros', url: 'parametros', rutas:['Administración']},
      {titulo: 'Usuarios', url: 'users'},
      {titulo: 'Roles', url: 'roles'}
    ],
    linea: false
  },
  {
    titulo:'Gastos',
    icono:  'fa fa-money',
    submenu:[
      {titulo: 'Main', url: 'noPagina'}
    ],
    linea: true
  }

  ];

  constructor() { }
}
