import React from 'react';
import LazyHero from 'react-lazy-hero';
import CookieConsent from "react-cookie-consent";
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'reactstrap';
import { Animation, MDBJumbotron, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Hero from'./Pics/hero.jpg';
import Brand from'./Pics/brand.png';
import Marcel from'./Pics/marcel.png';
import Florian from'./Pics/florian.png';
import Christopher from'./Pics/christopher.png';
import Emanuel from'./Pics/emanuel.png';
import Marvin from'./Pics/marvin.png';
import Phone from'./Pics/phone.jpg';
import Concert from'./Pics/concert.jpg';


class Home extends React.Component {

  componentWillUnmount(){
    window.scrollTo(0, 0);
  }
  componentDidMount(){
    this.props.dispatch({ type:"NAVHOME"});
  }

	render(){
		return(
      <div className="Home">
				{/* Hero-Image */}
        <section id='home'>
				   <LazyHero color = "#000000" parallaxOffset='50' minHeight='100vh' imageSrc={Hero} >
            <Container className= "grid">
              {/* 	Hier die trasnparente Box mit allem	*/}
              <div className= "HeroText">
                <Row>
                  <Col> <img src={Brand} width="25%" height="100%" alt="ProfilePicture"rounded responsive /></Col>
                </Row>
                <Row>
                  <Col><h1> Digitalisiere deine Location!</h1></Col>
                </Row>
                <Row>
                  <Col><h3> Seite im Aufbau...</h3></Col>
                </Row>
              </div>
            </Container>
          </LazyHero>
        </section>

        <section id='idee'>
          <MDBJumbotron fluid className="h1" color="white">
            <MDBContainer fluid>
              <MDBRow>
                <MDBCol className="Platzhalter"size="12"/>
              </MDBRow>
              <MDBRow>
                <MDBCol size="12">
                  <h1> Unsere Idee: </h1>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol lg="6">
                  <img src={Concert} className="img-fluid" alt="" />
                </MDBCol>
                <MDBCol lg="6" no className="h1">
                  <div className="h1">
                    <h1>Digitale Events und Zukunftsmusik?</h1>
                    <h2 style={{"fontSize":"0.6em"}}>Die Eventbranche steht einem Wandel bevor - der Megatrend Digitalisierung wird sich zukünftig auf die Eventbranche auswirken </h2>
                    <h2 style={{"fontSize":"0.6em"}}>"Wir machen die Eventbranche fit für die Digitalisieurng von Morgen." </h2>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow >
                <MDBCol lg="6" className="h1">
                  <div className="h1">
                    <h1>Was ist die Lösung?</h1>
                    <h2 style={{"fontSize":"0.6em"}}>SAAS für Veranstalter in Kombination mit einer Besucherapp zur:</h2>
                    <h2 style={{"fontSize":"0.6em"}}> - Interaktion zwischen Besucher und Event-Veranstaltung</h2>
                    <h2 style={{"fontSize":"0.6em"}}> - Optimierung bestehender Event-Veranstaltungsprozesse</h2>
                    <h2 style={{"fontSize":"0.6em"}}> - Analyse von Kundenpräferenzen durch Datenpunkte</h2>
                    </div>
                  </MDBCol>
                  <MDBCol no-gutters lg="6">
                    <img src={Phone} className="img-fluid" alt="" />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBJumbotron>
          </section>

          <section id='team'>
            <MDBJumbotron fluid className="h1">
              <MDBContainer color="elegant-color-dark">
                <Animation type="fadeIn" duration="1s" delay="0.5s" reveal>
                  <MDBRow>
                    <MDBCol size="12">
                      <h1 className="h1">Unser Team:</h1>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                    <MDBCard>
                      <img src={Christopher} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                      <MDBCardBody className="elegant-color white-text rounded-bottom">
                        <MDBCardTitle>Christopher <br/> Hilgert</MDBCardTitle>
                        <hr className="hr-light" />
                        <MDBCardText className="white-text">
                          Finanzplanung, Unternehmensorganisation
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <br/>
                </MDBCol>
                <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                  <MDBCard>
                    <img src={Emanuel} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                    <MDBCardBody className="elegant-color white-text rounded-bottom">
                      <MDBCardTitle>Emanuel <br/> Friedle</MDBCardTitle>
                      <hr className="hr-light" />
                      <MDBCardText className="white-text">
                        Backend-Development, Service Administration
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  <br/>
                </MDBCol>

                <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                  <MDBCard>
                    <img src={Florian} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                    <MDBCardBody className="elegant-color white-text rounded-bottom">
                      <MDBCardTitle>Florian <br/>Bambach</MDBCardTitle>
                      <hr className="hr-light" />
                      <MDBCardText className="white-text">
                        Marketing, Vertrieb, Partnership
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  <br/>
                </MDBCol>

                  <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                    <MDBCard>
                      <img src={Marvin} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                      <MDBCardBody className="elegant-color white-text rounded-bottom">
                        <MDBCardTitle>Marvin <br/>Denk</MDBCardTitle>
                        <hr className="hr-light" />
                        <MDBCardText className="white-text">
                          Product Development, Marketing, Design, UI/UX
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <br/>
                  </MDBCol>

                  <MDBCol size="lg" md= "12" sm ="12" className="Padding">
                    <MDBCard>
                      <img src={Marcel} width="100%" height="100%" alt="ProfilePicture"rounded responsive />
                      <MDBCardBody className="elegant-color white-text rounded-bottom">
                        <MDBCardTitle>Marcel <br/>Wepper</MDBCardTitle>
                        <hr className="hr-light" />
                        <MDBCardText className="white-text">
                          Full-Stack-Developer, Service Administration
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <br/>
                  </MDBCol>

                </MDBRow>
                </Animation>
              </MDBContainer>

              </MDBJumbotron>
              </section>

				{/*	Hier wird der Cookie und deren Parameter bestimmt	*/}
				<CookieConsent
		    location="bottom"
        buttonText=<a href="/contact" >Weitere Informationen.</a>
		    cookieName="CookieConsent"
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
		    style={{ background: "#2B373B" }}
		    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
		    expires={150}>

		    Diese Webseite benutzt Cookies, um die Benutzererfahrung zu verbessern. Indem Sie diese Website nutzen, erklären Sie sich mit dieser Verwendung einverstanden.
				</CookieConsent>
			</div>
		);
	}
}

const mapStateToProps = function(state) {
  return{
  home: state.home
}
}
export default connect()(Home);
