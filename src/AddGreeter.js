import React, { Component } from 'react';
import Mousetrap from 'mousetrap';
import './HelloWorld.css';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }
  // will update our list
  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }

  // adds a greeting
  addGreeting() {
    this.props.addGreeting(this.state.greetingName);
    this.setState({ greetingName: '' });
  }

  // binds the 'enter/return' key to addGreeting
  componentDidMount() {
    Mousetrap.bind('return', this.addGreeting);
  }

  componentWillUnmount() {
    Mousetrap.unbind('return', this.addGreeting);
  }

  render() {
  return (
    <div className="AddGreeter">
      <input
        className="mousetrap"
        type="text"
        onChange={this.handleUpdate}
        value={this.state.greetingName}
      />
      &nbsp;&nbsp;
      <button onClick={this.addGreeting}>Add</button>
    </div>
  );
  }
}

export default AddGreeter;