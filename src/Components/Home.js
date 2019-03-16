import React from 'react';
import LazyHero from 'react-lazy-hero';
import CookieConsent from "react-cookie-consent";
import {Helmet} from "react-helmet";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import { MDBJumbotron, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Hero from'./Pics/hero.jpg';
import Brand from'./Pics/brand.png';
import Marcel from'./Pics/marcel.png';
import Florian from'./Pics/florian.png';
import Christopher from'./Pics/christopher.png';
import Emanuel from'./Pics/emanuel.png';
import Marvin from'./Pics/marvin.png';


export default class Home extends React.Component {

  componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
			<div className="Home">

				{/* Hero-Image */}
        <ScrollableAnchor id={'hero'}>
				    <LazyHero color = "#000000" parallaxOffset="50" minHeight='100vh' opacity ="0.5" imageSrc={Hero} >
              <Container className= "grid">
              {/* 	Hier die trasnparente Box mit allem	*/}
              <div className= "HeroText">
                <Row>
                  <Col> <img src={Brand} width="25%" height="100%" alt="ProfilePicture"rounded responsive /></Col>
                </Row>
                <Row>
                  <Col><h1> Digitalisiere dein Event!</h1></Col>
                </Row>
                <Row>
                  <Col><h3> Seite im Aufbau...</h3></Col>
                </Row>
              </div>
            </Container>
          </LazyHero>
        </ScrollableAnchor>

        <ScrollableAnchor id={'team'}>
          <MDBJumbotron fluid >
            <MDBContainer color="elegant-color-dark">

              <MDBRow>
                <MDBCol size="12">
                  <h1 className="h1">Unser Team:</h1>
                </MDBCol>
              </MDBRow>

              <MDBRow>
              <MDBCol size="md" sm ="12">
                <MDBCard>
                  <MDBCardImage top src={Christopher} overlay="white-slight"
                    hover waves alt="MDBCard image cap" />
                  <MDBCardBody className="elegant-color white-text rounded-bottom">
                    <MDBCardTitle>Christopher Hilgert</MDBCardTitle>
                    <hr className="hr-light" />
                    <MDBCardText className="white-text">
                      Unser Man für die gute Laune.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
                <h1/> <h1/>
              </MDBCol>

              <MDBCol size="md" sm ="12">
                <MDBCard>
                  <MDBCardImage top src={Emanuel} overlay="white-slight"
                    hover waves alt="MDBCard image cap" />
                  <MDBCardBody className="elegant-color white-text rounded-bottom">
                    <MDBCardTitle>Emanuel Friedle</MDBCardTitle>
                    <hr className="hr-light" />
                    <MDBCardText className="white-text">
                      Unser Man für das Back-End.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
                <h1/> <h1/>
              </MDBCol>

              <MDBCol size="md" sm ="12">
                <MDBCard>
                  <MDBCardImage top src={Florian} overlay="white-slight"
                    hover waves alt="MDBCard image cap" />
                  <MDBCardBody className="elegant-color white-text rounded-bottom">
                    <MDBCardTitle>Florian Bambach</MDBCardTitle>
                    <hr className="hr-light" />
                    <MDBCardText className="white-text">
                      Unser Man fürs Online Marketing.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
                <h1/> <h1/>
              </MDBCol>

                <MDBCol size="md" sm ="12">
                  <MDBCard>
                    <MDBCardImage top src={Marvin} overlay="white-slight"
                      hover waves alt="MDBCard image cap" />
                    <MDBCardBody className="elegant-color white-text rounded-bottom">
                      <MDBCardTitle>Marvin   Denk</MDBCardTitle>
                      <hr className="hr-light" />
                      <MDBCardText className="white-text">
                        Unser Man für das Pitchen.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  <h1/> <h1/>
                </MDBCol>

                <MDBCol size="md" sm ="12">
                  <MDBCard>
                    <MDBCardImage top src={Marcel} overlay="white-slight"
                      hover waves alt="MDBCard image cap" />
                    <MDBCardBody className="elegant-color white-text rounded-bottom">
                      <MDBCardTitle>Marcel Wepper</MDBCardTitle>
                      <hr className="hr-light" />
                      <MDBCardText className="white-text">
                        Unser Man für das Front-End.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  <h1/> <h1/>
                </MDBCol>

              </MDBRow>
            </MDBContainer>
          </MDBJumbotron>
        </ScrollableAnchor>


        <ScrollableAnchor id={'team'}>
          <MDBJumbotron fluid className="h1">
            <MDBContainer color="elegant-color-dark">

              <MDBRow>
                <MDBCol size="12">
                  <h1>Unsere Idee:</h1>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol size="12">
                  <h1>Folgt noch...</h1>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBJumbotron>
        </ScrollableAnchor>

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
