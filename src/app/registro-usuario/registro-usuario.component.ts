import { Component, OnInit, Input                      } from '@angular/core';
import { UsuariosService                               } from '../usuarios.service';
import { Usuario                                       } from '../ejemplo';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})

export class RegistroUsuarioComponent implements OnInit {

@Input() u: Usuario;

constructor( private i:UsuariosService ) {

this.u= {
clave: "",
};

} //constructor

ngOnInit(): void {
} //ngOnInit

limpiarUsuario(){
this.u= {
clave: "",
}
} //limpiarProducto

registrarUsuario( u:Usuario ) {
this.i.addUsuario(u).subscribe( u => alert("Datos de Inicio de Sesion\n\nTu ID es: " + u.id + "\n\nGracias por usar nuestros servicios...") );
this.limpiarUsuario();
} //registrarUsuario()

} // class RegistroUsuarioComponent


