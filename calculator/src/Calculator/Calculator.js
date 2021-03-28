import React, {useState} from 'react';
import Keypad from './Keypad/Keypad';
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

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
          changeInput(input.slice(0, -3));
          changeOutput(``);
        } else if ((calculation === 0 && operation) === `*` || (calculation === 0 && operation === `/`)) {
          changeOutput(`0`);
          changeInput(``);
          changeCalculation(0);
        } else {
          const sum = calculateSum();
          if ((sum + '.').split('.')[1].length > 3) { 
            changeOutput(sum.toFixed(3).toString());
          } else {
            changeOutput(sum.toString());
          }
          changeInput(``);
          changeCalculation(sum);
        }
      } else {
        changeOutput(calculation.toString());
        changeInput(``);
      }
      changeOperation(`=`);
    }
  }

  const signSwap = () => {
    if (output !== ``) {
      changeOutput((output * -1).toString());
    }
  }

  const backspace = () => {
    if (operation !== `=` && operation !== `!←`) {
      if (output !== ``) {
        changeOperation(`←`);
        changeOutput(output.slice(0, -1).toString());
      } else {
        changeOperation(`!←`)
      }
    } 
  }

  const clear = (value) => {
    if (value && operation === `=`) {
      changeOutput(value);
    } else {
      changeOutput(``);
    }
    changeInput(``);
    changeOperation(``);
    changeCalculation(0);
  }

  const calculateSum = () => {
    const number = parseFloat(output);
    if (operation === `+`) {
      return (calculation + number);
    } else if (operation === `-`) {
      return (calculation - number);
    } else if (operation === `*`) {
      if (calculation === 0) {
        return (0);
      } else {
        return (calculation * number);
      }
    } else if (operation === `/`) {
      if (calculation === 0) {
        return (0);
      } else {
        return (calculation / number);
      }
    } else if (operation === `←` || operation === `!←` ) {
      if (input.slice(-2, -1) === `+`) {
        return (calculation + number);
      } else if (input.slice(-2, -1) === `-`) {
        return (calculation - number);
      } else if (input.slice(-2, -1) === `*`) {
        return (calculation * number);
      } else if (input.slice(-2, -1) === `/`) {
        return (calculation / number);
      }
    } else if (operation === `=`) {
      return (calculation);
    }
  }

  const basicOperation = (currentOperation) => {
    if (output === `` && operation !== `=`) {
      if (operation === `+` || operation === `-` || operation === `*` || operation === `/` || operation === `←` || operation === `!←`) {
        if (input !== ``) {
          changeInput(`${input.slice(0, -3)} ${currentOperation} `);
        }
      }
      if (operation !== `←` || operation !== `!←`) {
        changeOperation(currentOperation);
      }
    } else {
      if (calculation === 0) {
        changeOperation(currentOperation);
        changeCalculation(calculation + 0);
      } else {
        const sum = calculateSum();
        changeCalculation(sum);
      }
      changeOutput(``);
      changeOperation(currentOperation);
      if (output === `` && operation === `=`) {
        changeInput(`${input} ${currentOperation} `);
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
    } else if (value === `←` || value === `!←`) {
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
      clear(value);
    } else {
      if (operation === `←` || operation === `!←`) {
        const newOperation = input.slice(-2, -1);
        if (newOperation === `+` || newOperation === `-` || newOperation === `*` || newOperation === `/`) {
          changeOperation(newOperation);
        } else {
          changeOperation(``);
        }
      }
      if (value === `.`) {
        if (output.match(/^[^.\r\n]+$/)) {
          changeOutput(`${output}.`);
        } else if (output === ``) {
          changeOutput(`0.`)
        }
      } else {
        changeOutput((output + value));
      }
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
    <Card className="calculator-area mx-auto pt-3 mt-5">
      <Card.Header className="card-header">
        <div className="screen-area p-1">
          <div className="output-area h3">
            {output||0}
          </div>
          <div className="computation-screen">
            {input}
          </div>
        </div>
      </Card.Header>
      <Card.Body className="card-body pt-4">
        <div className="keypad-area">
          {keypad.map((values, i) => {
            return (
              <div className="keypad" key={i}>
                {values.map((val) => {
                  return (
                    <Button onClick={(currentValue) => buttonPressed(currentValue)}className={val.class} value={val.name} key={val.name}>
                      {val.name}
                    </Button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Calculator