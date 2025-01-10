function generarCombinacionesLoteria() {
  const totalCombinaciones = 50;

  for (let i = 0; i < totalCombinaciones; i++) {
    let combinacion = [];

    while (combinacion.length < 6) {
      let numero = Math.floor(Math.random() * 49) + 1; // Números del 1 al 49

      // Verificamos si el número ya está en la combinación, si no está lo metemos en el array
      if (!combinacion.includes(numero)) {
        combinacion.push(numero);
      }
    }

    // Mostramos la combinación por consola
    console.log('Combinación ' + (i + 1) + ': ' + combinacion);
  }
}

generarCombinacionesLoteria();
