import { NgModule                           }  from '@angular/core';
import { RouterModule, Routes               }  from '@angular/router';
import { AppComponent                       }  from './app.component';
import { MenuComponent                      }  from './menu/menu.component';
import { RegistroInventarioComponent        }  from './registro-inventario/registro-inventario.component';
import { ModificarInventarioComponent       }  from './modificar-inventario/modificar-inventario.component';
import { InventarioComponent                }  from './inventario/inventario.component';
import { LoginComponent                     }  from './login/login.component';



import { HistorialPedidosComponent          }  from './historial-pedidos/historial-pedidos.component';



import { ComprarComponent                   }  from './comprar/comprar.component';
import { RegistroUsuarioComponent           }  from './registro-usuario/registro-usuario.component';

export const rutas: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'menu',              component: MenuComponent },
	{ path: 'inventario',        component: InventarioComponent },
	{ path: 'modificar',         component: ModificarInventarioComponent },
	{ path: 'login',             component: LoginComponent },
	{ path: 'detalle',           component: HistorialPedidosComponent },
	{ path: 'comprar',           component: ComprarComponent },
	{ path: 'registroUsuario',   component: RegistroUsuarioComponent },
	{ path: 'registro',          component: RegistroInventarioComponent }
];

@NgModule({
imports: [RouterModule.forRoot(rutas)],
exports: [RouterModule]
})

export class AppRoutingModule {
} //class AppRoutingModule

