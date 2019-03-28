import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './Home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Brand from'./Pics/brand.png';

class NavLocation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);


  }


  componentDidMount(){
    if (this.state.collapse) {
        this.setState({
        collapse:true
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
        <MDBNavbar color="elegant-color-dark" expand="md" fixed="top" scrolling dark>
        <MDBNavbarBrand href="/#">
          <img src={Brand} height="48px" width="48px" alt="" /><strong>easyvent.io</strong>
        </MDBNavbarBrand>
        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/location/tab-worms" >Location</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/location/tab-worms/food" >Food</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/location/tab-worms/drinks" >Drinks</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/" >Verlassen</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default NavLocation;
