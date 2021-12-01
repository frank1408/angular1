import { Component, OnInit, Input }         from '@angular/core';
import { IngresarMercaderiaService }        from '../ingresar-mercaderia.service';
import { FacturasService               } from '../facturas.service';
import { Producto }                         from '../ejemplo';

@Component({
  selector: 'app-modificar-inventario',
  templateUrl: './modificar-inventario.component.html',
  styleUrls: ['./modificar-inventario.component.css']
})

export class ModificarInventarioComponent implements OnInit {

@Input() p: Producto;
usuario = -1;

constructor(
private i:IngresarMercaderiaService,
private compras:FacturasService  
) {
this.usuario = this.compras.getUsuarioActual();
this.p= {
id: -1,
nombre: "",
descripcion: "",
precio: 0
};



} // constructor

ngOnInit(): void {
} // ngOnIinit


modificarProducto( p:Producto ) {
this.i.modificarProducto(p).subscribe( x => this.p = x );
} //modificarProducto()


getProducto( p:Producto ) {
this.i.getProducto(p).subscribe( x => this.p = x );
} //getProducto()




} // class ModificarInventarioComponent
