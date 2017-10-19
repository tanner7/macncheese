import React, { Component } from 'react';
import './Note.css';

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
      	<h2>View Note</h2>
      	<h5>{this.state.noteName}</h5><p>{this.props.name}</p>
      	<br/>
      	<h5>{this.state.noteContent}</h5> {this.props.content}
      </div>
    );
  }

  currentNoteView(currentNote) {
  	this.setState({ currentNote });
  }


}

export default ViewNote;