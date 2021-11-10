import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';






class GetInformation extends React.Component {
	
  
	
  constructor(props) {
	  super(props);
	  
	  this.state = {
		  name: "",
		  date: "",
		  eventItems: [],
		  
	  };
	  
	  //this.handleSubmit = this.handleSubmit.bind(this.state.name, this.state.date);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleNameChange = this.handleNameChange.bind(this);
	  this.handleDateChange = this.handleDateChange.bind(this);
	  
	  
  }
  
  handleSubmit(event) {
	
	event.preventDefault();
	
	var newEntry = this.state.name +", "+ this.state.date;
	const newItem = {
      text: newEntry,
      id: Date.now()
    };
	
	
	  
	  //the entry is the name and date combined into one string
	this.setState({eventItems: this.state.eventItems.concat(newItem)});
	
	
	
    
    
  }
  
  handleNameChange(event) {
		 
		this.setState({name: event.target.value});
		
  }
  
  handleDateChange(event) {
		 
		this.setState({date: event.target.value});
		
  }
  
  
  
  
  

  render() {
    

    return (
      <div>
        <div className="GetInformation"></div>
        
		
		<form onSubmit={this.handleSubmit}>
		<label for="name">Enter your name:</label><br></br>
		<input type="text" id="name" name="enter_name"   onChange={this.handleNameChange} /><br></br>
		<label for="date">Enter the date:</label><br></br>
		<input type="text" id="date" name="enter_date"   onChange={this.handleDateChange} /><br></br>
		<input type="submit" value = "Submit" /><br></br>
		</form> 
		<EventList items={this.state.eventItems}/>
      </div>
    );
  }
}


class EventList extends React.Component {
	
  constructor(props) {
	  super(props);
	  
	  
  }
	
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}






// ========================================

ReactDOM.render(
  <GetInformation />,
  document.getElementById('root')
);