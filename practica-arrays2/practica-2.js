//creamos un array con 10000 posiciones
const numeros = new Array(10000);
numeros.fill(0);

for(i in numeros){
    numeros[i] = Math.floor((Math.random()*10)+1);
}


const contadores = new Map();
for(let i = 1; i <= 10; i++){
    //creamos el mapa con cada uno de los números como key y su cuenta inicial a 0 
    contadores.set(i, 0);
}

//recorremos el array de números y cada vez que encontremos el número indicado por cada key
//aumentar el valor-contador

numeros.forEach((numero) => {
    contadores.set(numero, contadores.get(numero) + 1);
});

for(const[clave, valor] of contadores){
    console.log(`Número ${clave}: ${valor}`);
}



/* numeros = numeros.map(function() {
    return Math.floor((Math.random()*10)+1);
})
 */



/**Se desea validar hasta qué punto la función Math.random es realmente aleatoria. 
 * Para tal fin, calcularemos 10.000 veces números aleatorios del 1 al 10. 
 * Por consola mostraremos cada número del 1 al 10 y a continuación el número de veces que ha salido ese número. 
 * Por ejemplo:
Frecuencias
Número 1: 1016
Número 2: 1019
Número 3: 1059
....
Número 10: 993
 */