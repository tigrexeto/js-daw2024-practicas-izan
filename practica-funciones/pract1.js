//eliminar elementos duplicados de un array, convertir a set
const palabras = pedirPalabras();
const palabrasNoRepeat = [...new Set(palabras)];
palabrasNoRepeat.sort((a, b)=>b.localeCompare(a));

palabrasNoRepeat.forEach(function(palabra, i){
    document.write('<h1>' + palabra  + '</h1>');
});