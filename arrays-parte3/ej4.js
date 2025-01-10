let personas = new Map();
personas.set("Marta", 22).set("Esther", 12).set("María", 34);
personas.set("Marta", 23);

personas.forEach((edad, nombre) => {
    console.log(`${nombre}: ${edad} años`);
});

/**Crea un Map que almacene nombres como claves y edades como valores. 
 * Luego, agrega algunos nombres y edades, actualiza 
 * la edad de uno de ellos, y finalmente imprime todos los nombres 
 * con sus edades. */