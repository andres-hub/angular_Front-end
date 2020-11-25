import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumds',
  templateUrl: './breadcrumds.component.html',
  styles: [
  ]
})
export class BreadcrumdsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router ) { 
    this.tituloSubs$ = this.getArgumentosRuta()
                              .subscribe(({titulo}) => {
                                this.titulo = titulo;
                                // TODO: Poner el nombre de la app
                                document.title = `nombreApp - ${titulo}`;
                              });
  }
  
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){
    return this.router.events
      .pipe(
        filter(event =>  event instanceof ActivationEnd),
        filter((event: ActivationEnd) =>  event.snapshot.firstChild === null),
        map((event: ActivationEnd) =>  event.snapshot.data)
      );    
  }

}
