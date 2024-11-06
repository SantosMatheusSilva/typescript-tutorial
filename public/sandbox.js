"use strict";
const character = 'luigi';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
//function type 
/* let greet = () => {
    console.log('hello world');
}  */
// Greet = hello --->> error!
//let greet: Function;
//greet = () => {
console.log('hello world');
//};
const add = (a, b, c) => {
    console.log(a + b); // Default values can also be assigned to a parameter adding an = after its type. As a default it only gonna be used if no value is passed 
    // Default parameters must be passed at the end of the parameters after the required parameters.
};
add(5, 10);
const minus = (a, b) => {
    return a + b; // If no type is defined for the return TS will infuse it based on the arguments type.
};
let result = minus(10, 7);
// Function signature 
// Ex 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Ex 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Ex3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
// DOM and Type Casting
