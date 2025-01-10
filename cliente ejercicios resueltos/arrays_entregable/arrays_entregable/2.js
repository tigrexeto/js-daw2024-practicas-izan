function validarAleatoriedad() {
  const totalPruebas = 10000;
  const frecuencias = new Array(10).fill(0); // Array para contar las frecuencias de los números del 1 al 10

  // Generamos 10,000 números aleatorios entre 1 y 10
  for (let i = 0; i < totalPruebas; i++) {
    let numero = Math.floor(Math.random() * 10) + 1; // Números del 1 al 10
    frecuencias[numero - 1]++; // Incrementamos la frecuencia del número correspondiente
  }

  // Mostramos las frecuencias de los números
  console.log('Frecuencias:');
  for (let i = 0; i < frecuencias.length; i++) {
    console.log('Número ' + (i + 1) + ': ' + frecuencias[i]);
  }
}

validarAleatoriedad();
