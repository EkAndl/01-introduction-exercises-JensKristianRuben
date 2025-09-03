// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

const result = numberOne + numberTwo; // virker ikke

const resultTwo = parseFloat(numberOne) + parseFloat(numberTwo);
const resultThree = +numberOne + +numberTwo; //speciel js syntax - "+" prøver at konvertere variablen til et tal

console.log(resultTwo);
console.log(resultThree);


// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const resultFour = (+anotherNumberOne + +anotherNumberTwo).toFixed(2);

console.log(resultFour);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sumThreeNumbers = one + two + three;

const average = sumThreeNumbers / 3

console.log(average.toFixed(5));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[2]);

console.log(letters.charAt(2)); // måske lidt overkill?




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

const FactWithCapitalizedF = fact.replace("j", "J");

console.log(FactWithCapitalizedF);


// capitalize the J in Javascript




// --------------------------------------



