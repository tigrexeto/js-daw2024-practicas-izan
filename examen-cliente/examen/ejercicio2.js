
/* creación del div donde se insertarán los bloques de color */
let divColors = document.createElement("div");
body.appendChild(divColors);

let divCountBlocks = document.createElement("div");
body.appendChild(divCountBlocks);


/* obtención del selector y adición de eventlistener */
var colorSelector = document.getElementById("colorSelector");
colorSelector.addEventListener("change", addColorBlock); 


function addColorBlock(event){
    var option = colorSelector.querySelector("option");

    let newColorBlock = document.createElement("div");
    divColors.appendChild(newColorBlock);
    newColorBlock.style.backgroundColor = this.value;

}

let arrayBlocks = divColors.querySelectorAll("div");
arrayBlocks.addEventListener("click", deleteBlock);
arrayBlocks.addEventListener("hover", deleteBlock);


function deleteBlock(event){
    this.parentNode.removeChild(this);
}





