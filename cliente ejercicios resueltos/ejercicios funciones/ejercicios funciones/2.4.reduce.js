const numeros = [1, 2, 3, 4, 5];

// Usar reduce para calcular la suma
const sumaTotal = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);
console.log(`La suma total de los números es: ${sumaTotal}`); // Resultado esperado: 15
