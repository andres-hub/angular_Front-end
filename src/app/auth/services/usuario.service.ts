import { Injectable, NgZone } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../../environments/environment.prod';
import { LoginForm } from '../interfaces/login-form.interfase';

import { Usuario } from '../models/usuario.model';
import { ActualizarUsuarioForm } from '../../pages/interfaces/actualizar-usuario-form.interfase';

const base_url = environment.base_url;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;
  public usuario: Usuario;

  constructor(private http: HttpClient,
              private router: Router,
              private ngZone: NgZone) {
                this.googleInit();
               }

  get token(): string{
    return localStorage.getItem('token') || '';
  }

  googleInit(){

    return new Promise(resolve =>{

      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id: '630080066536-jcsto2vhlbnuhoo3vd5tppunf8gvsg33.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });

        resolve();
      });

    })

  } 

  logout(){
    localStorage.removeItem('token');
    this.auth2.signOut().then(() => {
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/login');
      });
    });
  }

  validarToken(): Observable<boolean>{

    return this.http.get(`${base_url}/login/renew`, {
      headers:{'x-token': this.token}
    })
    .pipe(
      map((resp: any) =>{

        const {email, google, nombre, role, img = '', uid } = resp.usuario;
        this.usuario = new Usuario(uid,email,nombre,role,img, google);
        localStorage.setItem('token', resp.token);
        return true

      }),
      catchError(error => of(false))
    );

  }  

  crearUsuario(formData: RegisterForm ){

    return this.http.post(`${base_url}/usuarios`, formData)
                .pipe(
                  tap((resp: any) =>{
                    localStorage.setItem('token', resp.token)
                  })
                );

  }

  actualizarPerfil(data:ActualizarUsuarioForm){
    return this.http.put(`${base_url}/usuarios`, data,{
      headers:{ 'x-token': this.token }
    })
  }

  login(formData: LoginForm){

    return this.http.post(`${base_url}/login`, formData)
                .pipe(
                  tap((resp: any) =>{
                    localStorage.setItem('token', resp.token)
                  })
                );

  }

  loginGoogle(token){

    return this.http.post(`${base_url}/login/google`, {token})
    .pipe(
      tap((resp: any) =>{
        localStorage.setItem('token', resp.token)
      })
    );

  }
  
}
