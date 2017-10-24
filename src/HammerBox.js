import React, { Component } from 'react';
import Hammer from 'hammerjs';
import ReactDOM from 'react-dom';
import './Note.css';

class HammerBox extends Component {

	constructor(props) {

		super(props);

		this.handleTap = this.handleTap.bind(this);

		this.handleSwipe = this.handleSwipe.bind(this);

		// var screen = document.getElementById('root');

		// var box = ReactDOM.findDOMNode(this);

		this.state = { initialPosition: { x: 0, y: 0 },

					};
	}

    componentDidMount() {
    	// find obj and create Hammer class out of it
        this.hammer = Hammer(ReactDOM.findDOMNode(this));
        this.hammer.on('tap', this.handleTap);
    }

    componentWillUnmount() {
        this.hammer.off('tap', this.handleTap);
    }

	handleTap() {
		var initPos = this.state.initialPosition;
		console.log(initPos);
	}

	handleSwipe() {
		console.log('swipe');
	}

	render() {
    	return (
      	<div className="HammerBox">
      		Tap Me
      	</div>
    	);
  	}

}
	// <Hammer onTap={this.handleTap} onSwipe={this.handleSwipe}><div>Tap Me</div></Hammer>

export default HammerBox;