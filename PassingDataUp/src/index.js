import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import readFile from 'fs';
//chicken, pasta, altered 3 cheese bake
//dads recipe thing, my really good pasta

class DecimalHandler extends React.Component {
	
  
	
  constructor(props) {
	  super(props);
	  
	  
	  //this.handleSubmit = this.props.subFunc.bind(this);	
	  this.handleChange = this.handleChange.bind(this);
	  
	  this.state = {
		  value: this.props.sampleText,
		  
	  };
  }
  
  handleSubmit(event) {
	var tempValue = this.state.value;
	var eighthBit = Math.floor(tempValue / 128);	//I hope this is integer division
	
	
	
	var fs = require('fs');
  
	// Use fs.readFile() method to read the file
	fs.readFile('Input.txt', 'utf8', function(err, data){
		  
		// Display the file content
		console.log(data);
	});
	  
	console.log('readFile called');
	alert('got here');

	
	
	if (tempValue >= 128){
		
		tempValue -= 128;
	}
	
	var seventhBit = Math.floor(tempValue / 64);
	
	
	if (tempValue >= 64){
		
		tempValue -= 64;
	}
	
	var sixthBit = Math.floor(tempValue / 32);
	
	if (tempValue >= 32){
		
		tempValue -= 32;
	}
	
	var fifthBit = Math.floor(tempValue / 16);
	
	if (tempValue >= 16){
		
		tempValue -= 16;
	}
	
	var fourthBit = Math.floor(tempValue / 8);
	
	if (tempValue >= 8){
		
		tempValue -= 8;
	}
	
	var thirdBit = Math.floor(tempValue / 4);
	
	if (tempValue >= 4){
		
		tempValue -= 4;
	}
	
	var secondBit = Math.floor(tempValue / 2);
	
	if (tempValue >= 2){
		
		tempValue -= 2;
	}
	
	var firstBit = Math.floor(tempValue);
	
	const toReturn = [eighthBit, seventhBit, sixthBit, fifthBit, fourthBit, thirdBit, secondBit, firstBit];
	
	var textToDisplay = "";
	for (let i = 0; i < toReturn.length; i++) {
		  
		  textToDisplay = textToDisplay.concat("", toReturn[i].toString());
		  
		}
		
	this.setState({value: textToDisplay});
	
	
	
	
    
    event.preventDefault();
  }
  
  handleChange(event) {
		 
		this.setState({value: event.target.value});
		
  }
  
  
  
  
  

  render() {
    

    return (
      <div>
        <div className="DecimalHandler"></div>
        

		<form onSubmit={this.props.subFunc}>
		<label for="decimal">Please enter the decimal number you want to convert:</label><br></br>
		<input type="text" id="decimal" name="enter_decimal" defaultValue={this.state.value}  onChange={this.handleChange} /><br></br>
		<p> you converted value is: {this.state.value}</p>
		<input type="submit" value = "Convert" /><br></br>
		</form> 
      </div>
    );
  }
}


class TestThing extends React.Component {
	
	constructor(props) {
	  super(props);
	  
  }
  
  
 
  
  
  
	
	
  render() {
    return (
      <div className="DecimalToBinaryApp">
        
          
		<p>the current value is: {this.props.value}</p>
        
        
      </div>
    );
  }
}



class DecimalToBinaryApp extends React.Component {
	
	constructor(props) {
	  super(props);
	  this.state = {
		
		  value: "",
		  
	  };
  }
  
  
 handleSubmit(){
	 this.setState({value: "this worked"});
	 alert(this.state.value);
	 //a click does not reload page but a form submit does 
	 //the function passing syntax from this end () => ... makes all the difference it seems
	 
	 
	 
 }
  
  
  
	
	
  render() {
    return (
      <div className="DecimalToBinaryApp">
        <div className="decimal">
          <DecimalHandler  subFunc={() => this.handleSubmit()}/>
		  <TestThing value={this.state.value}/>
		  
        </div>
        
      </div>
    );
  }
}











// ========================================

ReactDOM.render(
  <DecimalToBinaryApp />,
  document.getElementById('root')
);