



function CrearMatriz(n) {
// tamaño de la matriz (3x3)
const matriz = Array.from({ length: n }, () => Array(n).fill(0)); // crea matriz vacía
let num = 1; // número a poner
let filaInicio = 0;
let filaFin = n - 1;
let colInicio = 0;
let colFin = n - 1;

// Mientras haya filas y columnas por llenar
while (filaInicio <= filaFin && colInicio <= colFin) {

  // ➡️ derecha
  for (let i = colInicio; i <= colFin; i++) {
    matriz[filaInicio][i] = num++;
  }
  filaInicio++; // subimos el borde superior

  // ⬇️ abajo
  for (let i = filaInicio; i <= filaFin; i++) {
    matriz[i][colFin] = num++;
  }
  colFin--; // bajamos el borde derecho

  // ⬅️ izquierda
  for (let i = colFin; i >= colInicio; i--) {
    matriz[filaFin][i] = num++;
  }
  filaFin--; // subimos el borde inferior

  // ⬆️ arriba
  for (let i = filaFin; i >= filaInicio; i--) {
    matriz[i][colInicio] = num++;
  }
  colInicio++; // corremos el borde izquierdo
}
return matriz;
}

const matriz = CrearMatriz(4); //alamcenamos la matriz personalizada//
// Mostrar la matriz en consola
for (let fila of matriz) { //imprimimos por filas, no numero a numero si fuera numero a numero ahi necesitariamos dos for//
  console.log(fila.join(' '));
}
