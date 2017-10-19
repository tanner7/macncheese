import React, { Component } from 'react';
	// a './' refers to local files not a library
import './Note.css';


class Note extends Component {

	// props is only accessible as a property on the HelloWorld obj
	constructor(props) {

	   // calls to parent constructor: Component
  	super(props);

  	// sets the note prop to 'Hello'

  	// binds editNote to this obj so it can refer to it as 'this' in rendor
  	this.currentNoteNote = this.currentNoteNote.bind(this);

  	this.removeNote = this.removeNote.bind(this);
}

	// any class component in React needs a rendor function to return JSX
	render() {
  		return (
    		<div className="Note">
      		{this.props.name}
      		<br/>
          <button onClick={this.currentNoteNote}>View</button><button onClick={this.removeNote}>Remove</button>
    		</div>
  		);
	}

	editNote() {
		this.setState({ note: 'Bonjour' });
	}

  currentNoteNote() {
    this.props.currentNoteNote(this.props.name);
  }

	removeNote() {
  	this.props.removeNote(this.props.name);
	}

}

export default Note;
