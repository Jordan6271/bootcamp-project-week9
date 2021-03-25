import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import CalcButton from '../Buttons/CalcButton';

function Keypad (props) {
    return (
        <section className = "keypad">
            <KeypadRow>
                <CalcButton type="primary" onButtonPress = {props.onButtonPress}>C</CalcButton>
                <CalcButton type="primary" onButtonPress = {props.onButtonPress}>←</CalcButton>
                <CalcButton type="operator" onButtonPress = {props.onButtonPress}>%</CalcButton>
                <CalcButton type="operator" onButtonPress = {props.onButtonPress}>/</CalcButton>
            </KeypadRow>
            
            <KeypadRow>
                <CalcButton onButtonPress = {props.onButtonPress}>9</CalcButton>
                <CalcButton onButtonPress = {props.onButtonPress}>8</CalcButton>
                <CalcButton onButtonPress = {props.onButtonPress}>7</CalcButton>
                <CalcButton type="operator" onButtonPress = {props.onButtonPress}>*</CalcButton>
            </KeypadRow>

            <KeypadRow>
                <CalcButton onButtonPress = {props.onButtonPress}>6</CalcButton>
                <CalcButton onButtonPress = {props.onButtonPress}>5</CalcButton>
                <CalcButton onButtonPress = {props.onButtonPress}>4</CalcButton>
                <CalcButton type="operator" onButtonPress = {props.onButtonPress}>-</CalcButton>
            </KeypadRow>

            <KeypadRow>
                <CalcButton onButtonPress = {props.onButtonPress}>3</CalcButton>
                <CalcButton onButtonPress = {props.onButtonPress}>2</CalcButton>
                <CalcButton onButtonPress = {props.onButtonPress}>1</CalcButton>
                <CalcButton type="operator" onButtonPress = {props.onButtonPress}>+</CalcButton>
            </KeypadRow>

            <KeypadRow>
                <CalcButton onButtonPress = {props.onButtonPress}>0</CalcButton>
                <CalcButton onButtonPress = {props.onButtonPress}>.</CalcButton>
                <CalcButton type="large" onButtonPress = {props.onButtonPress}>=</CalcButton>
            </KeypadRow>
        </section>
    );
}

export default Keypad