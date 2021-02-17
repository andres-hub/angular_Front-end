import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { IngresosService } from '../services/ingresos.service';
import { LoadingService } from '../../components/services/loading.service';

import { Ingreso } from '../models/ingreso.model';
import { Movimiento } from '../models/movimientos.model';
import Swal from 'sweetalert2';
import { GastosService } from '../services/gastos.service';
import { Gasto } from '../models/gasto.model';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styles: [
  ]
})
export class PagosComponent implements OnInit {

  public totalIngresos: number = 0;
  public totalPagos: number = 0;
  public saldo: number = 0;
  public ingresos: Movimiento[];
  public gastos: Movimiento[];
  public movimientos: Movimiento[];

  constructor(
    private toastr: ToastrService,
    private ingresosService: IngresosService,
    private gastosService: GastosService,
    public loadingService: LoadingService,
    private movimientosService: MovimientosService
  ) {}

  ngOnInit(): void {
    this.cargarIngresos();
    this.cargarGastos();
  }

  convertirIngresosToMovimientos(ingresos: Ingreso[]): Movimiento[]{

    return ingresos.map(
      ingreso => new Movimiento(
         "",
         ingreso.nombre,
         false,
         "ingreso",
         ingreso._id,
         ingreso.valor,
         ""
        )
      );

  }

  convertirGastosToMovimientos(gastos: Gasto[]): Movimiento[]{

    return gastos.map(
      gasto => new Movimiento(
         "",
         gasto.nombre,
         false,
         "ingreso",
         gasto._id,
         gasto.valor,
         ""
        )
      );

  }

  cargarIngresos(){
    
    this.loadingService.mostrarLoading();

    this.ingresosService.cargarIngresos()
    .subscribe((ingresos: Ingreso[])=>{
      this.ingresos = this.convertirIngresosToMovimientos(ingresos);
      this.loadingService.ocultarLoading();
    },
    (err)=>{
      Swal.fire({
        title: '¡Error!',
        text: err.error.msg,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    });

  }

  cargarGastos(){
    
    this.loadingService.mostrarLoading();

    this.gastosService.cargarGastos()
    .subscribe((gastos: Gasto[])=>{
      this.gastos = this.convertirGastosToMovimientos(gastos);
      this.loadingService.ocultarLoading();
    },
    (err)=>{
      Swal.fire({
        title: '¡Error!',
        text: err.error.msg,
        icon: 'error',
        confirmButtonText: 'Ok'
      });      
    })

  }

  cambioIngreso(ingreso: Movimiento , event){
    if(event.target.checked){

      ingreso.pago = true;

      this.movimientosService.crearMovimiento(ingreso)
      .subscribe((res: any)=>{
        this.totalIngresos = this.totalIngresos + ingreso.valor;
        this.saldo = this.totalIngresos - this.totalPagos; 
        ingreso._id = res.movimiento._id;
        this.toastr.success(ingreso.nombre, '¡ Cuenta agregada !', {
          timeOut: 1000,
        });

        

      },
      (err)=>{
        Swal.fire({
          title: '¡Error!',
          text: err.error.msg,
          icon: 'error',
          confirmButtonText: 'Ok'
        }); 
        ingreso.pago = false;       
      });

    }else{
     
      this.movimientosService.eliminarMovimiento(ingreso._id)
      .subscribe((resp)=>{
        ingreso.pago = false;
        this.totalIngresos = this.totalIngresos - ingreso.valor;
        this.saldo = this.totalIngresos - this.totalPagos; 
        this.toastr.warning( ingreso.nombre, '¡ Cuenta removida !', {
          timeOut: 1000,
        });
      },
      (err)=>{
        Swal.fire({
          title: '¡Error!',
          text: err.error.msg,
          icon: 'error',
          confirmButtonText: 'Ok'
        });        
      });
 
    }
     
  }

  cambioGastos(gasto: Movimiento, event){

    if(event.target.checked){
         
      gasto.pago = true;

      this.movimientosService.crearMovimiento(gasto)
      .subscribe((res: any)=>{

        this.totalPagos = this.totalPagos + gasto.valor; 
        this.saldo = this.totalIngresos - this.totalPagos; 
        gasto._id = res.movimiento._id;
        this.toastr.success(gasto.nombre, '¡ Pagado !', {
          timeOut: 1000,
        });

      },
      (err)=>{
        Swal.fire({
          title: '¡Error!',
          text: err.error.msg,
          icon: 'error',
          confirmButtonText: 'Ok'
        }); 
        gasto.pago = false;       
      });
    
    }else{

      this.movimientosService.eliminarMovimiento(gasto._id)
      .subscribe((resp)=>{
        gasto.pago = false;        
        this.totalPagos = this.totalPagos - gasto.valor;
        this.saldo = this.totalIngresos - this.totalPagos;
        this.toastr.warning(gasto.nombre, '¡ Pagado cancelado !', {
          timeOut: 1000,
        });
      },
      (err)=>{
        Swal.fire({
          title: '¡Error!',
          text: err.error.msg,
          icon: 'error',
          confirmButtonText: 'Ok'
        });        
      });

    }

  }

}
