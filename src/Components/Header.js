import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './Home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Brand from'./Pics/brand.png';
import NavHome from "./NavHome.js";
import NavNotHome from "./NavNotHome.js";
import { connect } from 'react-redux';

class Header extends React.Component {

  render(){

    return (
      <div>
      {
        {
          'home': <NavHome/>,
          'nothome': <NavNotHome/>
        }[this.props.home]
      }
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return{
  home: state.home
}
}

export default connect(mapStateToProps)(Header);
