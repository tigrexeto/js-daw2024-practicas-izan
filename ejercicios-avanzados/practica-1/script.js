/* Funciones para manejar cookies */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}

/* Función que controla visitas, usando cookies */
function visitCookieControl() {
  //tratamos de obtener la cookie, si no existe, devuelve ""
  let visitNumber = getCookie("visits");

  //si existe, como su valor es una string, parseamos a entero y aumentamos en 1
  if (visitNumber != "") {
    visitNumber = parseInt(visitNumber) + 1;
    //si no existe, inicializamos a 1;
  } else {
    visitNumber = 1;
  }

  if (visitNumber <= 10) {
    //inicializamos/actualizamos la cookie
    setCookie("visits", visitNumber, 30);
  }

  if (visitNumber > 10) {
    deleteCookie("visits");
    visitNumber = 0;
  }

  document.getElementById(
    "visitCounter"
  ).textContent = `Número de visitas: ${visitNumber}`;
}

//llamada a la función al cargar el contenido del DOM
document.addEventListener("DOMContentLoaded", visitCookieControl);
