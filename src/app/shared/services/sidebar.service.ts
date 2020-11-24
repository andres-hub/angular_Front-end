import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [{

    titulo:'principal',
    icono:  'mdi mdi-gauge',
    submenu:[
      {titulo: 'Main', url: '/'},
      {titulo: 'Administracion', url: 'administration'},
      {titulo: 'Usuarios', url: 'ususers'}
    ]
  }
  ];

  constructor() { }
}
