import React from 'react';
import './App.css';
import CalcButton from "./CalcButton.js";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CalcButton buttonName={"button"} />
      </div>
    );
  }
}

export default App;
