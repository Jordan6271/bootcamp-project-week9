import React from "react";
import "./App.css";
import Calculator from "./Calculator/Calculator.js";

function App() {
    return (
        <div className="calculator" key={Calculator}>
            <Calculator />
        </div>
    );
}

export default App;
