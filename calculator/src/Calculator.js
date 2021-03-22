import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <main className="calculator-area">
                <Screen />
                <Keypad />
            </main>
        );
    }
}

export default Calculator