import React, { Component } from 'react';
import Hammer from 'hammerjs';
import ReactDOM from 'react-dom';
import TapBox from './TapBox';
import './Note.css';

class HammerBox extends Component {

	constructor(props) {

		super(props);

		//this.handleTap = this.handleTap.bind(this);

		this.handleSwipe = this.handleSwipe.bind(this);

		this.updateDimensions = this.updateDimensions.bind(this);

		// var screen = document.getElementById('root');

		// var box = ReactDOM.findDOMNode(this);

		this.state = { initialPosition: { x: 0, y: 0 },
					   screenWidth: '',
					   height: 0

					};
	}

    updateDimensions() {
		var w = window,
		    d = document,
		    e = d.documentElement,
		    g = d.getElementsByTagName('body')[0],
		    x = w.innerWidth || e.clientWidth || g.clientWidth,
		    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

		this.setState({screenWidth: x, screenHeight: y});
    }

    componentWillMount() {
    	this.updateDimensions();
    }

    componentDidMount() {
    	// find obj and create Hammer class out of it
        this.hammer = Hammer(ReactDOM.findDOMNode(this));
        // call handleTap when the HammerBox is tapped
        //this.hammer.on('tap', this.handleTap);
        // call updateDimensions when window is resized
        window.addEventListener("resize", this.updateDimensions);

        // set the height of this component
        const height = this.compElement.clientHeight;
        this.setState({ height });
    }

    componentWillUnmount() {
        this.hammer.off('tap', this.handleTap);
        window.addEventListener("resize", this.updateDimensions);
    }

	handleSwipe() {
		console.log('swipe');
	}

	render() {
    	return (
    	<div className="HammerBox-Container">

	      	<div className="HammerBox" ref={ (compElement) => this.compElement = compElement}>
	      		<TapBox />
	      	</div>
	      	<p>screenWidth: {this.state.screenWidth}</p>
	      	<p>screenHeight: {this.state.screenHeight}</p>	
	      	<p>HammerBox Height: {this.state.height}</p>      	
	    </div>
    	);
  	}

}
	// <Hammer onTap={this.handleTap} onSwipe={this.handleSwipe}><div>Tap Me</div></Hammer>

export default HammerBox;