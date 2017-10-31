import React, { Component } from 'react';
import './Note.css';

class Clock extends Component {

	constructor(props) {
		super(props);

		this.state = {date: new Date(), content: 'hi'};

	}

  	componentDidMount() {

	    this.timerID = setInterval(
	      () => this.tick(),
	      1000
	    );  		
  	}

  	componentWillUnmount() {
  		clearInterval(this.timerID);
  	}

	tick() {
		this.setState({
		  date: new Date()
		});
	}

	render() {
		return (
			<div className="Clock">
				{this.props.content}
				<h5>Time (state): {this.state.date.toLocaleTimeString()}</h5>
			</div>
		);
	}

}

export default Clock;