import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBInput,MDBBtn,Animation, MDBJumbotron, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import '../Home.css';
import { connect } from 'react-redux';
import Hero from'../Pics/bar.jpg';
import LazyHero from 'react-lazy-hero';


class Finder extends React.Component {
	constructor(props) {
    super(props);
  }

	componentDidMount(){
		this.props.dispatch({ type:"NAVCHANGE"});

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
						 <MDBCol><h1> Finde deine Location!</h1></MDBCol>
					 </MDBRow>
					 <MDBRow>
						 <MDBCol><h3> Gib hier einfach die Nummer ein oder scanne den QR-Code.</h3></MDBCol>
					 </MDBRow>
					 <MDBRow>
					 		<MDBCol style={{"background":"white", "opacity":"0.75"}} >
								<MDBInput
									className="Text"
				          label="Location-Nummer"
				          icon="pencil-alt"
									getValue={this.getValue}
				        />
								</MDBCol>
							</MDBRow>
					 <MDBRow>
					 	<MDBCol>
						<div className="text-center py-4 mt-3">
							<MDBBtn color="cyan" href="/location/tab-worms" >
							Finden!
							</MDBBtn>
							</div>
						</MDBCol>
					 </MDBRow>
				 </div>
			 </MDBContainer>
		 </LazyHero>
			</div>
		);
	}
}

export default connect()(Finder);
