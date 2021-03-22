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
                    <CalcButton onButtonPress = {this.props.onButtonPress}>C</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>←</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>%</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>/</CalcButton>
                </KeypadRow>
                
                <KeypadRow>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>9</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>8</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>7</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>*</CalcButton>
                </KeypadRow>

                <KeypadRow>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>6</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>5</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>4</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>-</CalcButton>
                </KeypadRow>

                <KeypadRow>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>3</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>2</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>1</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>+</CalcButton>
                </KeypadRow>

                <KeypadRow>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>0</CalcButton>
                    <CalcButton onButtonPress = {this.props.onButtonPress}>.</CalcButton>
                    <CalcButtonLarge onButtonPress = {this.props.onButtonPress}>=</CalcButtonLarge>
                </KeypadRow>
            </section>
        );
    }
}

export default Keypad