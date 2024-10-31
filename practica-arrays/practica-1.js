const numeros = [];
for (let i = 1; i <= 49; i++) {
    numeros.push(i);
}

const loteriaPrimitiva = [];

for(let i = 0; i<50; i++){
    //cada uno de los elementos de loteriaPrimitiva será un set con 6 elementos
    const combo = new Set();
    //mientras el set no alcance el tamaño de 6 elementos, seguir generando random
    //como set solo admitirá nuevos elementos no repetidos, el size se regula solo
    while(combo.size < 6){
        combo.add(numeros[Math.floor(Math.random() * numeros.length)]);
    }

    //cuando un combo esté acabado, añadir al array de loteria, así 50 veces
    loteriaPrimitiva.push(combo);
}

//el contador nos sirve para indicar el número de la combinación
cont = 1;
for(let numero of loteriaPrimitiva){
    //convertir el set a array para poder imprimirlo
    const numeroArr = [...numero];
    console.log(`Combinación ${cont}:  ${numeroArr}`);
    cont++;
}



/**Mostrar por consola 50 combinaciones aleatorias
 *  de la lotería primitiva. Las combinaciones son
 *  6 números del 1 al 49, pero debe tenerse en cuenta
 *  que no se 
 * pueden repetir los números en una misma combinación. */