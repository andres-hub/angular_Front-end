import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { Movimiento } from '../models/movimientos.model';

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

  convertirMovimientos(movimientos: any[]): Movimiento[]{

    return movimientos.map(
      movimiento => new Movimiento(
         movimiento._id,
         movimiento.nombre,
         movimiento.pago,
         movimiento.Tipo,
         movimiento._id,
         movimiento.valor,
         movimiento.fecha
        )
      );

  }

  pagarMovimiento(movimiento: Movimiento){

    const url = `${base_url}/movimientos/${movimiento._id}`;

    return this.http.put(url, movimiento,this.headers).pipe(
      map((resp:{ok:boolean, movimiento})=>{resp.movimiento})
    );
    
  }

  eliminarMovimiento(id: string){
    
    const url = `${base_url}/movimientos/${id}`;

    return this.http.delete(url, this.headers).pipe(
      map((resp:{ok:boolean, movimiento})=>{resp.movimiento})
    );

  }

  cargarMovimientos(quincena: string, tipo: 'gastos' | 'ingresos'){

    const url = `${base_url}/movimientos/${tipo}/${quincena}`;

    return this.http.get(url, this.headers).pipe(

      map((resp: any)=>{
        const gastos = this.convertirMovimientos(resp.movimientos);        
        return gastos;
      })

    );

  }

}
