import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Mousetrap from 'mousetrap';
import '../style/App.css';

class TextEditor extends Component {




  constructor(props) {
    super(props);

    this.state = { delta: '',  // You can also pass a Quill Delta here

    			   // sending Quill the toolbar modules and formats
				   modules: {
					    toolbar: [
					      [{ 'header': [1, 2, false] }],
					      ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
					      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
					      ['link', 'image'],
					      ['clean']
					    ],
					},
				   formats: [
					    'header',
					    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
					    'list', 'bullet', 'indent',
					    'link', 'image', 'clean'
					  ],

	}

  	//this.addContent = this.addContent.bind(this);

  	this.handleChange = this.handleChange.bind(this)

  }

  handleChange(delta) {
    this.setState({ delta: delta })
    this.props.noteContent(this.state.delta);
  }

/*  addContent() {
  	this.props.noteContent(this.state.html);
  }*/

  render () {
    return (
    <div>
      <ReactQuill value={this.state.delta}
                  onChange={this.handleChange} 
                  modules={this.state.modules}
                  formats={this.state.formats}
      />
    </div>
    );
  }

}

// <button onClick={this.addContent}>Add Content</button>

export default TextEditor;