let userString = window.prompt("Introduce un año");

const arrYears =[];
let yearRegex = /^[0-9]{4}$/;

while (userString != null){

    if(yearRegex.test(userString)){
        arrYears.push(userString);
        break;
    }

}

let uniqueYears = new Set(arrYears);

uniqueYears.sort(function(num1, num2){
    return num2 - num1;
});


const arrUniqueYears = [...uniqueYears];
arrUniqueYears.filter(function(year){
    return year >= 2000;
})



