import React from 'react';
import './App.css';
import {Buttons} from './Buttons.js'
import Calculator from './Calculator.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output:[]
    }
  }

  render() {
    return (
      <div>
        <div className = "calculator">
          <Calculator />
        </div>
        {Buttons.map((values, i) => {
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
          })}
      </div>
    );
  }
}

export default App;
