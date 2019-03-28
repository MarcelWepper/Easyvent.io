import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBListGroup, MDBListGroupItem,MDBInput,MDBBtn,Animation, MDBJumbotron, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import '../Home.css';
import { connect } from 'react-redux';
import Hero from'../Pics/drinks.jpg';
import LazyHero from 'react-lazy-hero';


class Drinks extends React.Component {
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
			<div className="Home">
			<LazyHero color = "#000000" parallaxOffset="50" minHeight='100vh' opacity ="0.5" imageSrc={Hero} >
			 <MDBContainer className= "grid">
				 {/* 	Hier die trasnparente Box mit allem	*/}
				 <div className= "HeroText">
					 <MDBRow>
						 <MDBCol><h1> Drinks!</h1></MDBCol>
					 </MDBRow>
					 <MDBRow>
						 <MDBCol><h3> Hier findest du die Getränkekarte:</h3></MDBCol>
					 </MDBRow>
				 </div>
			 </MDBContainer>

			 <MDBContainer>
				<MDBListGroup>
					<MDBListGroupItem href="#">
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">Welde</h5>
							<h5>3.00€</h5>
						</div>
					</MDBListGroupItem>
					<MDBListGroupItem href="#">
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">Astra</h5>
							<h5>3.50€</h5>
						</div>
					</MDBListGroupItem>
					<MDBListGroupItem href="#">
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">Gin-Tonic</h5>
							<h5>6.50€</h5>
						</div>
					</MDBListGroupItem>
					<MDBListGroupItem href="#">
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">Jacky-Cola</h5>
							<h5>6.50€</h5>
						</div>
					</MDBListGroupItem>
				</MDBListGroup>
			</MDBContainer>
		 </LazyHero>
			</div>
		);
	}
}

export default connect()(Drinks);
