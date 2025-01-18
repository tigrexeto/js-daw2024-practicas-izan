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

      // Actualizamos el estado de la pregunta en la cookie a "OK"
      newQuestion.status = "OK";
      
      // Actualizamos la cookie con el nuevo estado
      setCookie("questions", JSON.stringify(questionsCookie), 7);

      resolve(); // Resolver la promesa después de que se guardan las preguntas
    }, 9000); // 5 segundos de delay
  });

  // Mientras se guarda la pregunta, el usuario puede seguir introduciendo preguntas
  resetForm(); // Restablecer el formulario para nuevas preguntas
  toggleSaveButton(); // Rehabilitar el botón de guardar

  // Cuando la promesa se resuelve (5 segundos después), habilitamos el botón de atrás
  delaySave.then(() => {
    showQuestions();
    backButton.disabled = false; // Habilitar el botón de "Atrás" después de guardar
  });
}