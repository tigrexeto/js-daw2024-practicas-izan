function timeOut(ms) {
  return new Promise(function (resolve) {
    let countdown = Math.floor(ms / 1000); // Convertimos ms a segundos
    const timerSpan = document.getElementById("timer"); // Referencia al span donde mostramos la cuenta atrás

    //Función para hacer la cuenta atrás
    function countdownTimer() {
      //mostrar segundos restantes
      timerSpan.textContent = countdown;
      if (countdown > 0) {
        countdown--; //reducir un segundo
        //Llamamos desde un timer para que ejecute a cada segundo esta función hasta que el contador llegue a 0
        setTimeout(countdownTimer, 1000);
      } else {
        //Resolver cuando llegue a 0 el countdown
        resolve();
      }
    }
    //Llamamos una vez a la función la primera vez, después vuelta a llamar dentro en el settimeout
    countdownTimer();
  });
}

//Llamamos a timeout con 5 segundos
timeOut(5000).then(() => {
  //Cuando la promesa resuelva, mostrar el alert y redirigir
  alert("Click aquí para ir al vídeo");
  window.location.href = "video.html";
});

/* Código para manejo de interacciones con vídeo, API multimedia */
const video = document.getElementById("video");

//Click izquierdo, play o pause
video.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

//Click derecho, mostrar en qué momento del vídeo está
video.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  const currentTime = video.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  alert(`Momento actual del vídeo: ${minutes} minutos y ${seconds} segundos`);
});
