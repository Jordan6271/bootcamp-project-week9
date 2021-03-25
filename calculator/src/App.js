import React from 'react';
import './App.css';
import Calculator from './Calculator.js'


function App () {
    return (
        <div className = "app">
        <div className = "calculator">
            <Calculator />
        </div>

        {/* {Buttons.map((values, i) => {
            return (
                <div key={i}>
                {values.map((val) => {
                    return (
                    <button key={val.name} value={val.name}>
                        {val.name}
                    </button>
                    );
                })}
                </div>
            );
            })} */}
        </div>
    );
}

export default App;
