import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';









//functional components and hooks reference: https://reactjs.org/docs/hooks-overview.html






function CalculationHistory(props) {
  
  
  
  return (
      <ul>
        {props.items.map(item => (
		
          <li>{item}</li>
        ))}
      </ul>
    );
}




function Calculator(props) {
 
  const [calcHistory, setCalcHistory] = useState([])
  
  handleSubmit.bind(this);	//allow handleSubmit to access the elements
  function handleSubmit(event) {
	
	event.preventDefault();
	
	let numberOne = parseInt(event.target.elements.firstNum.value);
	let numberTwo = parseInt(event.target.elements.secondNum.value);
	let operand = event.target.elements.operand.value;
	
	if (operand == "+"){
		
		let calculation = numberOne + " " + operand + " " + numberTwo;
		var newList = calcHistory.concat(calculation);
		setCalcHistory(newList);
	}
	else if (operand == "-"){
		
		let calculation = numberOne + " " + operand + " " + numberTwo;
		var newList = calcHistory.concat(calculation);
		setCalcHistory(newList);
	}
	else if (operand == "*"){
		
		let calculation = numberOne + " " + operand + " " + numberTwo;
		var newList = calcHistory.concat(calculation);
		setCalcHistory(newList);
	}
	else if (operand == "/") {
		
		let calculation = numberOne + " " + operand + " " + numberTwo;
		var newList = calcHistory.concat(calculation);
		setCalcHistory(newList);
	}
	
	
  }
  
  
  
  return (
      <div>
        <div className="Calculator"></div>
        
		
		<form onSubmit={handleSubmit}>
		<label for="firstNum">Enter first number:</label><br></br>
		<input type="text" id="firstNum" name="enter_firstNum"  /><br></br>
		<label for="operand">Enter operand:</label><br></br>
		<input type="text" id="operand" name="enter_operand"   /><br></br>
		<label for="secondNum">Enter second number:</label><br></br>
		<input type="text" id="secondNum" name="enter_secondNum"   /><br></br>
		<input type="submit" value = "Submit" /><br></br>
		</form> 
		<CalculationHistory items={calcHistory} />
      </div>
    );
}













// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);