class Indumentaria {
    constructor (nombre, precio, cantidad){
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.cantidad = parseInt (cantidad)
    }
    agregarDescuento(){
        return this.precio * 0.9
    }
}

let nombreUsuario = prompt("Ingrese su nombre")
if(nombreUsuario !=="" && nombreUsuario!=="ESC"){
    alert(`¡Hola ${nombreUsuario}! Te damos la bienvenida a nuestro sitio`)
}
let productos = [] //declaro array vacío
let nombreProducto
alert("INICIO DE CARGA DE PRODUCTOS AL SISTEMA")
do { //carga de datos    
    nombreProducto = prompt ("Ingrese nombre de producto que desea agregar. Escriba ESC para salir")
    if(nombreProducto === "ESC" || nombreProducto === "Esc" || nombreProducto === "esc"){
    break
    }else{
        let precioProducto = parseFloat(prompt("Ingrese precio de venta del producto"))
        let cantidadProducto = parseInt (prompt("Ingrese cantidad en stock"))
        productos.push(new Indumentaria (nombreProducto, precioProducto, cantidadProducto))
    }
}
while (nombreProducto !== "ESC" || nombreProducto !== "Esc" || nombreProducto !== "esc")

console.log (productos) //Muestra productos cargados por consola

for (var producto of productos){ //Recorre el array
    console.log("El producto registrado es: "+ producto.nombre)
    console.log("El precio de venta del producto es: $" + producto.precio)
    console.log("La cantidad en stock es: " + producto.cantidad + " unidades") 
    console.log("El precio del producto con 10% de descuento es: $" + producto.agregarDescuento())
}

//BUSCAR UN PRODUCTO(FILTER)
let buscar = prompt("Ingrese producto que desea buscar: ")
let arrayProductos = productos.filter ((producto)=> producto.nombre.includes (buscar))
console.log(arrayProductos) //Devuelve el producto buscado
for (var producto of arrayProductos){ //Recorre el array nuevo
    console.log("El producto solicitado es: "+ producto.nombre)
    console.log("El precio  de venta del producto solicitado es: $" + producto.precio)
    console.log("La cantidad en stock del producto solicitado es: " + producto.cantidad + " unidades") 
    console.log("El precio de venta del producto solicitado con 10% de descuento es: $" + producto.agregarDescuento())
}

//SIN STOCK 
let consultaStock =prompt("¿De qué producto desea consultar el stock?")
let sinStock = productos.filter((producto)=> producto.cantidad === 0)
console.log ("Producto sin stock.")
console.log(sinStock)
for (var producto of sinStock){ //Recorre el array nuevo
    console.log("El producto sin stock es: "+ producto.nombre)
    console.log("El precio de venta del producto sin stock es: $" + producto.precio)
    console.log("La cantidad en stock del producto solicitado es: " + producto.cantidad + " unidades") 
    console.log("El precio de venta del producto sin stock con 10% de descuento es: $" + producto.agregarDescuento())
}

//ORDENAR POR CANTIDAD
let ordenarPorCantidad = []
ordenarPorCantidad = productos.map((elemento)=>elemento)
ordenarPorCantidad.sort(function(a,b){ return a.cantidad - b.cantidad})
console.log("Ordenados por cantidad en stock: ")
console.log(ordenarPorCantidad)
for (var producto of ordenarPorCantidad){ //Recorre el array nuevo
    console.log("El producto es: "+ producto.nombre)
    console.log("El precio del producto es: $" + producto.precio)
    console.log("La cantidad del producto solicitado es: " + producto.cantidad + " unidades") 
    console.log("El precio del producto con 10% de descuento es: $" + producto.agregarDescuento())
}
