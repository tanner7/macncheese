import React, { Component } from 'react';
import './Note.css';


// view note simply displays a note that NoteList gave it as a prop
class ViewNote extends Component {
	constructor(props) {
  	super(props);

  	this.state = {noteName: 'Note Name:',
  				        noteContent: 'Note Content:'};

  	this.currentNoteView = this.currentNoteView.bind(this);

}

  render() {
    return (
      <div className="ViewNote">
      	<h2>ViewNote</h2>
      	<b>{this.state.noteName}</b> {this.props.name}
      	<br/>
      	<b>{this.state.noteContent}</b> {this.props.content}
      </div>
    );
  }

  currentNoteView(currentNote) {
  	this.setState({ currentNote });
  }


}

export default ViewNote;