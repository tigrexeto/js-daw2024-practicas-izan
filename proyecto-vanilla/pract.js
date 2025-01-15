

/* INICIO */
/* Pantalla inicial "BIENVENIDO" + pulsar Ctrl + F10 || setTimeOut 5000 */


/* gavsblog! */
let keysPressed = {};

/* al pulsar teclas el usuario, guardar en un array */
document.addEventListener('keydown', (event) => {
    /* event.preventDefault(); cuándo hace falta?*/
    keysPressed[event.key] = true;
    if(keysPressed['Control'] && event.key == 'F10'){
        removeWelcome();
    }

});

/* vaciamos el array, solo queremos su contenido mientras se esté pulsando la tecla */
document.addEventListener('keyup', (event) => {
    delete this.keysPressed[event.key];
 });


/* después remove con keydown ctrl + f10 o pasados 5 segundos */
function removeWelcome(){
    let welcomeDiv = document.getElementById("welcomeMessage");
    welcomeDiv.remove();
}

function createLoginWindow(){
    /* añadir label */
    let loginLabel = document.createElement("label");
    loginLabel.id = "email";
    let labelMessage = document.createTextNode("Correo electrónico");
    loginLabel.appendChild(labelMessage);
    document.body.appendChild(loginLabel); 
    /* añadir input */
    let loginInput = document.createElement("input");
    loginInput.id = "email";
    loginInput.type = "text";
    document.body.appendChild(loginInput);
}

/* cómo gestionar esto con una promesa, que si se presionan las teclas o temporizador, eliminar, Y luego añadir contenido */




/* LOGIN */
/*const regexEmail =  caracter/es + @ + caracter/es + . caracter/es */
let userEmail = document.getElementById('email').value;

if(test(regexEmail, userEmail)){

} else {

}