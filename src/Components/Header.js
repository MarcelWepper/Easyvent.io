import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

import './Home.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidUpdate(){
    if (this.state.collapse) {
      this.setState({
      collapse:false
      });

    }

  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
            <MDBNavbar color="bg-dark" fixed="top" dark expand="md" scrolling>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarBrand href="/">
                <strong>Weppes</strong>
              </MDBNavbarBrand>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/philosophie">Philosophie</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/weppes">Die Weppes</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/purchase">Bestellen</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/support">Die Unterstützer</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/contact">Kontakt</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
      </div>
    );
  }
}

export default Header;
