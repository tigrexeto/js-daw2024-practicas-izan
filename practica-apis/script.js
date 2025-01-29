// Aquí definimos la función timeout
function timeOut(ms) {
    return new Promise(function (resolve) {
      let countdown = Math.floor(ms / 1000); // Convertimos ms a segundos
      const timerSpan = document.getElementById("timer"); // Referencia al span donde mostramos la cuenta atrás
  
      // Función para hacer la cuenta atrás
      function countdownTimer() {
        timerSpan.textContent = countdown + " segundos restantes"; // Mostrar el tiempo restante en el DOM
        if (countdown > 0) {
          countdown--; // Reducimos el contador
          setTimeout(countdownTimer, 1000); // Llamamos a countdownTimer cada segundo
        } else {
          resolve(); // Cuando llega a 0, resolvemos la promesa
        }
      }
  
      countdownTimer(); // Iniciamos la cuenta atrás
    });
  }
  
  // Llamamos a la función timeout con 5000 ms (5 segundos)
  timeOut(5000).then(() => {
    // Mostrar un alert con el mensaje cuando la cuenta atrás llegue a 0
    alert("¡Haz click aquí para ir al video!");
    // Redirigir a la página del video al hacer clic en el alert
    window.location.href = "video.html";
  });
  
  // Aquí manejamos las interacciones con el video en la página del video
  const video = document.getElementById("video");
  
  // Al hacer clic en el video con el botón izquierdo, lo pausamos o reproducimos
  video.addEventListener('click', function () {
    if (video.paused) {
      video.play(); // Si está pausado, reproducimos
    } else {
      video.pause(); // Si está reproduciéndose, lo pausamos
    }
  });
  
  // Al hacer clic derecho en el video, mostramos el tiempo total en minutos y segundos
  video.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Prevenimos el menú contextual
    const duration = video.duration; // Obtenemos la duración total del video en segundos
    const minutes = Math.floor(duration / 60); // Convertimos a minutos
    const seconds = Math.floor(duration % 60); // Obtenemos los segundos restantes
    alert(`Duración del video: ${minutes} minutos y ${seconds} segundos`);
  });
  