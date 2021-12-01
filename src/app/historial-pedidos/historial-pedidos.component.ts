import { Component, OnInit             } from '@angular/core';
import { FacturasService               } from '../facturas.service';
import { Producto, DetalleFactura      } from '../ejemplo';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.css']
})


export class HistorialPedidosComponent implements OnInit {

detallefactura:DetalleFactura[];
total:number = 0;
usuario:number = -1;

constructor(
private compras:FacturasService,
){
this.total = 0;
this.detallefactura = [];
this.usuario = this.compras.getUsuarioActual();
} // constructor














getDetalleFactura():void{
this.compras.getDetalleFactura().subscribe( df => this.detallefactura = df ); 
} //getProductos()













cleanMiDetalleFactura():void{
this.detallefactura = [];
this.getDetalleFactura();
} //cleanProductos()

ngOnInit():void {} // ngOnInit
} // class InventarioComponent


