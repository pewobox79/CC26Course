
/**
 * Types of Functions: 
 * - anonymous function
 * - named function
 * - arrow function
 * - IIFE (immediate invoked function expression)
 * - Higher Order Function
 * - constructor Function
 */


// ANONYMOUS FUNCTION => ECMASCRIPT 5 pattern

const user1 = "Markus"

const myName = function (name, id, email) {
    // pass in attributes e.g. "name" and use the "name" consequent in your function.
    console.log(name, id, email)
}

myName("paul", 1, "peter@gmail.com");


// NAMED FUNCTION

myCarColor("yellow");

function myCarColor(carColor){
    console.log(`My car has the color ${carColor}`) ;
    //console.log("My car has the color " + carColor)
}

myCarColor("blue");

// ARROW FUNCTION => ECMASCRIPT6 and newer

/* always declare functions with CONST to protect the purpose of the function => let will not protect the function*/
const myAge = (age) => {
    console.log(`my age is ${age}`)
}
myAge(44)
