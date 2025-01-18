document.addEventListener("DOMContentLoaded", () => {
  resetForm();
  showQuestions();
  validateScoreInput();
});

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveQuestion);

function showQuestions(delay = false) {
  /* Las cookies pueden almacenar valores simples como cadenas, números o booleanos, y
   no es necesario hacer JSON.parse cuando obtienes un valor que no está en formato JSON */
  let email = getCookie("currentUser");
  /* Para questions, necesitas parsear el valor porque es un objeto almacenado como una cadena JSON */
  let questionsCookie = JSON.parse(getCookie("questions"));
  //si hay preguntas guardadas de ese usuario, las mostramos, con delay o no
  if (questionsCookie[email] && questionsCookie[email].length > 0) {
    if (delay) {
      setTimeout(() => {
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
  tableBody.innerHTML = ""; //limpiar tabla previa

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
  const questionInput = document.getElementById("questionInput").value;
  const answerOptions = document.getElementsByName("answerInput");
  let selectedAnswer = "";
  for (let option of answerOptions) {
    if (option.checked) {
      selectedAnswer = option.value;
    }
  }
  const scoreInput = document.getElementById("scoreInput").value;

  // Validar que todos los campos estén completos
  if (!questionInput || !selectedAnswer || !scoreInput) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const email = getCookie("currentUser"); // Obtener el email de la cookie

  // Obtener las preguntas guardadas en la cookie o inicializarla si no existe
  let questionsCookie = initializeCookie("questions");

  // Agregar la nueva pregunta al array de preguntas del usuario
  questionsCookie[email].push({
    question: questionInput,
    answer: selectedAnswer,
    score: scoreInput,
    status: "pending", // O cualquier valor por defecto que desees
  });

  console.log("questionsCookie antes de guardar:", questionsCookie);
  // Guardar las preguntas actualizadas
  setCookie("questions", JSON.stringify(questionsCookie), 7);

  // Resetear el formulario
  resetForm();
  showQuestions(true);
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
