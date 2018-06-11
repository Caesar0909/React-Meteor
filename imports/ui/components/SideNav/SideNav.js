import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./SideNav.scss";

class SideNav extends React.Component {
  getSideBar() {
    return (
      <nav className="page-sidebar" data-pages="sidebar">
        <div className="sidebar-header">FollowUp</div>
        <div className="sidebar-menu">
          <div className="scroll-wrapper menu-items">
            <Nav
              vertical
              className="menu-items scroll-content scroll-scrolly_visible"
            >
              <NavItem eventkey={1} className="m-t-30">
                <NavLink to="/dashboard" className="detailed p-t-0 p-b-0">
                  <span>Dashboard</span>
                  <span className="details">12 New Updates</span>
                </NavLink>
              </NavItem>
              <NavItem eventkey={2}>
                <NavLink to="/appointments" className="detailed p-t-0 p-b-0">
                  <span>Appointments</span>
                </NavLink>
              </NavItem>
              <NavItem eventkey={2}>
                <NavLink to="/admissions" className="detailed p-t-0 p-b-0">
                  <span>Admissions</span>
                </NavLink>
              </NavItem>
              <NavItem eventkey={3}>
                <NavLink to="/careplans" className="detailed p-t-0 p-b-0">
                  <span>Careplans</span>
                </NavLink>
              </NavItem>
              <NavItem eventkey={4}>
                <NavLink to="/clinicalForms" className="detailed p-t-0 p-b-0">
                  <span>Clinical forms</span>
                </NavLink>
              </NavItem>
              <NavItem eventkey={5}>
                <NavLink to="/patients" className="detailed p-t-0 p-b-0 ">
                  <span>Patients</span>
                </NavLink>
              </NavItem>
              {this.props.userIsAdmin ? (
                <NavItem eventtkey={6}>
                  <NavLink to="/users" className="detailed">
                    <span>Users</span>
                  </NavLink>
                </NavItem>
              ) : (
                false
              )}
            </Nav>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    return this.props.authenticated ? (
      <div style={{ overflow: "" }} id="wrapper">
        {this.getSideBar()}
      </div>
    ) : (
      false
    );
  }
}

export default SideNav;
