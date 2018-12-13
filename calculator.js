//To-do List
// - Log the math for the user
// - Clean up code and look for bugs
// - Round numbers

//For scaling up on mobile
let siteWidth = 325;
let scale = screen.width / siteWidth

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
	if (secondNumber == 0) {
		
		//If user divides by 0
		document.body.style.backgroundColor = "#f44336";
		return ":\(";
	} else {
		return firstNumber / secondNumber;
	}
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
	enableDecimal(); //Enables the decimal button after data is cleared
	displayClear();
	
	//Resets divide by 0 error
	document.body.style.backgroundColor = "#4CAF50";
}

//Stores selected operator and the first number
function selectOperator(o) {
	operator = o;
	firstNumber = displayValue;
	
	enableDecimal(); //Enables the decimal button after an operator is selected
	
	displayClear(); //Clears the display
	
	console.log(operator);
	console.log("First Number: " + firstNumber);
}

function disableDecimal() {
	document.getElementById("decimalButton").disabled = true;
	document.getElementById("decimalButton").classList.add('disabledButton');
	console.log("Decimal button disabled.");
}

function enableDecimal() {
	document.getElementById("decimalButton").disabled = false;
	document.getElementById("decimalButton").classList.remove('disabledButton');
	console.log("Decimal button enabled");
}

//Changes positive to negative or negative to positive
function positiveNegativeBtn() {
	if (Number(displayValue > 0)) {
		displayValue = Number("-" + displayValue);
	} else {
		displayValue = displayValue *= -1; //Converts negative number to a positive number
	}
	
	document.getElementById("display").innerHTML = displayValue;
}

//Removes the last number displayed
function del() {
	let lastNumChar = displayValue.toString();
	lastNumChar = lastNumChar.substring(0, lastNumChar.length -1);
	console.log(lastNumChar);
	
	displayValue = Number(lastNumChar);
	document.getElementById("display").innerHTML = displayValue;
}

















