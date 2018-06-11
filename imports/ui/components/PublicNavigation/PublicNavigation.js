import React from "react";
import PropTypes from "prop-types";
import { Collapse, Nav, NavItem, NavLink } from "reactstrap";

const PublicNavigation = props => (
  <Collapse isOpen={props.isOpen} navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/signup">Sign Up</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/login">Log In</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
);

PublicNavigation.defaultProps = {
  isOpen: false
};
PublicNavigation.propTypes = {
  isOpen: PropTypes.bool
};

export default PublicNavigation;
