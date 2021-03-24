import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
  state = {
    calculation: '',
    output: 0
  }

  onButtonPress = event => {
    let calculation = this.state.calculation;
    const pressedButton = event.target.innerHTML;
    if (pressedButton === 'C') return this.clear();
    else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') calculation += pressedButton;
    else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) calculation += ' ' + pressedButton + ' ';
    else if (pressedButton === '=') {
      try {
        const evaloutput = eval(calculation);
        const output = Number.isInteger(evaloutput)? evaloutput : evaloutput.toFixed(2);
        this.setState({output});
      } catch (error) {
        alert('Invalid Mathematical calculation');
      }
    }
    else {
      calculation = calculation.trim();
      calculation = calculation.substr(0, calculation.length - 1);
    }
                
    this.setState({calculation: calculation});
  }
  clear() {
    this.setState({calculation: '', output: 0});
  }

  render() {
      return (
          <main className="calculator-area">
              <Screen calculation={this.state.calculation} output={this.state.output}/>
              <Keypad onButtonPress = {this.onButtonPress} />
          </main>
      );
  }
}

export default Calculator;