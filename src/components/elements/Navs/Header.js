import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, 
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBAvatar, MDBFormInline } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { auth } from '../../../services/firebase';
// import Logo from '../../layout/partials/Logo';
import Image from '../../elements/Image';
import LogoSvg from '../../../assets/images/logo.svg';
import Header from "../../layout/Header";
import "./Header.css";

class HeaderX extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="seondary" dark expand="md">
        <Image
          src={LogoSvg}
          alt="Open"
          width={55}
          height={55} />

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse className="nav-bar-align" id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left className="nav-bar-items-align">
            <MDBNavItem style={{ paddingTop: "10px", paddingLeft:"30px" }} active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={{paddingTop:"10px"}}>
              <MDBNavLink to="#!">JIT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={{ paddingTop: "10px" }}>
              <MDBNavLink  to="#!">Categories</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={{ paddingTop: "10px" }}>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="github" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon icon="adjust" />
              </MDBNavLink>
            </MDBNavItem>
            
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/cart">
                <MDBIcon icon="shopping-cart" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon far icon="heart" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={{paddingRight: "30px" }}>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!"><MDBIcon far icon="user-circle" /> My Profile</MDBDropdownItem>
                  <MDBDropdownItem href="#!"><MDBIcon icon="sort" /> Orders</MDBDropdownItem>
                  <MDBDropdownItem href="#!"><MDBIcon far icon="heart" /> Wishlist</MDBDropdownItem>
                  <MDBDropdownItem onClick={() => { auth.signOut() }}><MDBIcon icon="sign-out-alt" />Sign Out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default HeaderX;