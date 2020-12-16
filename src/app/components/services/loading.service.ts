import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _cargando: boolean = true;

  get cargando() {
    return this._cargando;
  }

  constructor() { }

  ocultarLoading(){
    this._cargando = false;
  }

  mostrarLoading(){
    this._cargando = true;
  }

}
