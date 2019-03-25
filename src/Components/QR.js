import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
var QRCode = require('qrcode.react');


export default class QR extends React.Component {
	constructor(props) {
    super(props);
    this.state = { random: 0,
		 							 height: props.height};
  }

	componentDidMount(){
		const min = 10000;
    const max = 99999;

    const rand = Math.floor(Math.random() * (max - min)) + min;
    this.setState({ random: this.state.random + rand });

	}
	componentWillMount(){
    this.setState({height: (window.innerHeight/2)});
  }

  componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){


		return(
			<div className="Home" style={{"padding-top":"30vh","padding-bottom":"30vh", "text-align":"center", "height": "100%"}}>
				<h2 style={{"color":"white"}}> Zeig diesen Code einfach dem Garderoben-Personal und gib deine Jacke ab, das wars. </h2>
				<QRCode style={{"height": "25vh", "width": "25vh"}} Level="M" includeMargin={true} size={this.state.height} value={this.state.random.toString(10)}/>
			</div>
		);
	}
}
