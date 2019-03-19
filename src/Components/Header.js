import React from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './Home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Brand from'./Pics/brand.png';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
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
      collapse: !this.state.collapse,
    });
  }


  render() {
    return (
      <div>
        <MDBNavbar color="elegant-color-dark" expand="md" fixed="top" scrolling transparent dark>
        <MDBNavbarBrand href="/">
          <img src={Brand} height="48px" width="48px" alt="" /><strong>easyvent.io</strong>
        </MDBNavbarBrand>
        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <AnchorLink offset='60' href='#home'>Home</AnchorLink>
            </MDBNavItem>
            <MDBNavItem>
              <AnchorLink offset='60' href='#team'>Team</AnchorLink>
            </MDBNavItem>
            <MDBNavItem>
              <AnchorLink offset='60' href='#idee'>Idee</AnchorLink>
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
