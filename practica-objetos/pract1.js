function Rectangulo(width, height){
    /*propiedades */
    if(isNaN(width) || width <=0){
        width = 1;
    }

    if(isNaN(height) || height <=0){
        height = 1;
    }

    this.width = width;
    this.height = height;

    /*métodos del objeto */

    this.cambiarDimensiones=(num1, num2)=>{
        if(isNaN(num1) || num1 <=0){
            num1 = 1;
        }
    
        if(isNaN(num2) || num2 <=0){
            num2 = 1;
        }
        this.width=num1;
        this.height=num2;
    };

    this.calcularArea=()=>{
        return this.width * this.height;
    };

    /*revisar esto */
    this.copia=()=>{
        return new Rectangulo(this.width, this.height);
    }

    this.comparar=(Rectangulo)=>{
        if(this.calcularArea() > Rectangulo.calcularArea()){
            return "El rectángulo anterior es mayor";
        }

        if(this.calcularArea() < Rectangulo.calcularArea()){
            return "El rectángulo anterior es menor";
        }

        if(this.calcularArea() === Rectangulo.calcularArea()){
            return "igual";
        }

    }
    
}

/* Ejemplo de uso*/
const rect1 = new Rectangulo(4, 5);
console.log(rect1.calcularArea()); // 20

const rect2 = rect1.copia();
console.log(rect1.comparar(rect2)); // "igual"

rect2.cambiarDimensiones(2, 3);
console.log(rect1.comparar(rect2)); // "El rectángulo actual es mayor"

// Crear un rectángulo con valores iniciales válidos
const rect3 = new Rectangulo(10, 8);
console.log(rect3.calcularArea()); // 80

// Cambiar dimensiones del rectángulo
rect3.cambiarDimensiones(5, 5);
console.log(rect3.calcularArea()); // 25

// Crear una copia del rectángulo actualizado
const rect4 = rect3.copia();
console.log(rect4.calcularArea()); // 25
console.log(rect3.comparar(rect4)); // "igual"

// Comparar con otro rectángulo de área menor
const rect5 = new Rectangulo(2, 2);
console.log(rect3.comparar(rect5)); // "El rectángulo actual es mayor"

// Comparar con otro rectángulo de área mayor
const rect6 = new Rectangulo(15, 10);
console.log(rect3.comparar(rect6)); // "El rectángulo actual es menor"

// Probar valores no válidos para el constructor
const rect7 = new Rectangulo(-5, "texto");
console.log(rect7.width); // 1 (valor por defecto)
console.log(rect7.height); // 1 (valor por defecto)

// Cambiar dimensiones con valores no válidos
rect7.cambiarDimensiones(-10, "texto");
console.log(rect7.width); // 1 (sin cambios)
console.log(rect7.height); // 1 (sin cambios)