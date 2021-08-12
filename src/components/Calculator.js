import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Calculator" className="main row container w-50 w-lg-25 mx-auto my-5">
        <div className="text-input col-12 px-0"><input placeholder="0" type="text" id="CalculatorDisplay" className="w-100 text-end" /></div>
        <button type="button" className="calculator-buttons col-3 number-buttons">AC</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">+/-</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">%</button>
        <button type="button" className="calculator-buttons col-3 operation-buttons">÷</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">7</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">8</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">9</button>
        <button type="button" className="calculator-buttons col-3 operation-buttons">X</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">4</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">5</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">6</button>
        <button type="button" className="calculator-buttons col-3 operation-buttons">-</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">1</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">2</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">3</button>
        <button type="button" className="calculator-buttons col-3 operation-buttons">+</button>
        <button type="button" className="calculator-buttons col-6 number-buttons">0</button>
        <button type="button" className="calculator-buttons col-3 number-buttons">.</button>
        <button type="button" className="calculator-buttons col-3 operation-buttons">=</button>
      </div>
    );
  }
}

export default Calculator;
