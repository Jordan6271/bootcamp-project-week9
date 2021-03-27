import React, {useState} from 'react';
import Keypad from './Keypad/Keypad';

const keypad = Keypad || [];

function Calculator() {
  const[output, changeOutput] = useState(``);
  const[input, changeInput] = useState(``);
  const[operation, changeOperation] = useState(``);
  const[calculation, changeCalculation] = useState(0);

  const equals = () => {
    if (operation !== `=`) {
      changeInput(`${input} ${output} `);
      if (output !== ``) {
        if (output === `0` && operation === `/`) {
          alert(`You cannot divide by 0.`);
          changeInput(input.slice(0, -3))
        } else {
          const sum = calculateSum();
          changeOutput(sum.toString());
          changeInput(sum.toString());
          changeCalculation(sum);
        }
      } else {
        changeOutput(calculation);
        changeInput(`${output}`);
      }
      changeOperation(`=`);
    }
  }

  const signSwap = () => {
    if (output !== 0) {
      changeOutput(output * -1);
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

  const calculateSum = () => {
    if (calculation === 0) {
      return (parseFloat(output));
    } else {
      if (operation === `+`) {
        return (calculation + parseFloat(output));
      } else if (operation === `-`) {
        return (calculation - parseFloat(output));
      } else if (operation === `*`) {
        return (calculation * parseFloat(output));
      } else if (operation === `/`) {
        return (calculation / parseFloat(output));
      } else if (operation === `=`) {
        return (calculation);
      }
    }
  }

  const basicOperation = (currentOperation) => {
    if (output === ``) {
      changeOperation(currentOperation);
    } else {
      changeCalculation(calculateSum());
      changeOutput(``);
      changeOperation(currentOperation);
      if (output === `0` && operation === `=`) {
        changeInput(`${input} ${currentOperation}`);
      } else if (input === `` || operation === `=`) {
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
    if (operation === `=`) {
      changeOutput(value);
      changeOperation(``);
    }
    if (value === `.`) {
      changeOutput(output + `.`);
    } else {
      changeOutput((output + value));
    }
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
            <div className="keypad" key={i}>
              {values.map((val) => {
                return (
                  <button onClick={(currentValue) => buttonPressed(currentValue)} value={val.name} key={val.name}>
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