
// Mostrar mensaje personalizado
function displayUserInfo() {
    const email = getCookie("currentUser"); // Obtener el email actual de la cookie
    const usersCookie = getCookie("users"); // Obtener la cookie de usuarios

    if (usersCookie && email) {
      //convertimos json string a objeto para buscar en él el lastlogin de ese usuario  
      const users = JSON.parse(usersCookie);
      const previousLogin = users[email].previousLogin; 
      const lastLogin = users[email].lastLogin;

      if (previousLogin) {
        const message = `Hola ${email}, la última vez que te conectaste fue ${previousLogin}.`;
        document.getElementById("message").textContent = message;
      } else {
        document.getElementById("message").textContent = `Hola ${email}, la última vez que te conectaste fue ${lastLogin}.`;
      }
    } else {
      document.getElementById("message").textContent = "No hay datos disponibles.";
    }
  }

  // Ejecutar la función al cargar la página
  displayUserInfo();

  let formButton = document.getElementById("goToForm");
  formButton.addEventListener("click", ()=>{
    window.location.href = "pantalla3.html";
  })