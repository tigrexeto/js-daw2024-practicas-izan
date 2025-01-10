// Función para sumar de forma recursiva
function sumaRecursiva(numeros) {
  if (numeros.length === 0) {
    return 0; // Condición base: si el array está vacío
  }
  return numeros[0] + sumaRecursiva(numeros.slice(1)); // Sumar el primer número y llamar con el resto
}

// Probar la función recursiva
const numeros = [1, 2, 3, 4, 5];
console.log(`Suma recursiva: ${sumaRecursiva(numeros)}`); // Resultado esperado: 15
