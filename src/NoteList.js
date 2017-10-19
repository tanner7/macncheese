import React, { Component } from 'react';
import Note from './Note';
import Clock from './Clock';
import ViewNote from './ViewNote';
import AddNote from './AddNote';
import './Note.css';

class NoteList extends Component {
	constructor(props) {
  	super(props);

    this.state = {notes: [
                         {noteName: 'Bud', noteContent: 'Light'},
                         {noteName: 'Leinenkugels', noteContent: 'Red'},
                         {noteName: 'Natty', noteContent: 'Ice'}
                         ],
                  currentNote: [{noteName: 'Bud', noteContent: 'Light'}]
                };

  	this.addNote = this.addNote.bind(this);

    this.currentNoteList = this.currentNoteList.bind(this);

  	this.removeNoteList = this.removeNoteList.bind(this);
}

	renderNotes() {
  		return this.state.notes.map(notes => (
    		<Note
      		key={notes.noteName}
      		name={notes.noteName}
          content={notes.noteContent}
          currentNoteNote={this.currentNoteList}
      	  removeNote={this.removeNoteList}
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

	addNote(newNote) {
  		this.setState({ notes: [...this.state.notes, newNote ] });
  }

  currentNoteList(currentNoteName) {
      const currentNote = this.state.notes.filter(notes => {
      return notes.noteName === currentNoteName;
      });
      this.setState({ currentNote: currentNote});

  }

	removeNoteList(removeName) {
  		const filteredNotes = this.state.notes.filter(notes => {
    	return notes.noteName !== removeName;
  	});
  	this.setState({ notes: filteredNotes });
  }

  render() {
    return (
      <div className="NoteList">
        <div className="left">
      	 {this.renderNotes()}
        </div>
        <div className="right">
          <Clock content="Sexy Clock"/>
          {this.showNote()}
          <AddNote addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default NoteList;