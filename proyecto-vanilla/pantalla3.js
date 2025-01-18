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
/* function saveQuestion() {
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
} */
// Suponiendo que ya tenemos la referencia al botón de guardar:

// Función que emula el guardado de una pregunta con un retraso
// Suponiendo que ya tenemos la referencia al botón de guardar:

// Función que emula el guardado de una pregunta con un retraso
function saveQuestion() {
  const questionValue = questionInput.value;
  let selectedAnswerValue = "";
  
  for (let option of answerOptions) {
    if (option.checked) {
      selectedAnswerValue = option.value;
      break; // Salir del bucle cuando se encuentre la respuesta seleccionada
    }
  }
  
  const scoreValue = scoreInput.value;
  
  // Si algún campo no tiene valor, no se guarda
  if (!questionValue || !selectedAnswerValue || !scoreValue) {
    return;
  }

  const email = getCookie("currentUser"); // Obtener el email de la cookie
  let questionsCookie = initializeCookie("questions"); // Inicializar las preguntas en cookies

  // Crear un objeto de la nueva pregunta con estado "Cargando"
  const newQuestion = {
    question: questionValue,
    answer: selectedAnswerValue,
    score: scoreValue,
    status: "Cargando", // Estado inicial de "Cargando"
  };

  // Agregar la nueva pregunta al array de preguntas
  questionsCookie[email].push(newQuestion);

  // Deshabilitar el botón de atrás mientras se guarda
  const backButton = document.getElementById("backButton");
  backButton.disabled = true;

  // Mostrar la nueva pregunta en la tabla con el estado "Cargando"
  displayQuestionInTable(newQuestion);

  // Emular un retraso de 5 segundos usando una promesa
  const delaySave = new Promise((resolve) => {
    setTimeout(() => {
      // Aquí se simula el guardado después de 5 segundos
      setCookie("questions", JSON.stringify(questionsCookie), 7); // Guardar las preguntas actualizadas

      // Llamamos a la función para actualizar la pregunta en la tabla a "OK"
      updateQuestionStatusInTable(newQuestion);
      resolve(); // Resolver la promesa después de que se guardan las preguntas
    }, 5000); // 5 segundos de delay
  });

  // Mientras se guarda la pregunta, el usuario puede seguir introduciendo preguntas
  resetForm(); // Restablecer el formulario para nuevas preguntas
  toggleSaveButton(); // Rehabilitar el botón de guardar

  // Cuando la promesa se resuelve (5 segundos después), habilitamos el botón de atrás
  delaySave.then(() => {
    backButton.disabled = false; // Habilitar el botón de "Atrás" después de guardar
  });
}

// Función para mostrar la nueva pregunta en la tabla con el estado "Cargando"
function displayQuestionInTable(question) {
  const tableBody = document.getElementById("questionsTableBody");
  
  const row = document.createElement("tr");

  const questionCell = document.createElement("td");
  questionCell.textContent = question.question;
  
  const answerCell = document.createElement("td");
  answerCell.textContent = question.answer;

  const scoreCell = document.createElement("td");
  scoreCell.textContent = question.score;

  const statusCell = document.createElement("td");
  statusCell.textContent = question.status; // Inicialmente "Cargando"

  row.appendChild(questionCell);
  row.appendChild(answerCell);
  row.appendChild(scoreCell);
  row.appendChild(statusCell);

  tableBody.appendChild(row);
}

// Función para actualizar el estado de la pregunta en la tabla a "OK"
function updateQuestionStatusInTable(question) {
  // Buscar la fila correspondiente a la pregunta
  const rows = document.getElementById("questionsTableBody").rows;
  for (let row of rows) {
    const cells = row.cells;
    if (cells[0].textContent === question.question && cells[1].textContent === question.answer) {
      // Actualizar el estado a "OK"
      cells[3].textContent = "OK"; // Cambiar el estado de la columna "Estado" a "OK"
      break;
    }
  }
}

// Agregar el evento al botón de guardar
saveButton.addEventListener("click", saveQuestion);


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
