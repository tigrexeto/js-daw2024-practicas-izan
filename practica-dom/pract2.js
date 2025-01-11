
function ordenarYActualizar(){
    //obtenemos una colección NodeList de elementosHTML
    let listaPalabras = document.querySelectorAll("li");
    //hay que convertirla en un array de strings para trabajar con él
    let arrayPalabras = Array.from(listaPalabras);
    //por cada elementoHTML de tipo li, obtener su contenido de texto
    arrayPalabras = arrayPalabras.map(listElement => listElement.innerHTML);
    //ya convertido en array de strings, ordenarla
    arrayPalabras.sort();

    //borrar los elementos de la lista para volver a crearla luego
    let unorderedList = document.querySelector("ul");
    unorderedList.innerHTML = "";

    //recorrer array y por cada palabra del array crear un elemento dentro de la ul que hemos vaciado
    arrayPalabras.forEach(palabra => {
        let li = document.createElement("li");
        li.textContent = palabra;
        unorderedList.appendChild(li);
    })
}


setTimeout(() => {
    const ordenar = confirm("¿Quieres ordenar la lista alfabéticamente?");
    if (ordenar) {
        //llamar a la función que ordena y actualiza la lista
        ordenarYActualizar();
    }
}, 3000);