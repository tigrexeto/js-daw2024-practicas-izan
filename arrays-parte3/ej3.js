let lista = new Set(["Sara", "Esther", "María"]);
lista.add("Marta");
console.log(lista.has('Juan'));
lista.delete("Esther");
console.log(lista);

/**Crea un Set con algunos nombres. Luego, agrega un nuevo nombre, 
 * verifica si un nombre específico 
 * está en el set, y elimina un nombre. Imprime el contenido del Set al final. */