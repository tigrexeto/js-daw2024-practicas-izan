

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
  let emailInput = document.createElement("input");
  emailInput.id = "emailInput";
  emailInput.type = "text";
  document.body.appendChild(emailInput);

  /* Agregar el event listener al input después de crearlo
       si lo intento antes o fuera, no encuentra, obvio */
  emailInput.addEventListener("focusout", validateEmail);
}

/* Gestión con promesa: si se presionan las teclas o temporizador, eliminar, Y luego añadir contenido */
function startEvent() {
  return new Promise((resolve) => {
    /* resolver por temporizador */
    let timer = setTimeout(() => {
      resolve("timer");
    }, 5000);

    /* o bien por interacción usuario */
    document.addEventListener("keydown", (event) => {
      keysPressed[event.key] = true;
      if (keysPressed["Control"] && event.key === "F10") {
        /* prevenimos acción por defecto solo para las teclas cuyo comportamiento queremos alterar */
        event.preventDefault();
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

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail() {
  let emailInput = document.getElementById("emailInput");
  let emailValue = emailInput.value;
  //si es válido, añadir a cookie y redirigir
  if (regexEmail.test(emailValue)){
    userLogin(emailValue);
    window.location.href = "pantalla2.html";
  } else {
  //si no es válido, sacar mensaje de error
    const errorDiv = document.getElementById("errorDiv");
    //crear div solo si no existe ya el mensaje
    //con alert me saltaba la ventana de alert cada poco si no modificaba rápido el input
    if (!errorDiv) {
      const newErrorDiv = document.createElement("div");
      newErrorDiv.id = "errorDiv";
      newErrorDiv.style.color = "red";
      newErrorDiv.style.marginTop = "10px";
      newErrorDiv.textContent =
        "El correo introducido no tiene un formato válido";
      document.body.appendChild(newErrorDiv);
    } else {
      errorDiv.textContent = "El correo introducido no tiene un formato válido";
    }
    //timer porque si no no carga bien
    setTimeout(() => {
      emailInput.focus();
      emailInput.select();
    }, 0);

  }

}


function initializeUsers() {
  //intentamos obtener la cookie existente
  let usersCookie = getCookie("users");

  // Si existe la cookie, la parseamos de string JSON a objeto
  if (usersCookie) {
    usersCookie = JSON.parse(usersCookie);
  } else {
    // Si no existe, crear un nuevo objeto vacío
    usersCookie = {};
    // Y guardar ese objeto vacío en la cookie
    setCookie("users", JSON.stringify(usersCookie), 7);
  }
  
  return usersCookie;
}


function userLogin(email){
  //si el email es válido (si es null no entrará en el if)
  if(email) {
    //obtenemos o creamos la cookie
    let usersCookie = initializeUsers();
    //no hace falta comprobar si existe ya ese usuario en la cookie, porque si existe, simplemente actualizará la fecha guardada anteriormente
    //añadimos el usuario al json de usuarios
    usersCookie[email] = new Date().toLocaleString();
    //y guardamos la cookie con los datos actualizados
    setCookie("users", JSON.stringify(usersCookie), 7);
  }
}




/* COOKIES */
// GUARDAR
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); //establece el tiempo de expiración
  var expires = "expires=" + d.toUTCString(); //fecha de expiración en formato UTC
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; //guarda la cookie
}

// RECUPERAR
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
