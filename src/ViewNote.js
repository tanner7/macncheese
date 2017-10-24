import React, { Component } from 'react';
import './Note.css';


// view note simply displays a note that NoteList gave it as a prop
class ViewNote extends Component {
	constructor(props) {
  	super(props);

  	this.state = {noteName: 'Note Name:',
  				        noteContent: 'Note Content:',
                  name: 'Name:',
                  description: 'Description:'};

}

  

  render() {
    return (
      <div className="ViewNote">
      	<h2>ViewNote</h2>
      	<b>{this.state.name}</b> {this.state.noteName}
      	<br/>
        <br/>
      	<b>{this.state.description}</b> {this.state.noteContent}
        <br/>
        <br/>
        <button>Edit</button>
      </div>
    );
  }

  componentWillMount() {
    this.setState({
      noteName: this.props.name, noteContent: this.props.content
    })
  }




}

export default ViewNote;