
function pedirPalabras(){
    //en main comun a todos
    const palabras =  [];

    while (true){
        let palabra = prompt("Introduce una palabra");
        /* 
        nota propia:
        NO HACE FALTA, LO MANEJA IMPLICITAMENTE
        window.addEventListener("keypress", function(event){
            if(event.key === "Enter") {
                palabras.push(palabra);
            }
        }); */

        if (palabra == null){
            break;
        }

        //asegurarse de que lo que se introduce no es una cadena vacía
        if (palabra.length > 0) {
            palabras.push(palabra);
        }

    }

    return palabras;
}
