import React, { Component } from 'react';
	// a './' refers to local files not a library
import PropsState from './PropsState';
import './Note.css';


class Note extends Component {

	// props are only accessible as a property on the Note obj
	constructor(props) {

	   // calls to parent constructor: Component
  	super(props);

  	// binds currentNote to this obj so it can refer to it as 'this' in rendor
  	this.currentNote = this.currentNote.bind(this);

  	this.removeNote = this.removeNote.bind(this);
}

	// any class component in React needs a rendor function to return JSX
	render() {
  		return (
    		<div className="Note">
          <PropsState name={this.props.name} />
      		{this.props.name}
      		<br/>
          <button onClick={this.currentNote}>View</button><button onClick={this.removeNote}>Remove</button>
    		</div>
  		);
	}

	editNote() {
		this.setState({ note: 'Bonjour' });
	}

  currentNote() {
    this.props.currentNote(this.props.name);
  }

	removeNote() {
  	this.props.removeNote(this.props.name);
	}

}

export default Note;
