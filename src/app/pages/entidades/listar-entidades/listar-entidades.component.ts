import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoadingService } from '../../../components/services/loading.service';

@Component({
  selector: 'app-listar-entidades',
  templateUrl: './listar-entidades.component.html',
  styles: [
  ]
})
export class ListarEntidadesComponent implements OnInit {


  public cargando = true;

  constructor(
    public loadingService:LoadingService
  ) { }

  ngOnInit(): void {
  }

  ocultarloadin(){
    console.log('aqui');
    this.loadingService.ocultarLoading();
  }

}
