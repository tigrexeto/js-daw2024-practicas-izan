let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let submitButton = document.getElementById("submit");
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');

//eventlisteners de los inputs
emailInput.addEventListener('blur', checkEmail);
passwordInput.addEventListener('blur', checkPassword);

//regex para validar correo y password
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//formato usuario@dominio.extension, donde la extensión tiene entre 2 y 4 caracteres alfabéticos.
const passwordRegex = /^[a-zA-Z0-9]{8,10}$/;
//contraseña de entre 8 y 10 caracteres que solo contiene letras (mayúsculas y minúsculas) y números.


//funcion que toma el valor introducido en el input y ve si pasa el test regex, crea un texto para el div de error si no
 function checkEmail(){
    let emailData = emailInput.value;
    if(emailData.match(emailRegex)){
        emailError.textContent = "";
    } else {
        emailError.textContent = "Formato de email no válido.";
    }

    allowSubmit();
 }


 //funcion que toma contraseña introducida, revisa validez del formato y muestra error si no válido
 function checkPassword(){
    let passwordData = passwordInput.value;
    if(passwordData.match(passwordRegex)){
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Formato de contraseña no válido.";
    }

    allowSubmit();
 }


 //función para "habilitar/deshabilitar" el botón de envío
function allowSubmit() {
    let emailValid = emailInput.value.match(emailRegex); 
    let passwordValid = passwordInput.value.match(passwordRegex); 

    // Cambiar el estilo del botón dependiendo de las validaciones
    if (emailValid && passwordValid) {
        //verde si validaciones correctas
        submitButton.style.backgroundColor = '#90ee90'
    } else {
        //gris mientras incorrectas
        button.style.backgroundColor = '#d3d3d3';
    }
}

