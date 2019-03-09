import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Card, Row, Col } from 'reactstrap';
import Rotate from 'react-reveal/Rotate';
import { MDBView} from "mdbreact";

import './Home.css';
import Picture from'./Pics/Weppes_Reihe.jpg';
import Founder from './Pics/Weppes_Weiß.jpg';
import Fass from './Pics/FlascheFass.jpg';
import Cider from './Pics/WeppesCider.jpg';

export default class Weppes extends React.Component {

	componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
  		<div className="CardsFull">

      {/* H1 Titeltextseite*/}
      {/* NoGutters bewirkt, dass kein Abstand zwischen den Feldern vorhanden ist, somit edge to edge*/}
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}/>

				<Row noGutters="true" className="Sup2">
					<Col lg={{ size:12, order: 1}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
						<div className="CardBlock">
						<h3> Founder Box</h3>
								Für alle, die das Projekt Weppes unterstützen wollen, gibt es die Möglichkeit, eine Weppes Founder Box zu erhalten!<br/>														Enthalten sind 6 Flaschen á 0.5L, kleine Goodies und das schöne Gefühl, etwas tolles von Anfang an zu unterstützen!<br/>Wenn du Interesse hast, schreibe mir eine Mail! <br/>Die Founder Box kann Individuell mit den unten stehenden Weppes zusammengestellt werden.
                (Keine Gläser enthalten.)
						</div>
					</Col>
					<Col lg={{ size:12, order: 2}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}} >
						<Card>
              <Rotate top left>
                <MDBView waves>
                  <img src={Founder} className="img-fluid" alt="" />
                </MDBView>
              </Rotate>
						</Card>
					</Col>
				</Row>
        <Row noGutters="true" className="Sup1">
  				<Col lg={{ size:6, order: 1}} md={{size:12, order:1}} sm={{size:12, order:2}} xs={{size:12, order:2}}>
  					<Card >
              <Rotate top right>
                <MDBView waves>
                  <img src={Fass} className="img-fluid" alt="" />
                </MDBView>
              </Rotate>
  					</Card>
  				</Col>
  				<Col lg={{ size:6, order: 2}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
  					<div className="CardBlock">
  						<h3> Der Apfelwein / De Äppelwoi</h3>

  						Womit alles gestartet hat, der Apfelwein. <br/>
              Aus einem Experiment wurde der Weppes.
  						Naturtrüb, Handerlesen und regional Angebaut,
  						ist dieser so umweltschonend wie möglich hergestellt worden. Ohne künstlichen Zusätze, für veganen Verzehr geeignet, ist er mit großer Rücksicht für die Natur und Umwelt enstanden. Er ist die Grundlage für alle anderen, auf den Apfelwein basierenden Getränke, wie zum Beispiel: <br/>
  						•	Der Weppes Cider <br/>
  						•	Der Weppes Glühapfelwein mit Zimt & Zucker <br/>
            </div>
						</Col>
					</Row>
          <Row noGutters="true" className="Sup2">
  					<Col lg={{ size:6, order: 1}} md={{size:12, order:1}} sm={{size:12, order:1}} xs={{size:12, order:1}}>
  						<div className="CardBlock">
  						<h3> Der Cider</h3>

              Der Weppes - Cider, nach englischem Vorbild, verbindet den Apfelwein mit einem frischen, spritzigen Geschmack.<br/>
              Der Cider wird aus dem Weppes - Apfelwein und einem Zusatz an Kohlensäure erzeugt.

  						</div>
  					</Col>
  					<Col lg={{ size:6, order: 2}} md={{size:12, order:2}} sm={{size:12, order:2}} xs={{size:12, order:2}}>
  						<Card >
                <Rotate top left>
                  <MDBView waves>
                    <img src={Cider} className="img-fluid" alt="" />
                  </MDBView>
                </Rotate>
  						</Card>
  					</Col>
  				</Row>
  		</div>
		);
	}
}
