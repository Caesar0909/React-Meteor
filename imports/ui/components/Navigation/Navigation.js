import React from "react";
import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink
} from "reactstrap";
import PublicNavigation from "../PublicNavigation/PublicNavigation";
import AuthenticatedNavigation from "../AuthenticatedNavigation/AuthenticatedNavigation";

import "./Navigation.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header">
        <NavbarToggler
          className="btn-link toggle-sidebar hidden-lg-up pg pg-menu"
          onClick={this.toggle}
        />
        <div>
          <Navbar color="faded" light expand="md" className="header d-flex">
            <NavbarBrand className="brand inline p-2" href="/">
              FollowUp
            </NavbarBrand>
            {/* <LinkContainer
              to="/patients/new"
              className="p-2 btn btn-link text-primary m-l-20 hidden-md-down"
            >
              <NavLink href="/patients/new">New Patient</NavLink> 
            </LinkContainer>*/}
            <div className="ml-auto p-2 align-items-center">
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                {!this.props.authenticated ? (
                  <PublicNavigation {...this.props} />
                ) : (
                  <AuthenticatedNavigation {...this.props} />
                )}
              </Collapse>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}

Navigation.defaultProps = {
  name: ""
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string
};

export default Navigation;
