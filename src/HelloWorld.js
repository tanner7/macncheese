import React, { Component } from 'react';
	// a './' refers to local files not a library
import './HelloWorld.css';


class HelloWorld extends Component {

	// props is only accessible as a property on the HelloWorld obj
	constructor(props) {

	   // calls to parent constructor: Component
  	super(props);

  	// sets the greeting prop to 'Hello'
  	this.state = { greeting: 'Hello' };

  	// binds frenchify to this obj so it can refer to it as 'this' in rendor
  	this.frenchify = this.frenchify.bind(this);

  	this.removeGreeting = this.removeGreeting.bind(this);
}
	// any class component in React needs a rendor function to return JSX
	render() {
  		return (
    		<div className="HelloWorld">
      		{this.state.greeting} {this.props.name}
      		<br/>
      		<button onClick={this.frenchify}>Frenchify!</button>
      		<br/>
      		<button onClick={this.removeGreeting}>Remove</button>
    		</div>
  		);
	}

	frenchify() {
		this.setState({ greeting: 'Bonjour' });
	}

	removeGreeting() {
  		this.props.removeGreeting(this.props.name);
	}

}

export default HelloWorld;
