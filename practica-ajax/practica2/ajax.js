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
      if(!response.ok){
        throw new Error(`Error en la petición: ${response.status}`);
      }
      //en caso de que haya ido bien
      //controlar si user está entre 1 y 12, no? dónde.
    })
}
