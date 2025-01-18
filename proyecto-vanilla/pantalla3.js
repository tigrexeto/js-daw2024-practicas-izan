document.addEventListener("DOMContentLoaded", () => {
    resetForm();
    validateScoreInput();
});


const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveQuestion);


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
    /* if (!questionInput || !selectedAnswer || !scoreInput) {
      alert("Por favor, completa todos los campos.");
      return;
    } */
  
    const email = getCookie("currentUser");  // Obtener el email de la cookie
  
    // Obtener las preguntas guardadas en la cookie o inicializarla si no existe
    let questionsCookie = initializeCookie("questions");
  
    // Agregar la nueva pregunta al array de preguntas del usuario
    questionsCookie[email].push({
      question: questionInput,
      answer: selectedAnswer,
      score: scoreInput,
      status: "pending"  // O cualquier valor por defecto que desees
    });
  
    console.log("questionsCookie antes de guardar:", questionsCookie);
    // Guardar las preguntas actualizadas
    setCookie("questions", JSON.stringify(questionsCookie), 7);
    
    // Resetear el formulario
    resetForm();
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

