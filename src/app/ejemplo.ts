
/*
 * usada por ingresar-mercaderia.service.ts
 * para un CRUD de Producto
 */
export interface Producto{
id?:number;
nombre:string;
descripcion:string;
precio:number;
cantidad?:any;
subtotal?:any;
pic?:string;
}


/*
 * usada por usuarios.service.ts
 * para un CRUD de Usuario
 */
export interface Usuario{
//id?:any; // previo a cambios de tipo especifico en lugar de any
id?:number;
clave:string;
nombreCliente?:string;
nitCliente?:string;
direccionCliente?:string;
}




/*
 * usada por ingresar-mercaderia.service.ts
 * para enviar Factura con agregarAlCarrito()
 * del componente ComprarComponent heredado/copiado/modificado 
 * del componente InventarioComponent ya que se modifica para
 * el proposito correcto.
 */
export interface Factura{
id?:number;
usuario:number;
total:number;
fechacompra?:string;
nombreCliente?:string;
nitCliente?:string;
direccionCliente?:string;
}










export interface DetalleFactura{
numeroFactura         :number;
idproducto            :number;
nombreProducto        :string;
cantidadProducto      :number;
precioProducto        :number;
subtotalProducto      :number;
fechaCompra           :string;
nombreCliente         :string;
nitCliente            :string;
direccionCliente      :string;
totalFactura          :number;
}


