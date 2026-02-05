// Definimos cómo es un usuario para que TS nos ayude
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

const tabla = document.getElementById('tablaUsuarios') as HTMLTableSectionElement;
const tablaCuerpo = document.getElementById('tablaCuerpo') as HTMLTableSectionElement;
const boton = document.getElementById('btnActualizar') as HTMLButtonElement;
const mensajeCarga = document.getElementById('cargando') as HTMLDivElement;

// Esta es tu función que usa setTimeout para "pausar"
const esperar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function cargarUsuarios(): Promise<void> {
    try {
        // 1. Preparamos la interfaz
        boton.style.display = "none"; // Ocultamos el botón mientras cargamos
        mensajeCarga.style.display = "flex";
        tabla.style.display = "none"; // Ocultamos la tabla mientras cargamos
        mensajeCarga.textContent = "Cargando usuarios..."; // Aseguramos el texto inicial
        tablaCuerpo.innerHTML = "";

        // 2. LA PAUSA ARTIFICIAL (setTimeout)
        // Forzamos una espera de 1.5 segundos para que se vea el mensaje
        await esperar(1500); 

        // 3. Llamada asíncrona real al PHP
        const respuesta = await fetch('usuarios.php');

        if (!respuesta.ok) {
            throw new Error("No se pudo conectar con el servidor");
        }

        const datos: Usuario[] = await respuesta.json();

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

    } catch (error) {
        mensajeCarga.textContent = "No se pudieron cargar los datos.";
        console.error("Error:", error);
    } finally {
        //Ocultamos tras una brevísima pausa extra o directamente
        mensajeCarga.style.display = 'none';
        boton.style.display = 'flex'; // Mostramos el botón después de cargar los datos
    }
}

// Ejecutar al abrir la página
cargarUsuarios();

// Ejecutar al pulsar el botón
boton.addEventListener('click', cargarUsuarios);