import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBInput,MDBBtn,Animation, MDBJumbotron, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

import '../Home.css';
import { connect } from 'react-redux';
import Hero from'../Pics/tab.jpg';
import LazyHero from 'react-lazy-hero';


class Location extends React.Component {
	constructor(props) {
    super(props);
  }

	componentDidMount(){
		this.props.dispatch({ type:"NAVLOCATION"});

	}


  componentWillUnmount(){
    window.scrollTo(0, 0)
  }


	render(){
		return(
			<div className="Home" style={{ "background": '#212121'}}>
			<LazyHero color = "#000000" parallaxOffset="50" minHeight='100vh' opacity ="0.5" imageSrc={Hero} >
			 <MDBContainer className= "grid">
				 {/* 	Hier die trasnparente Box mit allem	*/}
				 <div className= "HeroText">
					 <MDBRow>
						 <MDBCol><h1> Willkommen in der Tab!</h1></MDBCol>
					 </MDBRow>
					 <MDBRow>
						 <MDBCol><h3> Hier findest du weitere Informationen zur Tab.</h3></MDBCol>
					 </MDBRow>
				 </div>
			 </MDBContainer>
		 </LazyHero>
		 <MDBContainer style={{ "padding-left": '5%', "padding-right": '5%', "padding-top":"2%" }}className= "HeroText">
			 {/* 	Hier die trasnparente Box mit allem	*/}
			 <div>
				 <MDBRow>
					<MDBCol><h2> Adresse: </h2></MDBCol>
				</MDBRow>
				<MDBRow>
				 <MDBCol><h2> Erenburgerstraße 19, 67549 Worms </h2></MDBCol>
			 </MDBRow>
				<MDBRow>
					<MDBCol><h2> Typ: </h2></MDBCol>
					<MDBCol><h2> Kneipe </h2></MDBCol>
				</MDBRow>
				<MDBRow>
					<MDBCol><h2> Kosten: </h2></MDBCol>
					<MDBCol><h2> € v. €€€ </h2></MDBCol>
			 </MDBRow>
			 </div>
		 </MDBContainer>


			</div>
		);
	}
}

const mapStateToProps = function(state) {
  return{
  collapse: state.collapse
	}
}

export default connect(mapStateToProps)(Location);
