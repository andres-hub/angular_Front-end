import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../auth/services/usuario.service';
import { Usuario } from '../../auth/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario;
   }

  logout(){
    this.usuarioService.logout();
  }


}
