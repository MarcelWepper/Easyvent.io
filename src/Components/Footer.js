import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from "react-router-dom";

import './Home.css';

export default class Footer extends React.Component {
	render(){
		return (
			<div className="Footer">
				<Container className= "grid">
					<Row>
						<Col> <i class="fab fa-paypal fa-2x"><a href="https://www.paypal.me/weppeswein" className="NavLink"> Spenden</a></i></Col>
						<Col> <i class="fab fa-instagram fa-2x"><a href="https://www.instagram.com/weppeswein/" className="NavLink"> Instagram</a></i></Col>
					</Row>
					<Row className="Footer">
							<Col> <NavLink to="/purchase" className="NavLink"> Bestellen</NavLink></Col>
							<Col> <a href="mailto:marcel@weppes.de" className="NavLink"> Mailen</a></Col>
							<Col> <NavLink to="/contact" className="NavLink"> Datenschutzhinweis</NavLink></Col>
					</Row>
				</Container>
			</div>
	  );
	}
}
