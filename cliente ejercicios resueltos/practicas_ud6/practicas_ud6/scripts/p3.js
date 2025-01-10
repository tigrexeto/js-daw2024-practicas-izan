// Función filtro que aplica una función callback a cada elemento del array y guarda el resultado en el mismo array
function filtro(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
  return array;
}

// Caso 1: Multiplicar cada número por 2
const numeros = [1, 2, 3, 4];
function multiplicarPorDos(n) {
  return n * 2;
}
console.log(filtro(numeros, multiplicarPorDos)); // Resultado: [2, 4, 6, 8]

// Caso 2: Convertir palabras en minúsculas a mayúsculas
const palabras = ['hola', 'mundo', 'javascript'];
function convertirAMayusculas(palabra) {
  return palabra.toUpperCase();
}
console.log(filtro(palabras, convertirAMayusculas)); // Resultado: ["HOLA", "MUNDO", "JAVASCRIPT"]

// Caso 3: Calcular el factorial de cada número
const numerosParaFactorial = [1, 2, 3, 4];
function calcularFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(filtro(numerosParaFactorial, calcularFactorial)); // Resultado: [1, 2, 6, 24]
