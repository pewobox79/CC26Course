
/** this is a comment */
/** console.log prints output to console */
console.log("hello") 
console.error("there is something wrong")
console.warn("this is a warning")


/** declarations 
 * const (declares a unmutable variable => not changable)
 * let (declares a mutable variable => can be changed after declaration)
 * firstname (name of variable)
 * = (defines the value for the variable)
 * "Peter" (value of the variable)
*/

/** declare user variables */
const firstName = "Peter"; 
let lastName = "Wolf";
const age = 44;
const email = "peter@wolf.com";
/**end user variables */


lastName = "Mueller";

/** calling variables only possible AFTER decleration!!! */
console.log("firstname", firstName)
console.log("lastname",lastName)



/** Basic data types */

const string = "Peter";
const number = 34;
const float = 34.56 // comma numbers are floats - not numbers
const boolean = true // true OR false are the 2 options

/** data type object combines related information in properties */
const userObject = {
    firstName: "Peter",
    lastName: "Wolf",
    age: 44,
    email: "peter@wolf.com"
}
console.log("complete object",userObject);
/** call specific entry (property) in object with DOT-NOTATION */
console.log("only email address: ",userObject.email);
/** call entry with square brackets - sometimes used in applications */
console.log("alternative call of email: ", userObject["email"])


/** array data type */
const arrayOfColors = ["red", "blue", "yellow", "green"];
const arrayOfCars = ["audi", "bmw"];

console.log("complete array",arrayOfColors);
/**call a specific entry in an array with [] */
console.log("call the blue color: ", arrayOfColors[1])

const listOfUsers = [
    {
        name: "peter",
        age: 44
    },
    {
        name: "max",
        age: 66
    },
    userObject
]

console.log("list of users: ", listOfUsers);
console.log("first user: ", listOfUsers[0])


