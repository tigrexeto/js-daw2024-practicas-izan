let palabras = ["barco", "agua", "tabla", "agua", "corazón", "barco", "delfín", "agua"];

function contarOcurrencias(palabras){

const contador = new Map();

palabras.forEach((palabra) => {
if(contador.has(palabra)){
    contador.set(palabra, contador.get(palabra) +1);
}else{
    contador.set(palabra, 1);
}
});

return contador;


}

const resultado = contarOcurrencias(palabras);

for(const[clave, valor] of resultado){
    console.log(`${clave}: ${valor}`);
}

/**Crea una función llamada contarOcurrencias que reciba un array de palabras y
 *  devuelva un Map donde las claves 
 * sean las palabras y los valores sean el número de veces que aparecen en el array. */