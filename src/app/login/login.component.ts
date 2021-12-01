import { Injectable, Component, OnInit, Input         } from '@angular/core';
import { Observable, of, throwError                   } from 'rxjs';
import { catchError, retry, map, tap                  } from 'rxjs/operators';
import { HttpClient, HttpHeaders                      } from '@angular/common/http';
import { AppRoutingModule, rutas                      } from '../app-routing.module';
import { RouterModule, Routes, Router                 } from '@angular/router';
import { FacturasService                              } from '../facturas.service';
import { UsuariosService                              } from '../usuarios.service';
import { Usuario                                      } from '../ejemplo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@Input() u: Usuario;

constructor(
private i:UsuariosService,
private f:FacturasService,
private router:Router,

) {

this.u = {
clave: ""
// este usuario lo digita
};

} // constructor()

validarUsuario( user: Usuario):void{
var xclave = "";
this.i.getUsuario(user).subscribe( user => { 

xclave = user.clave;
if (
		this.u.clave === undefined 
		|| this.u.clave === null 
		|| this.u.id === undefined
        || this.u.id === null
		|| xclave.length < 1  
		|| this.u.clave.length < 1
		|| this.u.clave == ""
		|| this.u.clave !== xclave
){
		alert("Usuario/Datos Invalidos");
}else{
		alert("Login OK\nBienvenido, su id es: " + this.u.id );
		this.router.navigateByUrl('menu');
		this.f.usuarioRegistrado.id = this.u.id;
} // else

});

} // validarUsuario()

ngOnInit(): void {
} // ngOnInit()

} // class LoginComponent 


