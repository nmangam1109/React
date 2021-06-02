import React from 'react'; 

class Text extends React.Component{ 
    constructor(){  //Constructor
        super() ; //Calls Base class Construcotr as best  practice
        this.state = {  //Set initial state
            text: 'Welcome students'  //props
        }
       }

       changeText() { //event handler for click event 
        this.setState({  //Change the state of the props
            text:'This is Class 2 of React'
        }) 
    }
	render(){  //event handler to trigger the state change
		return( 

				<div> 
                 <h1>{this.state.text}</h1>  
                 <button onClick={() => this.changeText()}>Next</button> 
				</div> 
			); 
	} 
} 

export default Text