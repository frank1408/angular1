import { Injectable                        } from '@angular/core';
import { HttpClient, HttpHeaders           } from '@angular/common/http';
import { Observable, of, throwError        } from 'rxjs';
import { catchError, retry, map, tap       } from 'rxjs/operators';
import { Producto, Factura, Usuario        } from './ejemplo';
import { LoginComponent                    } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

usuarioRegistrado:Usuario;

constructor(
private http: HttpClient,

){


this.usuarioRegistrado = {
id: -1,
clave: ""
} // this.usuarioRegistrado


} // constructor()

private urlapi = 'http://localhost:59052/api/tablausuario';

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















getUsuarioActual():number{
if(
this.usuarioRegistrado.id === NaN
|| this.usuarioRegistrado.id == NaN
|| this.usuarioRegistrado.id === undefined
|| this.usuarioRegistrado.id == undefined
){
this.usuarioRegistrado.id = 3; // ni modo...
}
return this.usuarioRegistrado.id;
}















addUsuario(u: Usuario): Observable<Usuario> {
return this.http.post<Usuario>(this.urlapi, u, this.httpOptions)
.pipe(
	catchError( this.handleError('addUsuario', u )  )
);
}















getUsuarios(): Observable<Usuario[]> {
		return this.http.get<Usuario[]>(this.urlapi)
			.pipe(
				catchError(this.handleError<Usuario[]>('getUsuarios', []))
			);
} //getUsuarios












getUsuario(u: Usuario): Observable<Usuario> {
const url_get_id = `${this.urlapi}/${u.id}`;
		return this.http.get<Usuario>(url_get_id)
			.pipe(
				catchError(
						this.handleError<Usuario>('getUsuario', u )
				)
			);
} // getUsuario opc 1

getUsuarioFactura(u: number): Observable<Usuario> {
const url_get_id = `${this.urlapi}/${u}`;
return this.http.get<Usuario>(url_get_id)
.pipe(catchError(
this.handleError<Usuario>('getUsuario')
));
} // getUsuario opc 2















modificarUsuario(u: Usuario): Observable<Usuario> {
const url_get_id = `${this.urlapi}/${u.id}`;
return this.http.put<Usuario>(url_get_id, u, this.httpOptions)
.pipe(
	catchError( this.handleError('modificarUsuario', u )  )
);
}

















eliminarUsuario(u: Usuario): Observable<unknown> {
const url_get_id = `${this.urlapi}/${u.id}`;
return this.http.delete<Usuario>(url_get_id, this.httpOptions)
.pipe(
catchError( this.handleError('eliminarUsuario' )  )
);
}









} // export class UsuariosService { 


