import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import CalcButton from '../Buttons/CalcButton';
import CalcButtonLarge from '../Buttons/CalcButtonLarge';

class Keypad extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className = "keypad">
                <KeypadRow>
                    <CalcButton>C</CalcButton>
                    <CalcButton>←</CalcButton>
                    <CalcButton>%</CalcButton>
                    <CalcButton>/</CalcButton>
                </KeypadRow>
                
                <KeypadRow>
                    <CalcButton>9</CalcButton>
                    <CalcButton>8</CalcButton>
                    <CalcButton>7</CalcButton>
                    <CalcButton>*</CalcButton>
                </KeypadRow>

                <KeypadRow>
                    <CalcButton>6</CalcButton>
                    <CalcButton>5</CalcButton>
                    <CalcButton>4</CalcButton>
                    <CalcButton>-</CalcButton>
                </KeypadRow>

                <KeypadRow>
                    <CalcButton>3</CalcButton>
                    <CalcButton>2</CalcButton>
                    <CalcButton>1</CalcButton>
                    <CalcButton>+</CalcButton>
                </KeypadRow>

                <KeypadRow>
                    <CalcButton>0</CalcButton>
                    <CalcButton>.</CalcButton>
                    <CalcButtonLarge>=</CalcButtonLarge>
                </KeypadRow>
            </section>
        );
    }
}

export default Keypad