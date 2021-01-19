import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {filter, map} from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';
import { Miga } from '../interfaces/miga-interfase';

@Component({
  selector: 'app-breadcrumds',
  templateUrl: './breadcrumds.component.html',
  styles: [
  ]
})
export class BreadcrumdsComponent implements OnDestroy {

  public titulo: string;
  public ruta: [] = [];
  public tituloSubs$: Subscription;
  public nombreAppi: string = environment.nombreApi;

  constructor( private router: Router ) { 
    this.tituloSubs$ = this.getArgumentosRuta()
                              .subscribe((res: any) => {
                                this.titulo =res.titulo;
                                console.log(res);
                                // console.log(ruta);
                                this.ruta = res.ruta;
                                
                                // TODO: Poner el nombre de la app
                                document.title = `nombreApp - ${res.titulo}`;
                              });
  }
  
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){

    console.log(this.router);

    return this.router.events
      .pipe(
        filter(event =>  event instanceof ActivationEnd),
        filter((event: ActivationEnd) =>  event.snapshot.firstChild === null),
        map((event: ActivationEnd) =>  event.snapshot.data  )
      );    
  }

}
