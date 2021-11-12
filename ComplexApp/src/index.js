import React, { useState } from 'react';	//need this(useState) to use functional component hooks
import ReactDOM from 'react-dom';
import './index.css';





//functional components and hooks reference: https://reactjs.org/docs/hooks-overview.html






function EventList(props) {
  
  
  
  return (
      <ul>
        {props.items.map(item => (
		
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
}




function GetInformation(props) {
  // Declare a new state variable, which we'll call "count"  
  const [products, setProductList] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  
  const handleSubmitFunction = handleSubmit;
  const handleNameChangeFunction = handleNameChange;
  const handlePriceChangeFunction = handlePriceChange;
  
  
  function handleSubmit(event) {
	
	event.preventDefault();
	
	var newEntry = name +", "+ price;
	const newItem = {
      text: newEntry,
      id: Date.now()
    };
	
	
	  
	  //the entry is the name and date combined into one string
	//this.setState({eventItems: this.state.eventItems.concat(newItem)});
	var newList = products.concat(newItem);
	setProductList(newList);
	
	
    
    
  }
  
  function handleNameChange(event) {
		 
		//this.setState({name: event.target.value});
		setName(event.target.value);
		
  }
  
  function handlePriceChange(event) {
		 
		//this.setState({date: event.target.value});
		setPrice(event.target.value);
  }
  
  return (
      <div>
        <div className="GetInformation"></div>
        
		
		<form onSubmit={handleSubmitFunction}>
		<label for="name">Enter product name:</label><br></br>
		<input type="text" id="name" name="enter_name"   onChange={handleNameChangeFunction} /><br></br>
		<label for="price">Enter product price:</label><br></br>
		<input type="text" id="price" name="enter_price"   onChange={handlePriceChangeFunction} /><br></br>
		<input type="submit" value = "Submit" /><br></br>
		</form> 
		<EventList items={products}/>
      </div>
    );
}













// ========================================

ReactDOM.render(
  <GetInformation />,
  document.getElementById('root')
);