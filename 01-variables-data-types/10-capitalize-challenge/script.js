// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

let myNewString = myString[0]; // myString.charAt(0);
myNewString = myNewString.toUpperCase();

myNewString = `${myNewString}${myString.slice(1)}`; // myString.substring(1);

console.log(myNewString);