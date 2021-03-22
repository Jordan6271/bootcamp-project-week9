import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calculation: '',
            output: 0
        }
    }

    onButtonPress = event => {
        let calculation = this.state.calculation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') return this.clear();
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') calculation += pressedButton;
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) calculation += ' ' + pressedButton + ' ';
        else if (pressedButton === '=') {
            try {
                const evalOutput = eval(calculation);
                const output = Number.isInteger(evalOutput) ? evalOutput : evalOutput.toFixed(2);
                this.setState({output});
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        } else {
            calculation = calculation.trim();
            calculation = calculation.substr(0, calculation.length - 1);
        }
        this.setState({calculation: calculation});
    }

    clear() {
        this.setState({calculation: '', output: 0});
    }

    render() {
        return(
            <main className="calculator-area">
                <Screen>
                    {this.state.calculation} 
                    {this.state.output}
                </Screen>
                <Keypad onButtonPress = {this.onButtonPress} />
            </main>
        );
    }
}

export default Calculator