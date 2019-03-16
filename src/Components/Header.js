import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Home.css'
import Brand from'./Pics/brand.png';

class Header extends React.Component {


  render() {
    return (
      <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark primary-color scrolling-navbar">
          <a class="navbar-brand" href="/#">
          <img src={Brand} height="30"/> easyvent.io
          </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

  <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/#hero">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Kontakt</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
