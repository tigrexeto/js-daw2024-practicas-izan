/* LLAMADA A FUNCIONES AL CARGAR DOM */
document.addEventListener("DOMContentLoaded", () => {
  resetForm();
  showQuestions(true);
  validateScoreInput();
});

/* LISTENERS BOTONES */
//botón de guardado
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveQuestion);
//botón de volver
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", ()=>{
  window.location.href = "pantalla2.html";
});

/* LISTENERS INPUT */
// Se agregan los listeners para validar el formulario en tiempo real
const questionInput = document.getElementById("questionInput");
const answerOptions = document.getElementsByName("answerInput");
const scoreInput = document.getElementById("scoreInput");

//Habilitar/deshabilitar el botón de grabar por cada interacción con los inputs,
//en función de si han sido todos rellenados o no
questionInput.addEventListener("input", toggleSaveButton);
scoreInput.addEventListener("input", toggleSaveButton);
//en el caso de los radio buttons, comprobar cuando haya cambio en su selección
for (let option of answerOptions) {
  option.addEventListener("change", toggleSaveButton);
}

/* FUNCIONES */
function toggleSaveButton() {
  const question = questionInput.value;
  let selectedAnswer = "";
  for (let option of answerOptions) {
    if (option.checked) {
      //rellenamos la variable de selectedAnswer con el value del radiobutton clicado
      selectedAnswer = option.value;
      break; // Salir del bucle cuando se encuentre la respuesta seleccionada
    }
  }
  const score = scoreInput.value;

  // Activar el botón de guardar solo si todos los campos están completos
  if (question && selectedAnswer && score) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}

function showQuestions(delay = false) {
  /* Las cookies pueden almacenar valores simples como cadenas, números o booleanos, y
   no es necesario hacer JSON.parse cuando obtienes un valor que no está en formato JSON */
  let email = getCookie("currentUser");
  /* Para questions, necesitas parsear el valor porque es un objeto almacenado como una cadena JSON */
  let questionsCookie = JSON.parse(getCookie("questions"));
  //si hay preguntas guardadas de ese usuario, las mostramos, con delay o no
  if (questionsCookie[email] && questionsCookie[email].length > 0) {
    if (delay) {
      let tableBody = document.getElementById("questionsTableBody");
      //mostrar mensaje de carga mientras pasan los 5 segundos
      tableBody.textContent = "Cargando las preguntas...";
      setTimeout(() => {
        //limpiar mensaje de carga y rellenar con preguntas
        tableBody.innerHTML = "";
        fillQuestionTable(email, questionsCookie);
      }, 5000);
    } else {
      fillQuestionTable(email, questionsCookie);
    }
  }
}

function fillQuestionTable(email, questionsCookie) {
  let questions = questionsCookie[email];
  let tableBody = document.getElementById("questionsTableBody");

  questions.forEach((question) => {
    let row = document.createElement("tr");

    let tdPregunta = document.createElement("td");
    tdPregunta.style.padding = "8px";
    tdPregunta.textContent = question.question;

    let tdRespuesta = document.createElement("td");
    tdRespuesta.style.padding = "8px";
    tdRespuesta.textContent = question.answer;

    let tdPuntuacion = document.createElement("td");
    tdPuntuacion.style.padding = "8px";
    tdPuntuacion.textContent = question.score;

    let tdStatus = document.createElement("td");
    tdStatus.style.padding = "8px";
    tdStatus.textContent = question.status || "Pendiente"; // Si no hay estado, asignamos "Pendiente"

    row.appendChild(tdPregunta);
    row.appendChild(tdRespuesta);
    row.appendChild(tdPuntuacion);
    row.appendChild(tdStatus);

    tableBody.appendChild(row);
  });
}

// Función para guardar una nueva pregunta en la cookie del usuario
function saveQuestion() {
  //obtenemos todos los valores del formulario
  const questionValue = questionInput.value;
  let selectedAnswerValue = "";
  for (let option of answerOptions) {
    if (option.checked) {
      //rellenamos la variable de selectedAnswer con el value del radiobutton clicado
      selectedAnswerValue = option.value;
      break; // Salir del bucle cuando se encuentre la respuesta seleccionada
    }
  }
  const scoreValue = scoreInput.value;

  //comprobación extra, quizá no necesaria
  // si alguno de los inputs no tienen value, interrumpir la ejecución de la función de guardado
  if (!questionValue || !selectedAnswerValue || !scoreValue) {
    return;
  }

  const email = getCookie("currentUser"); // Obtener el email de la cookie
  // Obtener las preguntas guardadas en la cookie o inicializarla si no existe
  let questionsCookie = initializeCookie("questions");
  // Agregar la nueva pregunta al array de preguntas del usuario
  questionsCookie[email].push({
    question: questionValue,
    answer: selectedAnswerValue,
    score: scoreValue,
    status: "pending", // O cualquier valor por defecto que desees
  });

  // Guardar las preguntas actualizadas
  setCookie("questions", JSON.stringify(questionsCookie), 7);

  //resetear formulario
  //desactivar botón de grabado
  //rellenar tabla
  resetForm();
  toggleSaveButton();
  //AQUÍ, en lugar de con delay, que se ejecute una función que muestr pregunta
  //  controle el ESTADO y lo cambie a OK cuando ya hayan pasado 5 segundos
  showQuestions();
}

function resetForm() {
  document.getElementById("questionInput").value = "";
  const answerOptions = document.getElementsByName("answerInput");
  answerOptions.forEach((option) => {
    option.checked = false;
  });
  document.getElementById("scoreInput").value = "";
}

function validateScoreInput() {
  // Validar que el campo score solo acepte un dígito del 0 al 9
  const scoreInput = document.getElementById("scoreInput");
  scoreInput.addEventListener("keydown", (event) => {
    const isNumber = /^[0-9]$/.test(event.key);
    const isControlKey = ["Tab", "Backspace"].includes(event.key);
    //si la tecla que se pulsa no es un número, borrar o tabulador, impedir acción de la tecla
    if (!isNumber && !isControlKey) {
      event.preventDefault();
    }

    //si ya se ha introducido un número, ignorar otras pulsaciones de tecla a no ser que sea para borrar o tabulador
    if (scoreInput.value.length >= 1 && isNumber && !isControlKey) {
      event.preventDefault();
    }
  });
}
