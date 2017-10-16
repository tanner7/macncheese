import React, { Component } from 'react';
	// a './' refers to local files not a library
import './HelloWorld.css';

class GoodbyeWorld extends React.Component {
	constructor(props) {
  	super(props);
  	this.state = { farewell: 'Goodbye' };
}

	render() {
  		return (
    		<div className="GoodbyeWorld">
      		{this.state.farewell} {this.props.name}
    		</div>
  		);
	}
}


export default GoodbyeWorld;