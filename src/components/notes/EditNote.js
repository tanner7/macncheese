import React, { Component } from 'react';
import TextEditor from './TextEditor';
import Mousetrap from 'mousetrap';
import '../../style/App.css';

class EditNote extends Component {
  constructor(props) {
    super(props);

    this.state = {noteName: this.props.name,
                  noteContent: this.props.content };

    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleContentUpdate = this.handleContentUpdate.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  // will update our list
  handleNameUpdate(event) {
    event.preventDefault();
    this.setState({ noteName: event.target.value });
    this.props.noteName(this.state.noteName);
  }

  handleContentUpdate(value) {
    this.setState({ noteContent: value });
  }

  // adds name and content
  saveNote(event) {
    event.preventDefault();
    this.props.saveNote(this.state);
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

  /*
  componentWillReceiveProps(name, description) {
    this.setState({ noteName: name,
                    noteContent: description })
  }
  */

  render() {
  return (
    <div className="EditNote">
      <form onSubmit={this.saveNote}>
        <button className="SaveNoteBtn" type="submit">Save</button>
        <br/>
        <input
          type="text"
          onChange={this.handleNameUpdate}
          value={this.state.noteName}
        />
        <br/>
        <br/>        
      </form>
      <TextEditor value={this.state.noteContent} noteContent={this.handleContentUpdate} />
    </div>
  );
  }
}

export default EditNote;