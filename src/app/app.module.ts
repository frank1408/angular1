import { NgModule                     } from '@angular/core';
import { FormsModule                  } from '@angular/forms';
import { BrowserModule                } from '@angular/platform-browser';
import { AppRoutingModule             } from './app-routing.module';
import { HttpClientModule             } from '@angular/common/http';
import { AppComponent                 } from './app.component';
import { MenuComponent                } from './menu/menu.component';
import { RegistroInventarioComponent  } from './registro-inventario/registro-inventario.component';
import { HistorialPedidosComponent    } from './historial-pedidos/historial-pedidos.component';
import { RegistroUsuarioComponent     } from './registro-usuario/registro-usuario.component';
import { InventarioComponent          } from './inventario/inventario.component';
import { ModificarInventarioComponent } from './modificar-inventario/modificar-inventario.component';
import { LoginComponent               } from './login/login.component';
import { ComprarComponent             } from './comprar/comprar.component';

@NgModule({
declarations: [
AppComponent,
MenuComponent,
RegistroInventarioComponent,
RegistroUsuarioComponent,
HistorialPedidosComponent,
InventarioComponent,
ModificarInventarioComponent,
ComprarComponent,
LoginComponent
],
imports: [
BrowserModule,
HttpClientModule,
AppRoutingModule,
FormsModule
],
providers: [
],
bootstrap: [AppComponent]
})
export class AppModule {

} //class AppModule


