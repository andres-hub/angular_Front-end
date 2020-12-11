import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [{

    titulo:'Administración',
    icono:  'mdi mdi-account-settings-variant',
    submenu:[  
      {titulo: 'Administracion', url: 'administration'},
      {titulo: 'Usuarios', url: 'users'}
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
