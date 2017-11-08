import React, { Component } from 'react';
import Note from './Note';
import PropsState from './PropsState';
import ViewNote from './ViewNote';
import AddNote from './AddNote';
import '../style/App.css';

class NoteList extends Component {
	constructor(props) {
  	super(props);

    // NoteList keeps track of all the notes here to edit, delete, create
    this.state = {notes: [
                         {noteName: 'Bud', noteContent: 'Light'},
                         {noteName: 'Leinenkugels', noteContent: 'This is the first time that you can.'},
                         {noteName: 'Natty', noteContent: 'Ice'}
                         ],
                  currentNote: [{noteName: '', noteContent: ''}],
                  hideAddNote: true,
                  hideViewNote: false,
                };


    // callback function so addNote.js can use NoteLists.js addNoteList() function to pass it data            
  	this.addNoteList = this.addNoteList.bind(this);

    this.addNoteClick = this.addNoteClick.bind(this);

    this.currentNoteList = this.currentNoteList.bind(this);

  	this.removeNote = this.removeNote.bind(this);
}

  getInitialState() {
    return { hideAddNote: true,
             hideViewNote: false };
  }

  addNoteClick() {
    this.setState({ hideAddNote: false,
                    hideViewNote: true});
  }

  // adds the new Note to the NoteList
  addNoteList(newNote) {
      this.setState({ notes: [...this.state.notes, newNote ] });
  }

  // filters the notelist and removes the note that
  removeNote(removeName) {
      const filteredNotes = this.state.notes.filter(notes => {
      return notes.noteName !== removeName;
    });
    this.setState({ notes: filteredNotes, currentNote: [{ noteName: '', noteContent: '' }]});
  }

  // gets the currentNote from Note.js filters the notes list sets CurrentNote state to note that 
  // was clicked. Hides the AddNote box and shows the ViewNote box
  currentNoteList(currentNoteName) {
      const currentNote = this.state.notes.filter(notes => {
      return notes.noteName === currentNoteName;
      });
      this.setState({ currentNote: currentNote,
                      hideAddNote: true,
                      hideViewNote: false});
  }

	renderNotes() {
  		return this.state.notes.map(notes => (
    		<Note
      		key={notes.noteName}
      		name={notes.noteName}
          content={notes.noteContent}
          currentNote={this.currentNoteList}
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

  render() {
    return (
      <div className="NoteList">
        <div className="top">
          <button onClick={this.addNoteClick} >New Note</button>
        </div>
        <div className="left">
          <p className="title">Note List</p>
      	  {this.renderNotes()}
        </div>
        <div className="right">
          { !this.state.hideAddNote && <AddNote addNote={this.addNoteList} /> }
          { !this.state.hideViewNote && this.showNote()}
        </div>
      </div>
    );
  }
}

// <AddNote addNote={this.addNoteList} />

  // example of setting default props
  NoteList.defaultProps = {
    name: 'NoteList'
  };

export default NoteList;