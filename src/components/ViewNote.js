import React, { Component } from 'react';
import '../style/Note.css';

// view note simply displays a note that NoteList gave it as a prop
class ViewNote extends Component {
	constructor(props) {
  	super(props);

  	this.state = {noteName: 'Note Name:',
  				        noteContent: 'Note Content:',
                  name: 'Name:',
                  description: 'Description:'};

  }

  componentWillMount() {
    this.setState({
      noteName: this.props.name, noteContent: this.props.content
    })
  }

  render() {
    return (
      <div className="ViewNote">
        <button>Edit</button>
        <br/>
        <p className="card-title">{this.state.noteName}</p>
        <br/>
        <br/>
      	<b>{this.state.description}</b>
        <br/> 
        {this.state.noteContent}
      </div>
    );
  }

}

export default ViewNote;