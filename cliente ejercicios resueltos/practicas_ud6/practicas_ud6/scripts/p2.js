// Programa principal de la P2
// Primero se piden palabras al usuario
const palabras = pedirPalabras();
// A continuación cuenta las palabras y devuelve un array donde se tiene la palabra
// y el número de veces que ha aparecido
const palabrasContadas = cuentaPalabras(palabras);
// Finalmente se muestra por pantalla el listado de palabras y su cuenta
mostrarPantalla(palabrasContadas);
/*
 Cuenta el número de repeticiones de cada palabra
 */
function cuentaPalabras(palabras) {
  const mapPalabras = new Map();
  const listado = [];
  // Creo un Map de palabras y repeticiones. Aquí es donde se cuentan las palabras
  for (const palabra of palabras) {
    let numRep = mapPalabras.get(palabra); //busco si hay más iguales en el mapa
    if (numRep === undefined) {
      //si no hay antes la creo
      mapPalabras.set(palabra, 1);
    } else {
      mapPalabras.set(palabra, ++numRep);
    }
  }
  // A partir del mapa de palabras y repeticiones creo un array de strings
  // donde cada elemento del array es un texto con la palabra y el número de ocurrencias
  for (const [palabra, rep] of mapPalabras) {
    listado.push(palabra + ': ' + rep + ' ocurrencias');
  }
  return listado;
}
