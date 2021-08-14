import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  }

  returnValue = () => {
    const { total, next, operation } = this.state;
    const display = (total || '') + (operation || '') + (next || '');
    return display || 0;
  }

  render() {
    return (
      <div id="Calculator" className="main row container w-25 w-md-25 mx-auto my-5">
        <div className="text-output col-12 px-0"><h3 placeholder="0" id="CalculatorDisplay" className="w-100 text-end">{this.returnValue()}</h3></div>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">AC</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">+/-</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">%</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 operation-buttons">÷</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">7</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">8</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">9</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 operation-buttons">x</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">4</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">5</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">6</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 operation-buttons">-</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">1</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">2</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">3</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 operation-buttons">+</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-6 number-buttons">0</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 number-buttons">.</button>
        <button type="button" onClick={(e) => this.handleButtonClick(e.target.textContent)} className="calculator-buttons col-3 operation-buttons">=</button>
      </div>
    );
  }
}

export default Calculator;
