import { Component, OnInit, Input      } from '@angular/core';
import { IngresarMercaderiaService     } from '../ingresar-mercaderia.service';
import { UsuariosService               } from '../usuarios.service';
import { FacturasService               } from '../facturas.service';
import { Producto, Factura, Usuario, DetalleFactura } from '../ejemplo';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

@Input() productos:Producto[];
psolicitados:Producto[];
factura:Factura;
freal:DetalleFactura;

constructor(
private servicio:IngresarMercaderiaService,
private registrado:UsuariosService,
private compras:FacturasService  
) {
this.productos    = []; // productos traidos de DB
this.psolicitados = []; // productos solicitados por usuario

this.freal = {
numeroFactura: -1,
idproducto: -1,
nombreProducto: "",
cantidadProducto: -1,
precioProducto: -1,
subtotalProducto: -1,
fechaCompra: "",
nombreCliente: "",
nitCliente: "",
direccionCliente: "",
totalFactura: -1

} // this.freal


this.factura = {
usuario:          this.compras.getUsuarioActual(),
nombreCliente:    this.compras.getNombreActual(),
nitCliente:       this.compras.getNitActual(),
direccionCliente: this.compras.getDireccionActual(),
total: 0
} // this.factura
} // constructor



actualizarID():void{

this.factura = {

usuario:          this.compras.getUsuarioActual(),
nombreCliente:    this.compras.getNombreActual(),
nitCliente:       this.compras.getNitActual(),
direccionCliente: this.compras.getDireccionActual(),
total:            this.getTotal()
} // this.factura

this.compras.actualizarDatosDetalleFactura();

} // actualizarID






getProductos():void{
this.servicio.getProductos().subscribe( productos => this.productos = productos );
} //getProductos()














initProductos():void{
for (let x of this.productos){
	x.cantidad = 0;
	x.subtotal = 0;
} // for
} // initProductos()














verCarrito():void{
var totalFactura:number = 0;
    totalFactura = this.getTotal();

var detalle_factura:string = "";

detalle_factura="Detalle de productos en el Carrito:\n";

for ( let x of this.psolicitados ){
detalle_factura+="\n"+ x.cantidad +" "+ x.nombre+" a "+x.precio+" c/u"+"-->  Q."+x.subtotal;
} //for

detalle_factura += "\n\nTotal: " + this.factura.total;
alert(detalle_factura);

} //verCarrito NUEVA NUEVA





getTotal(): number{


var suma:number = 0;
let pedidos = this.productos;

for (var p of pedidos ) {
p.subtotal = 0;
if(
p.cantidad === NaN
|| p.cantidad == NaN
|| p.cantidad === undefined
){
		p.cantidad = 0;
} // if
} // for
for (var p of pedidos ) {
		if( p.cantidad === NaN ){
				p.cantidad = 0;
		}else{
				p.subtotal = p.cantidad * p.precio;
				suma += p.subtotal;
		}
} // for
this.factura.total = suma;
return suma;
} //getTotal NUEVA NUEVA



calcularFactura():void{
this.factura.total = this.getTotal();
} // calcularFactura()









agregarAlCarrito(p:Producto):void{
this.psolicitados.push(p);
} //agregarAlCarrito()








agregarFacturaReal(f:DetalleFactura):void{
for (let p of this.psolicitados ) {
		f.idproducto        = p.id!;    
		f.nombreProducto    = p.nombre!;
		f.cantidadProducto  = p.cantidad!;
		f.precioProducto    = p.precio!;
		f.subtotalProducto  = p.subtotal!;
		f.fechaCompra       = "1997-08-14 11:30:00"!;
		f.nombreCliente     = this.factura.nombreCliente!;
		f.nitCliente        = this.factura.nitCliente!;
		f.direccionCliente  = this.factura.direccionCliente!;
		f.totalFactura      = this.factura.total!;
		this.compras.addFacturaReal(f).subscribe();
} // for

} //agregarFacturaReal()












agregarFactura(f:Factura):void{
this.actualizarID();
this.compras.addFactura(f).subscribe(    f => {
		alert("\n\nFactura Generada: "+f.id);
		this.freal.numeroFactura = f.id!;
		this.freal.fechaCompra   = f.fechacompra!;
		this.freal.totalFactura  = f.total!;
		this.agregarFacturaReal(this.freal);
});
} //agregarFactura()






cleanProductos():void{
this.productos = [];
this.psolicitados= [];
this.factura = {
usuario: 3,
nombreCliente:    "Franklin Rodriguez",
nitCliente:       "88114400",
direccionCliente: "21 AV 5-10 Z 12",
total: 0
} // this.factura
} //cleanProductos()

ngOnInit(): void {} // ngOnInit

} // class ComprarComponent


