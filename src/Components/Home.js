import React from 'react';
import LazyHero from 'react-lazy-hero';
import CookieConsent from "react-cookie-consent";
import {Helmet} from "react-helmet";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import { MDBJumbotron, MDBContainer } from "mdbreact";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Hero from'./Pics/hero.jpg';
import Brand from'./Pics/brand.png';


export default class Home extends React.Component {

  componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
			<div>

				{/* Hero-Image */}
        <ScrollableAnchor id={'hero'}>
				    <LazyHero color = "#000000" parallaxOffset="50" minHeight='100vh' opacity ="0.5" imageSrc={Hero}>
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
            <MDBContainer>
              <h2 className="display-4">Unser Team</h2>
              <p className="lead">Hier wirst du bald unser Team sehen.</p>
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
