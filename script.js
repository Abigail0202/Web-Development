let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
let calculationHistory = []; // Array to store calculation history

// Updates the display
function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

// Clears the display and resets all values
function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

// Removes the last character in the display
function backspace() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

// Adds symbols and numbers to display
function appendSymbol(symbol) {
    if (waitingForSecondOperand) {
        displayValue = symbol;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? symbol : displayValue + symbol;
    }
    updateDisplay();
}

// Sets operator and prepares for the next input
function setOperator(op) {
    if (!waitingForSecondOperand && operator) {
        calculate();
    }
    operator = op;
    firstOperand = displayValue;
    waitingForSecondOperand = true;
}

// Square operation
function square() {
    displayValue = String(Math.pow(parseFloat(displayValue), 2));
    updateDisplay();
}

// Square root operation
function squareRoot() {
    displayValue = String(Math.sqrt(parseFloat(displayValue)));
    updateDisplay();
}

// Evaluates the final result when "=" is pressed
function calculate() {
    if (operator && firstOperand !== null) {
        const secondOperand = parseFloat(displayValue);
        const firstNum = parseFloat(firstOperand);

        switch (operator) {
            case '+':
                displayValue = String(firstNum + secondOperand);
                break;
            case '-':
                displayValue = String(firstNum - secondOperand);
                break;
            case '*':
                displayValue = String(firstNum * secondOperand);
                break;
            case '/':
                displayValue = secondOperand !== 0 ? String(firstNum / secondOperand) : 'Error';
                break;
            case '%':
                displayValue = String(firstNum % secondOperand);
                break;
        }

        calculationHistory.push(`${firstOperand} ${operator} ${secondOperand} = ${displayValue}`);
        operator = null;
        waitingForSecondOperand = true;
        updateDisplay();
    }
}

// Displays the calculation history
function showHistory() {
    const history = calculationHistory.join('\n');
    alert("Calculation History:\n" + history);
}
