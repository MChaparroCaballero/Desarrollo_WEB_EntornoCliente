var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const tabla = document.getElementById('tablaUsuarios');
const tablaCuerpo = document.getElementById('tablaCuerpo');
const boton = document.getElementById('btnActualizar');
const mensajeCarga = document.getElementById('cargando');
// Esta es tu función que usa setTimeout para "pausar"
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function cargarUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 1. Preparamos la interfaz
            boton.style.display = "none"; // Ocultamos el botón mientras cargamos
            mensajeCarga.style.display = "flex";
            tabla.style.display = "none"; // Ocultamos la tabla mientras cargamos
            mensajeCarga.textContent = "Cargando usuarios..."; // Aseguramos el texto inicial
            tablaCuerpo.innerHTML = "";
            // 2. LA PAUSA ARTIFICIAL (setTimeout)
            // Forzamos una espera de 1.5 segundos para que se vea el mensaje
            yield esperar(1500);
            // 3. Llamada asíncrona real al PHP
            const respuesta = yield fetch('usuarios.php');
            if (!respuesta.ok) {
                throw new Error("No se pudo conectar con el servidor");
            }
            const datos = yield respuesta.json();
            // Validar si hay datos
            if (datos.length === 0) {
                mensajeCarga.textContent = "No hay usuarios disponibles.";
                return;
            }
            tabla.style.display = "table"; // Mostramos la tabla si hay datos
            // Procesamos y mostramos en la tabla
            datos.forEach(user => {
                const fila = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.nombre}</td>
                    <td>${user.email}</td>
                </tr>`;
                tablaCuerpo.innerHTML += fila;
            });
            // Este mensaje se verá un instante antes de que el finally oculte el div
            mensajeCarga.textContent = "Datos cargados con éxito.";
        }
        catch (error) {
            mensajeCarga.textContent = "No se pudieron cargar los datos.";
            console.error("Error:", error);
        }
        finally {
            //Ocultamos tras una brevísima pausa extra o directamente
            mensajeCarga.style.display = 'none';
            boton.style.display = 'flex'; // Mostramos el botón después de cargar los datos
        }
    });
}
// Ejecutar al abrir la página
cargarUsuarios();
// Ejecutar al pulsar el botón
boton.addEventListener('click', cargarUsuarios);
