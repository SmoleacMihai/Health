// Variables

let usedRandom = 11
let curentRandom = 0

// Functions
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
} 

function unhider(){
    let clear = document.getElementById("content0")
    clear.style.display = "none"
    curentRandom = getRandomNumberBetween(1,10)
    while(curentRandom == usedRandom){
        curentRandom = getRandomNumberBetween(1,10)
     // console.log("There was a identical number")
    }
    element = document.getElementById("content"+curentRandom)
    element.style.display = "block";
    // console.log("Function did something")
    // console.log(curentRandom)
    usedRandom = curentRandom
 }

 // For loop that makes all divs invisible
for (var i = 0; i < 11; i++) {
    cleaner = document.getElementById("content"+i)
    cleaner.style.display = "none";
 }

 // main command that appels unhider function which
 document.getElementById("randomButton").onclick = unhider() 
