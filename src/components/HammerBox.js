import React, { Component } from 'react';
import Hammer from 'hammerjs';
import ReactDOM from 'react-dom';
import TapBox from './TapBox';
import '../style/Note.css';

class HammerBox extends Component {

	constructor(props) {

		super(props);

		this.imageUpload = this.imageUpload.bind(this);

		this.btnClick = this.btnClick.bind(this);

		this.handleSwipe = this.handleSwipe.bind(this);

		this.updateDimensions = this.updateDimensions.bind(this);

		this.state = { initialPosition: { x: 0, y: 0 },
					   screenWidth: '',
					   height: 0, 
					   file: '',
					   imagePreviewUrl: ''

					};
	}

    updateDimensions() {
		var w = window,
		    d = document,
		    e = d.documentElement,
		    g = d.getElementsByTagName('body')[0],
		    x = w.innerWidth || e.clientWidth || g.clientWidth,
		    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

		this.setState({screenWidth: x, screenHeight: y});
    }

    imageSubmit(ev) {
    	ev.preventDefault();
    	console.log('hanlde uploading-', this.state.file);
    }

    btnClick(ev) {
    	// fires the onChange for <input>
    	document.getElementById('fileInput').click();

    }

    imageUpload(ev) {

    	ev.preventDefault();

    	let reader = new FileReader();
		let file = ev.target.files[0];    	

	    reader.onload = () => {
	      this.setState({
	        file: file,
	        imagePreviewUrl: reader.result
	      });
	    };

	    console.log(ev);
	    console.log(file);
	    console.log(reader);

	    reader.readAsDataURL(file)

	    //console.log(reader.readAsDataURL(file));

    }

    componentWillMount() {
    	this.updateDimensions();
    }

    componentDidMount() {
    	// find obj and create Hammer class out of it
        this.hammer = Hammer(ReactDOM.findDOMNode(this));
        // call handleTap when the HammerBox is tapped
        //this.hammer.on('tap', this.handleTap);
        // call updateDimensions when window is resized
        window.addEventListener("resize", this.updateDimensions);

        // set the height of this component
        const height = this.compElement.clientHeight;
        this.setState({ height });
    }

    componentWillUnmount() {
        this.hammer.off('tap', this.handleTap);
        window.addEventListener("resize", this.updateDimensions);
    }

	handleSwipe() {
		console.log('swipe');
	}


	render() {

	    let imagePreview = this.state.imagePreviewUrl;

		var background = ''.concat('url(', imagePreview, ')', 'no-repeat');

		var style = {
			background: background
		};

    	return (
    	<div className="HammerBox-Container">

	      	<div className="HammerBox" style={style} ref={ (compElement) => this.compElement = compElement}>
	      		<TapBox />
	      		<button onClick={this.btnClick} >+</button>
	      		<input type="file" id="fileInput" onChange={(ev)=>this.imageUpload(ev)} />
	      	</div>
	      	<p>HammerBox Height: {this.state.height}</p>
	      	<p>screenWidth: {this.state.screenWidth}</p>
	      	<p>screenHeight: {this.state.screenHeight}</p>	
	      	      	
	    </div>
    	);
  	}

}
	// <Hammer onTap={this.handleTap} onSwipe={this.handleSwipe}><div>Tap Me</div></Hammer>

	/*

	  onDrop(files) {
  	console.log('on drop');
    this.setState({
      files
    });
  }

		let dropzoneRef;

  		<Dropzone className="drop" onDrop={this.onDrop} ref={(node) => { dropzoneRef = node; }}>
		  <button type="button"  onClick={() => { dropzoneRef.open() }}>
		      +
		  </button>
  		</Dropzone>

	*/

export default HammerBox;