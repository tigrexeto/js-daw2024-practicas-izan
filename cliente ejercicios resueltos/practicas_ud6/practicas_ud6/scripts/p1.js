// Programa principal de la P1
// Primero se piden palabras al usuario
let palabras = pedirPalabras();
// A continuación se ordenan de forma inversa, en castellano
palabras = ordenaPalabras(palabras);
// Finalmente se muestran las palabras por pantalla
mostrarPantalla(palabras);
/*
Recibe un listado de palabras en un array, elimina las palabras duplicadas
 y devuelve el listado ordenado alfabéticamente de forma inversa
 */
function ordenaPalabras(listado) {
  const listaNoRep = new Set(listado);
  return [...listaNoRep].sort(
    (elem1, elem2) => -elem1.localeCompare(elem2, 'es')
  );
}
