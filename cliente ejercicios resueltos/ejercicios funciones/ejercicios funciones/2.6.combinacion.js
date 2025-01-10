const personas = [
  { nombre: 'Juan', edad: 17 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Pedro', edad: 19 },
  { nombre: 'Laura', edad: 16 },
];

// Filtrar personas mayores de 18, multiplicar edad por 2 y sumar todas las edades
const resultado = personas
  .filter((persona) => persona.edad > 18) // Filtrar mayores de 18
  .map((persona) => persona.edad * 2) // Multiplicar edad por 2
  .reduce((acumulador, edad) => acumulador + edad, 0); // Sumar todas las edades

console.log(`Resultado final: ${resultado}`); // Resultado esperado: 82
