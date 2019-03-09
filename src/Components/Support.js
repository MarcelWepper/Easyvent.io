import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import Rotate from 'react-reveal/Rotate';
import { MDBView} from "mdbreact";

import './Home.css';
import Picture from'./Pics/Apfelernte.jpg';
import Friedle from'./Pics/FamFriedle.jpg';
import Rene from'./Pics/Rene.jpg';
import FounderChrisMichael from'./Pics/FounderChrisMichael.jpg';
import FounderFlorian from'./Pics/FounderFlorian.jpg';


export default class Support extends React.Component {

	componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
  		<div>
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}/>

				<div className="H1-Titel">
					<h1> Meine Unterstützer </h1><br/>
          <h2> ohne diese es Weppes nicht geben würde.</h2>
				</div>

				<div className="Jumbotron">
          <Jumbotron fluid className="Jumbotron">
						<h1> Die Apfelpfleger </h1>
					</Jumbotron>
				</div>

				<Row noGutters="true" className="Sup1">
					<Col lg={{ size:6, order: 1}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
						<div className="CardBlock">
						<h3> Familie Friedle</h3>
								Wir wollten Marcel bei seinem Projekt von Anfang an unterstützen. Da wir sowieso zu viele Äpfel hatten, war dies kein Problem, welche abzugeben.
						</div>
					</Col>
					<Col lg={{ size:6, order: 2}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}} >
						<Card>
              <Rotate top left>
                <MDBView waves>
                  <img src={Friedle} className="img-fluid" alt="" />
                </MDBView>
              </Rotate>
						</Card>
					</Col>
				</Row>

				<div className="Jumbotron">
          <Jumbotron fluid className="Jumbotron">
						<h1> Meine Unterstützer </h1>
					</Jumbotron>
				</div>

				<Row noGutters="true" className="Sup2">
					<Col lg={{ size:7, order: 2}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
						<div className="CardBlock">
						<h3> Rene Bettrich</h3>
								Ich war von Anfang an Feuer und Flamme für das Projekt von Marcel. <br/>
								Dabei schmecken seine Weppes auch noch super gut!
						</div>
					</Col>
					<Col lg={{ size:5, order: 1}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}} >
						<Card>
              <Rotate top left>
                <MDBView waves>
                  <img src={Rene} className="img-fluid" alt="" />
                </MDBView>
              </Rotate>
						</Card>
					</Col>
				</Row>

				<Row noGutters="true" className="Sup1">
					<Col lg={{ size:5, order: 1}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
						<div className="CardBlock ">
						<h3> Florian</h3>
								Die Weppes sind einfach lecker. Die versprochenen Umdrehungen kamen auch schnell! <br/>Auf meine Gläser warte ich aber immernoch!
						</div>
					</Col>
					<Col lg={{ size:7, order: 2}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}} >
						<Card>
              <Rotate top left>
                <MDBView waves>
                  <img src={FounderFlorian} className="img-fluid" alt="" />
                </MDBView>
              </Rotate>
						</Card>
					</Col>
				</Row>

				<Row noGutters="true" className="Sup2">
					<Col lg={{ size:7, order: 2}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
						<div className="CardBlock">
						<h3> Michael und Chris</h3>
								Ich stehe voll auf natürliches! Da kamen mir die Weppes gerade Recht, um den Frust der Klausuren abzufeiern. - <b>Michael</b> <br/> <br/>
								Zwar trinke ich nicht so oft Alkohol, die Weppes durfte ich mir aber nicht entgehen lassen. - <b>Chris</b> <br/>
						</div>
					</Col>
					<Col lg={{ size:5, order: 1}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}} >
						<Card>
              <Rotate top left>
                <MDBView waves>
                  <img src={FounderChrisMichael} className="img-fluid" alt="" />
                </MDBView>
              </Rotate>
						</Card>
					</Col>
				</Row>


  		</div>
		);
	}
}
