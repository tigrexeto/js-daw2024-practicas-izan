const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

function procesarFetch(numsecs, user) {
  //construimos la url insertando en ella con metodo get los numeros introducidos por el usuario
  const url = `https://reqres.in/api/users/${user}?delay=${numsecs}`;
  fetch(url)
    .then((response) =>{
      /* Verificación al hacer petición, antes de procesarla. */
      if(!response.ok){
        document.getElementById('status').textContent = response.status;
        throw new Error(`Error HTTP: ${response.status}`);
      }
      //si todo va bien
      return response.json();
    })
    .then((data) => {
      document.getElementById('id').textContent = data.data.id;
      document.getElementById('email').textContent = data.data.email;

       //hacemos el post, pero devolvemos el fetch para poder seguir operando
      /*  Aquí estamos emulando la grabación de un usuario en la base de datos. 
      Esa llamada post devuelve un JSON, que dentro del campo "json" tiene lo 
      que se ha enviado en el body */
      return fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.data)
        })
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById('name').textContent = data.json.first_name;

      //para acabar, mostrar status
      document.getElementById('status').textContent = 200;
    })
    .catch((error) => {
        console.log(error);
      })
}
