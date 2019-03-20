import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './Home.css';

class NavContact extends React.Component {

  render() {
    return (
			<MDBNavbarNav right>
				<MDBNavItem>
					<MDBNavLink to="/">Home</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="#">Kontakt</MDBNavLink>
				</MDBNavItem>
			</MDBNavbarNav>
    );
  }
}

export default NavContact;
