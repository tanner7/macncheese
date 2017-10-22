import React, { Component } from 'react';
import Note from './Note';
import Clock from './Clock';
import PropsState from './PropsState';
import ViewNote from './ViewNote';
import AddNote from './AddNote';
import './Note.css';

class NoteList extends Component {
	constructor(props) {
  	super(props);

    // NoteList keeps track of all the notes here to edit, delete, create
    this.state = {notes: [
                         {noteName: 'Bud', noteContent: 'Light'},
                         {noteName: 'Leinenkugels', noteContent: 'Red'},
                         {noteName: 'Natty', noteContent: 'Ice'}
                         ],
                  currentNote: [{noteName: 'Bud', noteContent: 'Light'}]
                };


    // callback function so addNote.js can use NoteLists.js addNoteList() function to pass it data            
  	this.addNoteList = this.addNoteList.bind(this);

    this.currentNoteList = this.currentNoteList.bind(this);

  	this.removeNote = this.removeNote.bind(this);
}

	renderNotes() {
  		return this.state.notes.map(notes => (
    		<Note
      		key={notes.noteName}
      		name={notes.noteName}
          content={notes.noteContent}
          currentNoteNote={this.currentNoteList}
      	  removeNote={this.removeNote}
    />
  ));
  }

  showNote() {
     return this.state.currentNote.map(note => (
        <ViewNote
            key={note.noteName}
            name={note.noteName}
            content={note.noteContent}
        />
      ));
  }

	addNoteList(newNote) {
  		this.setState({ notes: [...this.state.notes, newNote ] });
  }

  currentNoteList(currentNoteName) {
      const currentNote = this.state.notes.filter(notes => {
      return notes.noteName === currentNoteName;
      });
      this.setState({ currentNote: currentNote});

  }

	removeNote(removeName) {
  		const filteredNotes = this.state.notes.filter(notes => {
    	return notes.noteName !== removeName;
  	});
  	this.setState({ notes: filteredNotes });
  }

  render() {
    return (
      <div className="NoteList">
        <div className="left">
          <PropsState name={this.props.name} />
      	 {this.renderNotes()}
        </div>
        <div className="right">
          {this.showNote()}
          <AddNote addNote={this.addNoteList}/>
        </div>
      </div>
    );
  }
}

  NoteList.defaultProps = {
    name: 'NoteList'

  };

export default NoteList;