import { Injectable                                   } from '@angular/core';
import { HttpClient, HttpHeaders                      } from '@angular/common/http';
import { Observable, of, throwError                   } from 'rxjs';
import { catchError, retry, map, tap                  } from 'rxjs/operators';
import { Producto, Usuario, Factura,DetalleFactura    } from './ejemplo';
import { UsuariosService                              } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

private urlapi = 'http://localhost:59052/api/tablafactura';
usuarioRegistrado:Usuario;
xfecha = new Date();
yfecha = "";
idfacturaparadetallefactura = -1;



constructor( 
private http: HttpClient,
private i:UsuariosService
){
this.xfecha = new Date();
this.yfecha = "hola";

this.idfacturaparadetallefactura = -1;

this.usuarioRegistrado = {
id: -1,
clave: ""
} // usuarioRegistrado

} // constructor()






















getDetalleFactura(): Observable<DetalleFactura[]> {
let urlx = "http://localhost:59052/api/tabladetallefactura";
return this.http.get<DetalleFactura[]>( urlx )
.pipe(
catchError(this.handleError<DetalleFactura[]>('getDetalleFactura', []))
);
} //getDetalleFactura




























httpOptions = {
headers: new HttpHeaders({
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Headers': '*',
'Access-Control-Allow-Methods': '*',
'Content-Type': 'application/json'
})
};







private handleError<T>(operation = 'operation', result?: T) {
return (error: any): Observable<T> => {
console.error(error);
return of(result as T);
};
}




getUsuarioActual():number {
if(
   this.usuarioRegistrado.id === NaN
|| this.usuarioRegistrado.id == NaN
|| this.usuarioRegistrado.id === undefined
|| this.usuarioRegistrado.id == undefined
){
   this.usuarioRegistrado.id = -1; // no hay usuario logeado
}

return this.usuarioRegistrado.id;
} // getUsuarioActual()

getNombreActual():string {
if(
 this.usuarioRegistrado.nombreCliente === undefined
|| this.usuarioRegistrado.nombreCliente == undefined
){
   this.usuarioRegistrado.nombreCliente = "anonimo"; // no hay usuario logeado
}

return this.usuarioRegistrado.nombreCliente;
} // getNombreActual()

getNitActual():string {
if(
 this.usuarioRegistrado.nitCliente === undefined
|| this.usuarioRegistrado.nitCliente ==  undefined
){
   this.usuarioRegistrado.nitCliente = "000"; // no hay usuario logeado
}

return this.usuarioRegistrado.nitCliente;

} // getNitActual()

getDireccionActual():string {
if(
 this.usuarioRegistrado.direccionCliente === undefined
|| this.usuarioRegistrado.direccionCliente ==  undefined
){
   this.usuarioRegistrado.direccionCliente = "somewhere in this world"; // no hay usuario logeado
}

return this.usuarioRegistrado.direccionCliente;

} // getDireccionActual()

















actualizarDatosDetalleFactura(){
this.i.getUsuarioFactura( this.usuarioRegistrado.id! ).subscribe(f => {
this.usuarioRegistrado.nombreCliente    =  f.nombreCliente!;
this.usuarioRegistrado.nitCliente       =  f.nitCliente!;
this.usuarioRegistrado.direccionCliente =  f.direccionCliente!;
});
} // actualizarDatosDetalleFactura()











addFactura(f: Factura): Observable<Factura> {
this.xfecha = new Date();
var lafechaEs =this.xfecha.getFullYear()  +  "-"  + (this.xfecha.getMonth()+1)  +  "-"  +  this.xfecha.getDate() + " "+ this.xfecha.getHours()+":"+this.xfecha.getMinutes()+":"+this.xfecha.getSeconds();
this.yfecha = String(lafechaEs);
f.fechacompra = String(this.yfecha);
return this.http.post<Factura>(this.urlapi, f, this.httpOptions)
.pipe(
	catchError( this.handleError('addFactura', f )  )
);
} // addFactura(f: Factura)










addFacturaReal(f: DetalleFactura): Observable<DetalleFactura> {
this.actualizarDatosDetalleFactura();
this.idfacturaparadetallefactura = f.numeroFactura;

f.nombreCliente    = this.usuarioRegistrado.nombreCliente!;
f.nitCliente       = this.usuarioRegistrado.nitCliente!;
f.direccionCliente = this.usuarioRegistrado.direccionCliente!;
f.fechaCompra      = String(this.yfecha);

let urlx = 'http://localhost:59052/api/tabladetallefactura';

return this.http.post<DetalleFactura>(urlx, f, this.httpOptions)
.pipe(
	catchError( this.handleError('addDetalleFactura', f )  )
);
} // addFacturaReal(f: DetalleFactura)









getFacturas(): Observable<Factura[]> {
		return this.http.get<Factura[]>(this.urlapi)
			.pipe(
				catchError(this.handleError<Factura[]>('getFacturas', []))
			);
} //getFacturas

getFactura(f: Factura): Observable<Factura> {
const url_get_id = `${this.urlapi}/${f.id}`;
		return this.http.get<Factura>(url_get_id)
			.pipe(
				catchError(this.handleError<Factura>('getFactura', f ))
			);
}

modificarFactura(f: Factura): Observable<Factura> {
const url_get_id = `${this.urlapi}/${f.id}`;
return this.http.put<Factura>(url_get_id, f, this.httpOptions)
.pipe(
	catchError( this.handleError('modificarFactura', f )  )
);
}

eliminarFactura(f: Factura): Observable<unknown> {
const url_get_id = `${this.urlapi}/${f.id}`;
return this.http.delete<Factura>(url_get_id, this.httpOptions)
.pipe(
catchError( this.handleError('eliminarFactura' )  )
);
}


































} // export class FacturasService


