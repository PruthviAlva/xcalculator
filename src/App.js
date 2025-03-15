import React, { useState } from "react";
import { evaluate } from "mathjs";
import './App.css';

function App() {

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult(null);
    } else if (value === "=") {
      try {
        if (!expression) {
          setResult("Error");
          return;
        }
        const output = evaluate(expression); // Safe evaluation
        setResult(output);
      } catch {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>React Calculator</h1>
        <input type="text" value={expression} readOnly placeholder="0" style={{marginBottom: '1rem'}} />
        <div className="result">{result !== null ? result : ""}</div>
        <div className="buttons">
          {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "C", "=", "/"].map((btn) => (
            <button key={btn} className="buttonValue" onClick={() => handleButtonClick(btn)}>{btn}</button>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
