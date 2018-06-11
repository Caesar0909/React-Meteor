import React, { Component } from "react";
import { pure, compose } from "recompose";
import { Accounts } from 'meteor/accounts-base'
import PropTypes from "prop-types";

import { graphql } from "react-apollo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    console.log (Meteor.user());
    this.state = {
      firstname: Meteor.user().profile.name.first,
      lastname: Meteor.user().profile.name.last,
    };
  }

  onSubmit(evt) {
    let fname = this.fnameInst.value;
    let lname = this.lnameInst.value;
    let oldpwd = this.oldpwdInst.value;
    let newpwd = this.newpwdInst.value;
    let curuserid = Meteor.user()._id;
    Meteor.users.update({_id: curuserid}, {$set: {'profile.name':{first: fname, last: lname}}});
    if (oldpwd) {
      console.log (Accounts);
      Accounts.changePassword(oldpwd, newpwd, function (ret) {
        console.log (ret);
      });
    }
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }
  render() {
    const state = this.state;

    console.log (state);
    return (
      <div className="card card-transparent container-fluid">
        <div className="card-header ">
          <div className="card-title">
            Edit Your Profile Page
          </div>
        </div>
        <div className="card-block">

          <form className="" role="form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group form-group-default required">
                  <label>First name</label>
                  <input type="text" className="form-control" ref={(inst) => {this.fnameInst = inst}} defaultValue={state.firstname} required/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-default">
                  <label>Last name</label>
                  <input type="text" className="form-control" ref={(inst) => {this.lnameInst = inst}} defaultValue={state.lastname} required/>
                </div>
              </div>
            </div>
            <div className="form-group form-group-default required">
              <label>Old Password</label>
              <input type="password" className="form-control" ref={(inst) => {this.oldpwdInst = inst}} required/>
            </div>
            <div className="form-group form-group-default required">
              <label>New Password</label>
              <input type="password" className="form-control" ref={(inst) => {this.newpwdInst = inst}} required/>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-cons m-b-10" type="button" onClick={this.onSubmit}>
                <i className="pg-form"></i>
                <span className="bold">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default compose(pure)(Profile);
