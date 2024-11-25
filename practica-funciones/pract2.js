const palabras = pedirPalabras();
const mapaPalabras = new Map();

palabras.forEach(function(palabra) {
//si la palabra ya está en el mapa, incrementar el contador
    if (mapaPalabras.has(palabra)) {
        mapaPalabras.set(palabra, mapaPalabras.get(palabra) + 1);
    } else {
        //si no está, crear un par clave-valor con valor inicializado a 1
        mapaPalabras.set(palabra, 1);
    }
});

mapaPalabras.forEach(function(value, key) {
    document.write('<h1>' + key + ': ' + value + '</h1>');
});

/* 

Otros intentos:

const mapaPalabras = palabras.reduce((mapa, palabra) => {
    if (mapa[palabra] === undefined) {
        mapa[palabra] = 1; //si no ha sido contada todavía, inicializar a 1
    } else {
        mapa[palabra] += 1; //si ya ha sido contada una vez, incrementar en 1 su valor
    }
    return mapa;
}, {});


for (let palabra in mapaPalabras) {
    console.log(`${palabra}: ${mapaPalabras[palabra]}`);
}
*/