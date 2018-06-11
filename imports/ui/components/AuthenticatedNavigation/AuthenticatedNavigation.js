import React from "react";
import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import {
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  DropdownItem
} from "reactstrap";

const AuthenticatedNavigation = props => (
  <div>
    <Collapse isOpen={props.isOpen} navbar>
      <Nav className="d-flex align-items-center" navbar>
        <UncontrolledDropdown nav>
          <DropdownToggle nav caret>
            {props.name}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <LinkContainer to="/profile">
                <NavLink href="/profile">Profile</NavLink>
              </LinkContainer>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <LinkContainer to="/logout">
                <NavLink href="/logout">Logout</NavLink>
              </LinkContainer>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </div>
);

AuthenticatedNavigation.defaultProps = {
  isOpen: false,
  name: ""
};

AuthenticatedNavigation.propTypes = {
  name: PropTypes.string,
  isOpen: PropTypes.bool
};

export default AuthenticatedNavigation;
