import { Component, OnInit             } from '@angular/core';
import { FacturasService               } from '../facturas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

creador = 'Franklin Rodriguez';
carne   = '9941 18 5695';
usuario = -1;

constructor(
private compras:FacturasService  
) {
this.usuario = this.compras.getUsuarioActual()
} //constructor



ngOnInit(): void { } //ngOnInit

} // MenuComponent


