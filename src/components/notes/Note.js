import React, { Component } from 'react';
	// a './' refers to local files not a library
import PropsState from './PropsState';
import '../../style/Note.css';


class Note extends Component {

	// props are only accessible as a property on the Note obj
	constructor(props) {

	   // calls to parent constructor: Component
  	super(props);

  	// binds currentNote to this obj so it can refer to it as 'this' in rendor
  	this.currentNote = this.currentNote.bind(this);

  	this.removeNote = this.removeNote.bind(this);
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

	// any class component in React needs a render function to return JSX
	render() {
  		return (

        // onCLick sets note props which is passed via currentNote to NoteList[]
    		<div className="Note" onClick={this.currentNote} >
          <PropsState name={this.props.name} />
          <button onClick={this.removeNote}>X</button>
    		</div>
  		);
	}

}

export default Note;
