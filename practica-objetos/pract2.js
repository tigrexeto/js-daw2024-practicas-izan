/* console.log(Array.prototype); */

const arr = [1, 2, 3];
/* console.log(Object.getPrototypeOf(arr));*/
//comprobaciones para ver q devuelve el prototipo de arr, que es igual a Array.prototype



Array.prototype.mediaAritmetica = function () {
    //usar this para referirse al array usado para ejecutar la funcion
    let sumaTotal = this.reduce((sumaPrevia, numActual) => sumaPrevia + numActual, 0);
    return sumaTotal / this.length;
};


//ejemplo de uso
const array1 = [1, 2, 3, 4, 5];
console.log(array1.mediaAritmetica()); // 3


 /*Uso de this: Dentro de un método definido en el prototipo, this se refiere al array en el que se llama el método. En este caso, this es array1.

Eliminación de variables innecesarias: Reemplazamos arr y numeros por this para trabajar directamente con el array en el que se aplica el método. */
//Lo que yo había hecho al principio:
/* Array.prototype.mediaAritmetica = function () {
    let sumaTotal = arr.reduce((sumaPrevia, numActual) => sumaPrevia + numActual, 0);
    return sumaTotal / arr.length;
} */
