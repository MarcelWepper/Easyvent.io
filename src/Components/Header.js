import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './Home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Brand from'./Pics/brand.png';
import NavHome from "./NavHome.js";
import NavNotHome from "./NavHome.js";
import { connect } from 'react-redux';

class Header extends React.Component {

  render(){

    const isHome = this.props.home;
    return (
      <div>
        {isHome ? (<NavHome/>):(<NavNotHome/>)}
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
