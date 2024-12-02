document.addEventListener("keydown", changeBackground);

const keysPressed = [];

function changeBackground(event){
    keysPressed[event.key] = true;

    if (keysPressed['Alt'] && event.key === 'F12'){
        document.getElementById("imagen").style.backgroundImage = "url(https://picsum.photos/1920/1080)";
    }
    
}