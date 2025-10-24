// 1.funcion autoinvocada >Inicializa el carrito con productos predefinidos y muestra el mensaje de bienvenida.
const carrito = (() => {
    const productosIniciales = [
        { nombre: "Zapatillas", precio: 60 },
        { nombre: "Gorra", precio: 12 }
    ];

    console.log(`\n🛒 Bienvenido al carrito inteligente. Ya tienes ${productosIniciales.length} productos cargados.`);
    
    return productosIniciales; 
})();


//2.funcion de agregar producto > agrega un producto con alert de confirmacion
function agregarProducto(lista, producto) {
    if (producto && producto.nombre && typeof producto.precio === 'number') {
        lista.push(producto); 
        alert(`✅ Producto "${producto.nombre}" agregado al carrito.`);
    } else {
        console.log("❌ Error: Formato de producto incorrecto.");
        alert("❌ Error: Formato de producto incorrecto.");
    }
}

//3. funcion anonima de mostrar carrito > muestra el contenido del carrito con alert y almacenado en una variable el mensaje
let mostrarCarrito = function(lista) {
    if (lista.length === 0) {
        //que la lista esta vacio pues me lo dice por consola y ademas me lo muestra en una alerta
        console.log("El carrito está vacío.");
        alert("El carrito está vacío. ¡Añade productos!");
        
    }else{
        //si no esta vacio pues me muestra el contenido del carrito y el total en un alert
        let mensaje = "Contenido del Carrito:\n"; // Usamos \n para saltos de línea
        let total = 0;
        
        //recorremos el carro lista y vamos formando el mensaje ademas de enumerar los productos con el index
        lista.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.nombre} - ${producto.precio.toFixed(2)}€\n`;
           
        });
        
        mensaje += "-----------------------------\n";
        
        console.log(mensaje); // Lo mantenemos para la consola 
        alert(mensaje);       //  Muestra el resultado en una ventana 
    }
};


// 4. funcion flecha calcularTotal > Utiliza el método 'reduce' para sumar todos los precios del carrito.
let calcularTotal = (lista) => {
    // reduce((acumulador, producto) => acumulador + producto.precio, 0)
    let total = lista.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    return total;
};


// 5. función de orden superior callback gestionarCarrito > funcion que contiene a otra como parametro
// Recibe el carrito y una función de callback para realizar la operación deseada ademas de uno adicional para poder agregar productos
function gestionarCarrito(lista, operacion,parametroAdicional = null) {
console.log("\n--- Gestión de Carrito Iniciada ---");
    
    let resultado;
    if (parametroAdicional !== null) {
        // Ejecuta la operación pasando la lista y el parámetro extra (para agregarProducto)
        resultado = operacion(lista, parametroAdicional); 
    } else {
        // Ejecuta la operación solo con la lista (para mostrarCarrito, calcularTotal)
        resultado = operacion(lista);                    
    }
    
    console.log("--- Gestión Finalizada ---");
    return resultado;
}


// =======================================================================================
// DEMOSTRACIÓN DE USO
console.log("\n==== DEMOSTRACIÓN DE FUNCIONALIDADES ====");
let opcion=0;

//menu de acciones
    do {
      opcion = parseInt(prompt(
        "=== MENÚ PRINCIPAL ===\n" +
        "1. Agregar producto\n" +
        "2. Mostrar productos\n" +
        "3. calcular total\n" +
        "4. Salir\n\n" +
        "Elige una opción:"
      ));

      switch (opcion) {
        case 1:

            let nombre = prompt("Ingrese el nombre del producto:");
            let precio = parseFloat(prompt("Ingrese el precio del producto:"));
            // Control de errores básico de si no me metes los datos na nai de la china
                if (nombre === null || precio === null || isNaN(precio) || precio <= 0) {
                    alert("Entrada no válida. Operación cancelada.");
                    break;
                }
            //creamos el nuevo producto
            let productoNuevo = { nombre: nombre.trim(), precio };
            //le pasamos el nuevo producto a la funcion gestionar carrito junto con la funcion agregar producto
            gestionarCarrito(carrito, agregarProducto, productoNuevo);
          break;
        case 2:
            //mostramos el carrito
            gestionarCarrito(carrito, mostrarCarrito);
          break;
        case 3:
            //como este nos deuelve un valor lo guardamos en una variable y hacemos alert
            const totalCompra = gestionarCarrito(carrito, calcularTotal);
            alert(`💰 El total final de la compra es: ${totalCompra}€`);
          break;
        case 4:
            alert("Saliendo del menú. ¡Hasta luego!");
            break;
      }}while(opcion !== 4) ;
