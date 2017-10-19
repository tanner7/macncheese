import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import './Note.css';

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

  handleContentUpdate(event) {
    event.preventDefault();
    this.setState({ noteContent: event.target.value });
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
        <input
          placeholder="Name"
          type="text"
          onChange={this.handleNameUpdate}
          value={this.state.noteName}
        />
        <br/>
        <br/>
        <input
          classname="content"
          type="textarea"
          placeholder="Content"
          onChange={this.handleContentUpdate}
          value={this.state.noteContent}
        />
        <br/>
        <br/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
  }
}

export default AddNote;