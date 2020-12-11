import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { UsuarioService } from '../../auth/services/usuario.service';
import { Usuario } from '../../auth/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  public usuario: Usuario;

  constructor( private sidebarService: SidebarService,
               private usuarioService: UsuarioService ) { 
    this.menuItems = sidebarService.menu;
    this.usuario = usuarioService.usuario;
    console.log(this.usuarioService.usuario);
  }

  ngOnInit(): void {
  }

}
