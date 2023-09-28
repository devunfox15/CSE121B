/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers(){
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
}
function subtractNumbers(){
let subtractNumber1 = Number(document.querySelector('#subtract1').value);
let subtractNumber2 = Number(document.querySelector('#subtract2').value);
document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers() {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by Zero";
    } else {
        return number1 / number2;
    }
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
var currentDate = new Date();
var currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
var arrayDisplay = document.getElementById("array");
arrayDisplay.innerText = numbersArray.toString();

/* Output Odds Only Array */
var oddNumbers = numbersArray.filter(function(number) {
    return number % 2 !== 0; // Check if the number is odd
});
var oddsElement = document.getElementById("odds");
oddsElement.innerHTML = oddNumbers.join(", ");
/* Output Evens Only Array */
var evenNumbers = numbersArray.filter(function(number) {
    return number % 2 === 0 ; // Check if the number is odd
});
var evens = document.getElementById("evens");
evens.innerHTML = evenNumbers.join(", ");

/* Output Sum of Org. Array */
var sum = numbersArray.reduce(function(sum, add) {
    return sum + add;
}, 0); 
var sumOfArrayElement = document.getElementById("sumOfArray");
sumOfArrayElement.textContent = sum;

/* Output Multiplied by 2 Array */
var multipliedArray = numbersArray.map(number => number * 2);

// Get the HTML element by ID
var multipliedElement = document.getElementById("multiplied");

// Set the innerHTML of the element to display the multiplied array
multipliedElement.textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */
var multipliedArray = numbersArray.map(number => number * 2);

// Use the reduce() method to sum the elements of the multiplied array
var sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number);

// Get the HTML element by ID
var sumOfMultipliedElement = document.getElementById("sumOfMultiplied");

// Set the innerHTML of the element to display the calculated sum
sumOfMultipliedElement.textContent = sumOfMultiplied;