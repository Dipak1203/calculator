import React from 'react'
import { useState } from 'react';

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operator = ['/', '*', '+', '-'];

  const updateDigits = value => {
    if (
      operator.includes(value) && calc === '' ||
      operator.includes(value) && operator.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operator.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateDigits(i.toString())}>{i}</button>
      )
    }
    return digits;
  }

  const calculator = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () =>{
    if(calc == ''){
      return;
    }

    const value = calc.slice(0,-1);
    setCalc(value)
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <span>{calc || '0'}</span>
        </div>
        <div className="operator">
          <button onClick={() => updateDigits('/')}>/</button>
          <button onClick={() => updateDigits('*')}>*</button>
          <button onClick={() => updateDigits('+')}>+</button>
          <button onClick={() => updateDigits('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateDigits('0')}>0</button>
          <button onClick={() => updateDigits('.')}>.</button>
          <button onClick={calculator}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App