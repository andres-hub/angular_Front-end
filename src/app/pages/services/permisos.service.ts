import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Menu } from '../models/menu.model';
import { Permiso } from '../models/permisos.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(
    private http: HttpClient
  ) { }
  
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers:{
        'x-token': this.token
      }
    }
  }

  private convertirMenu(resp: any[]): Menu[]{

    return resp.map(
      menu => new Menu(
        menu.modulo,
        menu.entidades
        )
      );
  }

  cargarAcciones(id:string){

    const url = `${base_url}/permisos/acciones/${id}`;
    return this.http.get(url, this.headers ).pipe(
      map((resp: {ok:boolean, menu:Menu}) => resp.menu)
    );
                    
  }

  cargarPermisos(id: string){

    const url = `${base_url}/permisos/${id}`;
    return this.http.get(url, this.headers).pipe(
      map((resp:{ok: boolean, permisos:Permiso[]})=> resp.permisos)  
    );

  }

  asignarPermisos(id: string, permisos: Permiso[]){

    const url = `${base_url}/permisos/${id}`;

    return this.http.post(url, permisos,this.headers);

  }

}
