/* INICIO */
/* Pantalla inicial "BIENVENIDO" + pulsar Ctrl + F10 || setTimeOut 5000 */

/* al pulsar teclas el usuario, guardar en un array */
/* gavsblog! */
/* REVISAR SCOPE DE LET Y SI ESTE ARRAY AQUÍ */
let keysPressed = {};

/* después remove con keydown ctrl + f10 o pasados 5 segundos */
function removeWelcome() {
  let welcomeDiv = document.getElementById("welcomeMessage");
  welcomeDiv.remove();
}

function createLoginWindow() {
  /* añadir label */
  let loginLabel = document.createElement("label");
  loginLabel.id = "emailLabel";
  /*enlazamos label e input*/
  loginLabel.setAttribute("for", "emailInput");
  let labelMessage = document.createTextNode("Correo electrónico");
  loginLabel.appendChild(labelMessage);
  document.body.appendChild(loginLabel);

  /* añadir input */
  let loginInput = document.createElement("input");
  loginInput.id = "emailInput";
  loginInput.type = "text";
  document.body.appendChild(loginInput);
}

/* cómo gestionar esto con una promesa, que si se presionan las teclas o temporizador, eliminar, Y luego añadir contenido */
function startEvent() {
  return new Promise((resolve) => {
    /* resolver por temporizador */
    let timer = setTimeout(() => {
      resolve("timer");
    }, 5000);

    /* o bien por interacción usuario */
    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      keysPressed[event.key] = true;
      if (keysPressed["Control"] && event.key === "F10") {
        clearTimeout(timer);
        resolve("keys");
      }
    });

    /* vaciamos el array, solo queremos su contenido mientras se esté pulsando la tecla */
    document.addEventListener("keyup", (event) => {
      delete keysPressed[event.key];
    });
  });
}



startEvent()
  .then((resolveMessage) => {
    console.log(`Cambio de pantalla por: ${resolveMessage}`);
    removeWelcome();
    createLoginWindow();
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });



/* LOGIN */
/*const regexEmail =  caracter/es + @ + caracter/es + . caracter/es */
/* REGEX DENTRO O FUERA D LA FUNCIÓN */
let emailInput = document.getElementById("email");
let emailValue = emailInput.value;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(){
  if (test(regexEmail, userEmail)) {
    /* llevar a pantalla 2 */
    window.location.href = "pantalla2.html";
  } else {
    alert("El correo introducido no tiene un formato válido");
    emailInput.select();
  }
}

emailInput.addEventListener("focusout", validateEmail);


