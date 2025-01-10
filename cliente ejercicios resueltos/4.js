let creation = document.getElementById('creation');
let select = document.getElementById('select');
let btn = document.getElementById('btn');


function selecctionOption() {
  let selectedOption = this.value;
  switch (selectedOption) {
    case 'option1':
      let saludo = document.createElement('div');
      let meterSaludo = document.createTextNode('Hola caracola!');
      saludo.appendChild(meterSaludo);
      saludo.className = 'saludo';
      saludo.style.backgroundColor = 'salmon';
      document.body.appendChild(saludo);
      break;
    case 'option2':
      let caja = document.createElement('div');
      caja.className = 'caja';
      caja.style.width = '200px';
      caja.style.height = '100px';
      caja.style.backgroundColor = 'black';
      document.body.appendChild(caja);
      break;
    case 'option3':
      let data = new Date();
      let colocarFecha = document.createElement('div');
      let nodoTexto = document.createTextNode(data.toLocaleDateString());
      colocarFecha.className = 'fecha';
      colocarFecha.style.border = '2px solid black';
      colocarFecha.style.width = '200px';
      colocarFecha.appendChild(nodoTexto);
      document.body.appendChild(colocarFecha);
      break;
    case 'option4':
      let numAleatorio = Math.round(Math.random() * 100 + 1);
      let div = document.createElement('div');
      let nodo = document.createTextNode(numAleatorio);
      div.appendChild(nodo);
      div.className = 'num';
      div.style.color = 'blue';
      document.body.appendChild(div);
      break;
  }
}

function eliminar() {
  let quitar = document.querySelectorAll('div');
  for (let i = 0; i < quitar.length; i++) {
    quitar[i].remove();
  }
}

select.addEventListener('change', selecctionOption);
btn.addEventListener('click', eliminar);
