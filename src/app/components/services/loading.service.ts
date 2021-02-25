import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private body = document.querySelector('#body');  

  private _cargando: boolean = true;

  get cargando() {
    return this._cargando;
  }

  constructor() { }

  ocultarLoading(){
    var widthBrowser = window.outerWidth;
    console.log(widthBrowser);
    if( widthBrowser < 999 ){      
      this.body.setAttribute('class', 'fix-header card-no-border fix-sidebar mini-sidebar');
      var btnMenu = document.querySelector('#Menu');
      if(btnMenu){
        console.log(btnMenu);  
        btnMenu.setAttribute('class', 'ti-menu');
      }
    }
    this._cargando = false;
  }

  mostrarLoading(){
    this._cargando = true;
  }

}
