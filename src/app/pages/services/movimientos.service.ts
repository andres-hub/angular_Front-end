import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movimiento } from '../models/movimientos.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

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

  crearMovimiento(movimiento: Movimiento){

    const url = `${base_url}/movimientos`;

    return this.http.post(url, movimiento, this.headers);
    
  }

  eliminarMovimiento(id: string){
    
    const url = `${base_url}/movimientos/${id}`;

    return this.http.delete(url, this.headers).pipe(
      map((resp:{ok:boolean, movimiento})=>{resp.movimiento})
    );

  }

}
