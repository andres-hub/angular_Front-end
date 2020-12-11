import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';

import { Usuario } from 'src/app/auth/models/usuario.model';
import { UsuarioService } from '../../auth/services/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  public totalUsuarios: number = 0;
  public totalUsuariosTem: number = 0;
  public usuarios: Usuario[]= [];
  public usuariosTem: Usuario[]= [];
  public desde: number = 0;
  public viewDesde: number = 1;
  public hasta: number = 10;
  public intervalo:number = 10;
  public cargando: boolean = true;
  public Sigiente: boolean = true;
  public Anterior: boolean = false;

  constructor( private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde)
    .subscribe(({total, usuarios}) => {
      this.totalUsuarios = total;
      this.usuarios = usuarios;
      this.usuariosTem = usuarios;
      this.totalUsuariosTem = total;
      this.cargando = false;  
    });

  }

  cambiarPagina(valor: number){

    this.desde += valor;
    this.hasta += valor;
    this.viewDesde += valor;

    if(this.hasta >= this.totalUsuarios){
      this.Sigiente = false;
      this.hasta = this.totalUsuarios;
    }else{
      this.Sigiente = true;
    }

    if( this.desde === 0 ){
      this.Anterior = false;
    }else{
      this.Anterior = true;
    }

    if(this.viewDesde === this.hasta){
      this.hasta += this.intervalo - this.usuarios.length;
    }

    this.cargarUsuarios();
    
  }

  buscar(termino: string){

    if( termino.length < 2)
    {
       this.usuarios = this.usuariosTem;
       this.totalUsuarios = this.totalUsuariosTem;
       return;
    }

    this.usuarioService.buscar(termino)
        .subscribe(({total, usuarios}) => {
          this.totalUsuarios = total;
          this.usuarios = usuarios;
          this.cargando = false;
          
        }
        ,(err)=>{
          Swal.fire({
            title: '¡Error!',
            text: err.error.msg,
            icon: 'error',
            confirmButtonText: 'Ok'
          }); 
        });
        
  }

  cambiarEstadoUsuario(usuario:Usuario){

    if(usuario.uid === this.usuarioService.uid){
      return Swal.fire('Error', `No puede cambiar su estado a si mismo`, 'error');
    }   

    let estado = (usuario.estado)? "inactivar": "activar";

    Swal.fire({
      title: '¿Cambiar estado?',
      text:`Está apunto de ${estado} a ${usuario.nombre}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: `Confirmar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      
      if (result.isConfirmed) {

        this.usuarioService.cambiarEstado(usuario)
            .subscribe((resp:any) =>{
              this.cargarUsuarios();
              estado = (resp.usuario.estado)? "Activado": "Inactivado";
              Swal.fire('Activado', `${usuario.nombre} ${estado} con éxito`, 'success');
            }
            ,(err)=>{
              Swal.fire({
                title: '¡Error!',
                text: err.error.msg,
                icon: 'error',
                confirmButtonText: 'Ok'
              }); 
            });
      } 
    })

  }

  cambiarRole( usuario:Usuario ) {
     
    this.cargando = true;

    this.usuarioService.actualizarRol( usuario )
      .subscribe( resp => {
        this.cargando = false;
      }
      ,(err)=>{
        Swal.fire({
          title: '¡Error!',
          text: err.error.msg,
          icon: 'error',
          confirmButtonText: 'Ok'
        }); 
      });
  }


}
