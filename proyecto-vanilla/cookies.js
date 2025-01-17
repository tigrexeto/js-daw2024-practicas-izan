/* COOKIES */
// GUARDAR
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); //establece el tiempo de expiración
    var expires = "expires=" + d.toUTCString(); //fecha de expiración en formato UTC
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; //guarda la cookie
  }
  
  // RECUPERAR
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


  // Si no existe la cookie, crear un objeto vacío y guardarlo 
  function initializeCookie(cookieName) {
    let cookie = getCookie(cookieName);
    if (cookie) {
      return JSON.parse(cookie);
    } else {
      let defaultValue = {};
      setCookie(cookieName, JSON.stringify(defaultValue), 7);
      return defaultValue;
    }
  }
  
