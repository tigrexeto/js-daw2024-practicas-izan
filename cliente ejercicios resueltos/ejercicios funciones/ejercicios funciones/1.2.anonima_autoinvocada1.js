// Función anónima autoinvocada
(function () {
  let contador = 0;
  contador++;
  console.log(`Contador dentro de la función: ${contador}`);
})();

// Intentar acceder a la variable 'contador' fuera de la función
console.log(`Contador fuera de la función: ${typeof contador}`); // Debería mostrar "undefined"
