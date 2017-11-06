import React, { Component } from 'react';
import NoteList from './NoteList';
import Clock from './Clock';
import './Note.css';

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