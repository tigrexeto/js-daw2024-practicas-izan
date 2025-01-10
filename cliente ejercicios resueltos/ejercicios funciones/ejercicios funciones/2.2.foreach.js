const productos = [
  { nombre: 'Camiseta', precio: 20 },
  { nombre: 'Pantalón', precio: 30 },
  { nombre: 'Zapatos', precio: 50 },
];

productos.forEach((producto) => {
  producto.precio *= 1.1; // Incrementar el precio en un 10%
});

console.log(productos);
// Resultado esperado:
// [
//   { nombre: "Camiseta", precio: 22 },
//   { nombre: "Pantalón", precio: 33 },
//   { nombre: "Zapatos", precio: 55 }
// ]
