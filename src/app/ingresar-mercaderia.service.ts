import { Injectable                        } from '@angular/core';
import { HttpClient, HttpHeaders           } from '@angular/common/http';
import { Observable, of, throwError        } from 'rxjs';
import { catchError, retry, map, tap       } from 'rxjs/operators';
import { Producto, Usuario                 } from './ejemplo';

@Injectable({
  providedIn: 'root'
})
export class IngresarMercaderiaService {

constructor( private http: HttpClient ) {
} //constructor



private urlapi = 'http://localhost:59052/api/tablaproducto';

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










addProducto(p: Producto): Observable<Producto> {
return this.http.post<Producto>(this.urlapi, p, this.httpOptions)
.pipe(
	catchError( this.handleError('addProducto', p )  )
);
}










getProductos(): Observable<Producto[]> {
		return this.http.get<Producto[]>(this.urlapi)
			.pipe(
				catchError(this.handleError<Producto[]>('getProductos', []))
			);
} //getProductos













getProducto(p: Producto): Observable<Producto> {
const url_get_id = `${this.urlapi}/${p.id}`;
		return this.http.get<Producto>(url_get_id)
			.pipe(
				catchError(this.handleError<Producto>('getProducto', p ))
			);
}












modificarProducto(p: Producto): Observable<Producto> {
const url_get_id = `${this.urlapi}/${p.id}`;
return this.http.put<Producto>(url_get_id, p, this.httpOptions)
.pipe(
	catchError( this.handleError('modificarProducto', p )  )
);
}


















eliminarProducto(p: Producto): Observable<unknown> {
const url_get_id = `${this.urlapi}/${p.id}`;
return this.http.delete<Producto>(url_get_id, this.httpOptions)
.pipe(
catchError( this.handleError('eliminarProducto' )  )
);
}
















} //class IngresarMercaderiaService


