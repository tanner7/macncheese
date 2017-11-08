import React, { Component } from 'react';
import TextEditor from './TextEditor';
import Mousetrap from 'mousetrap';
import '../style/App.css';

class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {noteName: '',
                  noteContent: '' };

    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleContentUpdate = this.handleContentUpdate.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  // will update our list
  handleNameUpdate(event) {
    event.preventDefault();
    this.setState({ noteName: event.target.value });
  }

  handleContentUpdate(value) {
    this.setState({ noteContent: value });
  }

  // adds name and content
  addNote(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ noteName: '', 
                    noteContent: '' });
  }

  // binds the 'enter/return' key to addNote
  componentDidMount() {
    Mousetrap.bind('return', this.addNote);
  }

  componentWillUnmount() {
    Mousetrap.unbind('return', this.addNote);
  }

  render() {
  return (
    <div className="AddNote">
      <form onSubmit={this.addNote}>
        <button className="AddNoteBtn" type="submit">Add</button>
        <br/>
        <input
          placeholder="Name"
          type="text"
          onChange={this.handleNameUpdate}
          value={this.state.noteName}
        />
        <br/>
        <br/>        
      </form>
      <TextEditor noteContent={this.handleContentUpdate} />
    </div>
  );
  }
}

/*

        <input
          classname="content"
          type="textarea"
          placeholder="Content"
          onChange={this.handleContentUpdate}
          value={this.state.noteContent}
        />

*/

/*  AddNote.defaultProps = {
    addNote: {this.addNoteList}
  };*/

export default AddNote;