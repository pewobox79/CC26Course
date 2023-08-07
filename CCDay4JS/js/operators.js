/**
 * basic operators
 * 
 * + => mathmatical operator for adding values
 * - => mathmatical operator 
 * / => devide operator
 * * => multiply operator
 * OR => checks if one value of multiple values exist
 * AND => checks if both / all values are existing
 * 
 */

const resultOfTwoNumber = 2 + 4;
// console.log("result: ",resultOfTwoNumber)

const numberAsNumber = 34 + 6;
const numberAsString = "34" + 6; //346


const devideTwoNumbers = 12/6
const devideTwoNumbersWithString = "12" / "6";


// console.log("12 / 6: ",devideTwoNumbers)
// console.log("number / string: ", devideTwoNumbersWithString)




/** if / else statement */

/** 
 * = => assigning a value 
 * == => check if both sides are the same value
 * === => check if both sides are the same value and data type
 */

if(devideTwoNumbers == "2" ){
    console.log("that is correct");
} else {
    console.log("that is wrong");
}

/** The OR and AND operators 
 * || => OR operator
 * && => AND opertor
 * 
*/

const value1 = 22;
const value2 = 22;

if(value1 == "22" && value2 === 22){
    console.log("values are true")
} else{
    console.log("not right")
}



