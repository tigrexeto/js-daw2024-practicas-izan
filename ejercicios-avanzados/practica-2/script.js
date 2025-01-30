function temporizador(ms) {
  return new Promise((resolve, reject) => {
    const timer1 = setTimeout(() => {
      resolve("Tiempo concluido");
    }, ms);

    const timer2 = setTimeout(() => {
      reject("El tiempo no va bien");
    }, ms * 2);
    
  });
}

document.addEventListener('DOMContentLoaded', () => {
    temporizador(5000)
      .then((result) => {
        document.getElementById('tempMessage').textContent = result;
      })
      .catch((error) => {
        document.getElementById('tempMessage').textContent = error;
      });
  });

/* No he usado clearTimeOut porque si se resuelve la promesa, 
entiendo que el reject ya no se ejecuta, y no hace falta limpiar el timer...
y tal y como entiendo el enunciado, jamás fallará el primer temporizador,
por tanto no mostrará error nunca */
