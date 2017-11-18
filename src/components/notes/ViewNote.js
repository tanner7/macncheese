import React, { Component } from 'react';
import EditNote from './EditNote';
import '../../style/Note.css';

// view note simply displays a note that NoteList gave it as a prop
class ViewNote extends Component {
	constructor(props) {
  	super(props);

  	this.state = {noteName: 'Note Name:',
  				        noteContent: 'Note Content:',
                  name: 'Name:',
                  description: 'Description:',
                  hideEditNote: true,
                  hideViewNote: false,
                };

    this.toggleEditButton = this.toggleEditButton.bind(this);

    this.saveNoteView = this.saveNoteView.bind(this);

    this.noteNameChange = this.noteNameChange.bind(this);

  }

  componentWillMount() {
    this.setState({
      noteName: this.props.name, noteContent: this.props.content
    })
  }

  toggleEditButton() {
    this.setState({ hideEditNote: false,
                    hideViewNote: true });
  }

  noteNameChange(noteName) {
    this.setState({ noteName: noteName });
  }

  saveNoteView(editNote) {
    this.setState({ noteName: editNote.noteName });
  }

  showEdit() {
    return (  
        <div className="edit">
          <EditNote saveNote={this.saveNoteView} noteName={this.noteNameChange} name={this.state.noteName} content={this.state.noteContent}/> 
        </div>
    )
  }

  showView() {
    return (
        <div className="view">
        <button onClick={this.toggleEditButton} >Edit</button>
        <br/>
        <p className="card-title">{this.state.noteName}</p>
        <br/>
        <br/>
        <b>{this.state.description}</b>
        <br/> 
        {this.state.noteContent}
        </div>
    )
  }

  render() {
    return (
      <div className="ViewNote">
          { !this.state.hideEditNote && this.showEdit()}
          { !this.state.hideViewNote && this.showView()}
      </div>
    );
  }

}

export default ViewNote;