import React from 'react';
import Screen from './Screen/Screen';

class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <main className="calculator-area">
                <Screen />
            </main>
        );
    }
}

export default Calculator