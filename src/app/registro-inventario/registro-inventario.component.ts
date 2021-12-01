import { Component, OnInit, Input }  from '@angular/core';
import { IngresarMercaderiaService } from '../ingresar-mercaderia.service';
import { Producto }                  from '../ejemplo';
import { FacturasService               } from '../facturas.service';

@Component({
  selector: 'app-registro-inventario',
  templateUrl: './registro-inventario.component.html',
  styleUrls: ['./registro-inventario.component.css']
})

export class RegistroInventarioComponent implements OnInit {

@Input() p: Producto;
usuario:number;

constructor(
private i:IngresarMercaderiaService,
private compras:FacturasService  
) {
this.usuario =this.compras.getUsuarioActual(),
this.p= {
nombre: "",
descripcion: "",
precio: 0
};

} //constructor

ngOnInit(): void {
} //ngOnInit

limpiarProducto(){
this.p= {
nombre: "",
descripcion: "",
precio: 0
}
} //limpiarProducto

registrarProducto( p:Producto ) {
this.i.addProducto(p).subscribe( p => console.log(p) );
} //registrarProducto()

} // class RegistroInventarioComponent


