import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './Home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class NavHome extends React.Component {

  render() {
    return (
			<MDBNavbarNav right>
				<MDBNavItem>
					<AnchorLink className="NavbarItem" offset='60' href='#home'>Home</AnchorLink>
				</MDBNavItem>
				<MDBNavItem>
					<AnchorLink  className="NavbarItem" offset='60' href='#idee'>Idee</AnchorLink>
				</MDBNavItem>
				<MDBNavItem>
					<AnchorLink className="NavbarItem" offset='60' href='#team'>Team</AnchorLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/contact">Kontakt</MDBNavLink>
				</MDBNavItem>
			</MDBNavbarNav>
    );
  }
}

export default NavHome;
