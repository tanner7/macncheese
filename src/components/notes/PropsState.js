import React, { Component } from 'react';
	// a './' refers to local files not a library
import '../../style/Note.css';


// trying to make a re-usable component that will return component prop name
class PropsState extends Component {

  render () {
  	return (
  		<div className="PropsState" >
  			{this.props.name}
  		</div>
  	);
  }

}

export default PropsState;