import React, {useState} from 'react';
import Keypad from './Keypad/Keypad';

const keypad = Keypad || [];

function Calculator() {
  const[output, changeOutput] = useState(``);
  const[input, changeInput] = useState(``);
  const[operation, changeOperation] = useState(``);
  const[calculation, changeCalculation] = useState(0);

  const equals = () => {
    changeInput(`${input} ${output} `);
    if (output !== ``) {
      const sum = calculateSum(calculation, parseFloat(output), operation)
      changeOutput(sum);
      changeCalculation(sum);
    } else {
      changeOutput(calculation);
    }
    if (input.substring(input.length - 2) === operation) {
      console.log(`Input has an operation at the end`)
    } else {
      console.log(`Input does not have an operation at the end`)
    }
    changeOperation(``);
    // changeCalculation(0);
  }

  const signSwap = () => {
    if (parseFloat(output) > 0) {
      const swapNeg = output * -1;
      changeOutput(swapNeg.toString());
    } else if (parseFloat(output) < 0) {
      const swapPos = Math.abs(output);
      changeOutput(swapPos.toString());
    }
  }

  const backspace = () => {
    if (output !== ``) {
      changeOutput(output.slice(0, -1));
    }
  }

  const clear = () => {
      changeOutput(``);
      changeInput(``);
      changeOperation(``);
      changeCalculation(0);
  }

  const calculateSum = (calculation, output, operation) => {
    if (calculation === 0) {
      return (output);
    } else {
      if (operation === `+`) {
        return (calculation + output);
      } else if (operation === `-`) {
        return (calculation - output);
      } else if (operation === `*`) {
        return (calculation * output);
      } else if (operation === `/`) {
        return (calculation / output);
      }
    }
  }

  const basicOperation = (currentOperation) => {
    if (output === ``) {
      changeOperation(currentOperation);
    } else {
      changeCalculation(calculateSum(calculation, parseFloat(output), operation));
      changeOutput(``);
      changeOperation(currentOperation);
      if (input === ``) {
        changeInput(`${output} ${currentOperation} `);
      } else {
        changeInput(`${input} ${output} ${currentOperation} `);
      }
    }
  }

  const operationHandler = (value) => {
    if (value === `+` || value === `-` || value === `*` || value === `/`) {
      basicOperation(value);
    } else if (value === `C`) {
      clear();
    } else if (value === `←`) {
      backspace();
    } else if (value === `±`) {
      signSwap();
    } else if (value === `=`) {
      equals();
    } else {
      alert(`The operation ${value} is not currently supported.`);
    }
  }

  const numberHandler = (value) => {
    const number = value;
    if (operation === `=`) {
      changeOutput(number);
      changeOperation(``);
    }
    if (value === `.`) {
      changeOutput(output + `.`);
    } else {
      changeOutput((output + number));
    }
    // changeInput(input + value);
  }

  const buttonPressed = (currentValue) => {
    const value = currentValue.target.value; 
    if (value.match(/^(\d|\.)$/)) {
      numberHandler(value);
    } else {
      operationHandler(value, output);
    }
  }

  return (  
    <main className="calculator-area">
      <div className = "screen-area">
        <div className="output-area">
          Output: {output}
        </div>
        <div className="computation-screen">
          {input}
        </div>
      </div>
      <div className="keypad-area">
        {keypad.map((values, i) => {
          return (
            <div className="keypad">
              {values.map((val) => {
                return (
                  <button onClick={(currentValue) => buttonPressed(currentValue)} value={val.name}>
                    {val.name}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
      <br />
      Calculation: {calculation}
    </main>
  );
}

export default Calculator