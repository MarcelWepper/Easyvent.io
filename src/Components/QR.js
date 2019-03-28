import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { connect } from 'react-redux';

var QRCode = require('qrcode.react');

class QR extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 	random: 0,
							 			height: props.height};
  }

	componentDidMount(){
		const min = 10000;
    const max = 99999;

    const rand = Math.floor(Math.random() * (max - min)) + min;
    this.setState({ random: this.state.random + rand });

		this.props.dispatch({ type:"NAVCHANGE"});

	}
	componentWillMount(){
 		this.setState({height: (window.innerHeight/2)});
  }

  componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
			<div className="Home" style={{"padding-top":"15vh","padding-bottom":"20vh", "text-align":"center", "height": "100%"}}>
				<h2 style={{"color":"white","padding-top":"15vh","padding-bottom":"10vh", "padding-left":"5vh","padding-right":"5vh"}}> Zeig diesen Code einfach dem Garderoben-Personal und gib deine Jacke ab, das wars. </h2>
				<QRCode style={{"height": "25vh", "width": "25vh"}} Level="M" includeMargin={true} size={this.state.height} value={this.state.random.toString(10)}/>
			</div>
		);
	}
}

export default connect()(QR);
