import React, { Component } from 'react';
import NoteList from './NoteList';
import Clock from './Clock';
import './Note.css';

class Container extends Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="Container">
      	<div className="top-bar">
      		<Clock content="Sexy Clock"/>
      	</div>
      	<NoteList />	
      </div>
    );
  }

}

export default Container;