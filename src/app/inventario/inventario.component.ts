import { Component, OnInit }            from '@angular/core';
import { IngresarMercaderiaService }    from '../ingresar-mercaderia.service';
import { FacturasService               } from '../facturas.service';
import { Producto }                     from '../ejemplo';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})


export class InventarioComponent implements OnInit {

productos:Producto[];
usuario = -1;

constructor(
private compras:FacturasService,
private servicio:IngresarMercaderiaService  
) {
this.productos = [];
this.usuario = this.compras.getUsuarioActual();
} // constructor



getProductos():void{
this.servicio.getProductos().subscribe( productos => this.productos = productos );
} //getProductos()




eliminarProducto(p:Producto):void{
this.servicio.eliminarProducto(p).subscribe();
} //eliminarProducto()




cleanProductos():void{
		this.productos = [];
} //cleanProductos()


ngOnInit(): void {
} // ngOnInit


} // class InventarioComponent

