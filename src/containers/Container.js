import React, { Component } from 'react';
import NoteList from '../components/notes/NoteList';
import Clock from '../components/Clock';
import '../style/Note.css';

class Container extends Component {

  render() {
    return (
      <div className="Container">
      	<NoteList name="Note List" />	
      </div>
    );
  }

}

export default Container;