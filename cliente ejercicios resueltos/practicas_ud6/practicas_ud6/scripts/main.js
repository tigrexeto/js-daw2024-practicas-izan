/*
  Muestra una ventana al usuario donde puede introducir palabras
 Para parar la introducción de palabras se deja en blanco o se cancela
 devuelve la lista de palabras introducidas *
 */

function pedirPalabras() {
  const palabras = [];
  // pido palabras y las guardo en el set hasta que se deje en blanco o se cancele
  while (true) {
    const palabra = window.prompt(
      'Introduzca una palabra. Vacío o Cancelar detiene el proceso'
    );
    if (palabra == null || palabra === '') break;
    palabras.push(palabra);
  }

  console.info('Palabras introducidas = ' + [...palabras].join());
  return palabras;
}
/*
  Muestra en un documento HTML, como párrafos, el listado de elementos que recibe
 */
function mostrarPantalla(lista) {
  lista.forEach((elemento) => document.write(`<p>${elemento}</p>`));
}
