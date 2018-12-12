//To-do List
// - Don't let users use more than one decimal point
// - Don't let the user divide by 0
// - Make it more clear what is happening
// - Clean up code and look for bugs
// - Add "backspace" button
// - Add keyboard support
// - Make it look nice

//For scaling up on mobile
var siteWidth = 325;
var scale = screen.width / siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

function add(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
	return firstNumber / secondNumber;
}

function operate() {
	secondNumber = displayValue;
	console.log("Second Number: " + secondNumber);
	displayClear();
	
	let solution = operator(firstNumber, secondNumber);
	console.log(solution);
	displayNumber(solution);
}

let displayValue = 0;
let operator;
let firstNumber;
let secondNumber;

//Prints pressed number onto the display
function displayNumber(num) { 
	const display = document.getElementById("display");
	display.textContent += num;
	
	//Stores the display value
	displayValue = Number(display.textContent);
}

//Resets the display and display value
function displayClear() {
	const display = document.getElementById("display");
	document.getElementById("display").innerHTML = "";
	displayValue = 0;
}

//Clears all data
function dataClear() {
	displayValue = "";
	operator = "";
	firstNumber = 0;
	secondNumber = 0;
	
	console.log(displayValue + operator + firstNumber + secondNumber);
	displayClear();
}

//Stores selected operator and the first number
function selectOperator(o) {
	operator = o;
	firstNumber = displayValue;
	
	displayClear(); //Clears the display
	
	console.log(operator);
	console.log("First Number: " + firstNumber);
}

















