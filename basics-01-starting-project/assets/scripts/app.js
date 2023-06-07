const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription =  `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult, 
  operationNumber, 
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

// function calculateResult(calculationType) {
//   const enteredNmber = getUserInput();
//   if (
//     calculationType === 'ADD' &&
//     calculationType === 'SUBTRACT' &&
//     calculationType === 'MULTIPLY' &&
//     calculationType === 'DIVIDE' ||
//     // not Falsy = !0
//     !enteredNumber
//   ) {
//     return; 
//   }

//   const initialResult = currentResult;
//   let mathOperator;
//   if (calculationType === 'ADD') {
//     currentResult += enteredNumber;
//     mathOperator = '+';
//   } else if (calculationType === 'SUBTRACT') {
//     currentResult -= enteredNumber;
//     mathOperator = '-';
//   } else if (calculationType === 'MULTIPLY') {
//     currentResult *= enteredNumber;
//     mathOperator = '*';
//   } else {
//     currentResult /= enteredNumber;
//     mathOperator = '/';
//   }
//   createAndWriteOutput(mathOperator, initialResult, enteredNumber)
//   writeToLog(calculationType, initialResult, enteredNumber, currentResult);
// }

// function add() {
//   calculationType('ADD');
// }

// function subtract() {
//   calculationType('SUBTRACT');
// }

// function multiply() {
//   calculationType('MULTIPLY');
// }

// function divide() {
//   calculationType('DIVIDE');
// }

function calculate(operation) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let operator;
  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else {
    currentResult /= enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
