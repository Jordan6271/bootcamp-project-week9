import React, {useState} from 'react';
import Keypad from './Keypad/Keypad';
import History from './History/History';

const keypad = Keypad || [];

function Calculator() {
  const[output, changeOutput] = useState("");
  const[calculation, changeCalculation] = useState(0);
  const[operation, changeOperation] = useState("");
  const[history, changeHistory] = useState("");

  const equals= () => {
    if (output === "") {
      changeOutput(calculation);
      changeOperation("=");
    } else {
      const newOutput = newCalculation(operation, calculation, output)
      changeOutput(newOutput);
      changeCalculation(0);
      changeOperation("=");
      changeHistory(history + " " + parseFloat(output) + " = " + newOutput);
    }
  }

  const backspace = () => {
    if (output !== "") {
      changeOutput(output.substring(0, output.length - 1));
    }
  }

  const clear = () => {
      changeOutput("");
      changeCalculation(0);
      changeOperation("");
      changeHistory("");
      console.log(`The output is ${output}! The calculation is ${calculation}! The operation is ${operation}! The history is ${history}!`)
  }

  const newCalculation = (operation, currentCalculation, newNumber) => {
    if (operation === "+") {
      changeCalculation(parseFloat(currentCalculation + newNumber));
    } else if (operation === "-") {
      changeCalculation(parseFloat(currentCalculation - newNumber));
    } else if (operation === "*") {
      changeCalculation(parseFloat(currentCalculation * newNumber));
    } else if (operation === "/") {
      changeCalculation(parseFloat(currentCalculation / newNumber));
    } else if (operation === "" || operation === "=") {
      changeCalculation(newNumber);
    }
  }

  const basicOperation = (currentOperation) => {
    if (output === "") {
      changeOperation(currentOperation);
      console.log(`The operation is ${operation}`)
    } else {
      changeHistory(history + " " + output + " " + currentOperation)
      console.log(`The current history is ${history}`)
      newCalculation(operation, calculation, output);
      changeOperation(currentOperation);
      changeOutput(0);
      console.log(calculation)
    }
  }

  const operatorHandler = (value) => {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      basicOperation(value);
    } else if (value === "C") {
      clear();
    } else if (value === "←") {
      backspace();
    } else if (value === "=") {
      equals();
    } else {
      alert(`The operation ${value} is not currently supported.`);
    }
  }

  const numberHandler = (value) => {
    const number = parseFloat(value);
    console.log(`I pressed on the button that says ${number}`)
    console.log(`The output before is ${parseFloat(output)}`)
    if (operation === "=") {
      changeOutput(number);  
      changeOperation("");    
    }
    changeOutput(parseFloat(output + number));
    if (value === ".") {
      changeOutput(output + ".");
      console.log(output);
    } else {
      changeOutput(output + number);
    }
    console.log(`The output after is ${output}`);
  }

  const buttonPressed = (currentValue) => {
    const value = currentValue.target.value; 
    if (value.match(/^(\d|\.)$/)) {
      numberHandler(value);
    } else {
      operatorHandler(value, output);
    }
  }

  return (  
    <main className="calculator-area">
      <div className = "screen-area">
        <div className="output-area">
          Output: {output}
        </div>
        <div className="computation-screen">
          {calculation}
        </div>
      </div>
      <div className="keypad-area">
        {keypad.map((values, i) => {
          return (
            <div key={i}>
              {values.map((val) => {
                return (
                  <button onClick={(currentValue) => buttonPressed(currentValue)} key={val.name} value={val.name}>
                    {val.name}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="history-area">
        <History />
      </div>
    </main>
  );
}

export default Calculator