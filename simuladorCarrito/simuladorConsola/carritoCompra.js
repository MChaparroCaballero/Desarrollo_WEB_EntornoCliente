





// 1.funcion autoinvocada >Inicializa el carrito con productos predefinidos y muestra el mensaje de bienvenida.
const carrito = (() => {
    const productosIniciales = [
        { nombre: "Zapatillas", precio: 60 },
        { nombre: "Gorra", precio: 12 }
    ];

    console.log(`\n🛒 Bienvenido al carrito inteligente. Ya tienes ${productosIniciales.length} productos cargados.`);
    
    return productosIniciales; 
})();


//2.funcion de agregar producto 
function agregarProducto(lista, producto) {
    if (producto && producto.nombre && typeof producto.precio === 'number') {
        lista.push(producto); 
    } else {
        console.log("❌ Error: Formato de producto incorrecto.");
    }
}

//3. funcion anonima de mostrar carrito > muestra el contenido del carrito y almacenado en una variable el mensaje
let mostrarCarrito = function(lista) {
    if (lista.length === 0) {
        console.log("El carrito está vacío.");
        
    }else{
    
    console.log("\n--- Contenido del Carrito ---");
    lista.forEach((producto, index) => {
        // Formato: 1. Zapatillas - 60€
        console.log(`${index + 1}. ${producto.nombre} - ${producto.precio}€`);
    });
    console.log("-----------------------------\n");
}
};

// 4. funcion flecha calcularTotal > Utiliza el método 'reduce' para sumar todos los precios del carrito.
let calcularTotal = (lista) => {
    // reduce((acumulador, producto) => acumulador + producto.precio, 0)
    let total = lista.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    return total;
};

// 5. función de orden superior callback gestionarCarrito > funcion que contiene a otra como parametro >Recibe el carrito y una función de callback para realizar la operación deseada.
function gestionarCarrito(lista, operacion) {
    console.log("\n--- Gestión de Carrito Iniciada ---");
    // Ejecuta la función de callback, pasándole el carrito como argumento
    let resultado = operacion(lista);
    console.log("--- Gestión Finalizada ---\n");
    return resultado;
}


// =======================================================================================
// DEMOSTRACIÓN DE USO
console.log("\n==== DEMOSTRACIÓN DE FUNCIONALIDADES ====");

// --- Uso de Función Declarada (agregarProducto) ---
agregarProducto(carrito, { nombre: "Camisa", precio: 35 });
agregarProducto(carrito, { nombre: "Calcetines", precio: 8 });

// --- Uso de Función de Orden Superior con Callback 'mostrarCarrito' (Función Anónima) ---
gestionarCarrito(carrito, mostrarCarrito);

// --- Uso de Función de Orden Superior con Callback 'calcularTotal' (Función Flecha) ---
const totalCompra = gestionarCarrito(carrito, calcularTotal);
console.log(`💰 El total final de la compra es: ${totalCompra}€`);

// --- Otro ejemplo de uso de 'gestionarCarrito' con un Callback Anónimo ---
gestionarCarrito(carrito, (lista) => {
    console.log(`El producto más caro cuesta: ${Math.max(...lista.map(p => p.precio))}€`);
});