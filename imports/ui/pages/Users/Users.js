import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table, Button, Label } from "reactstrap";
import { Bert } from "meteor/themeteorchef:bert";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Loading from "../../components/Loading/Loading";
import { SelectField } from "../../components/Input";

import "./Users.scss";
import Invitations from "./Invitations/Invitations";

class Users extends React.Component {
  checkIfCurrentUser(mappedUserId, currentUserId) {
    return mappedUserId === currentUserId;
  }

  handleChangeRole(_id, role) {
    Meteor.call("users.changeRole", { _id, role }, error => {
      if (error) {
        Bert.alert(error.reason, "danger");
      } else {
        Bert.alert("Role updated!", "success");
      }
    });
  }

  render() {
    const {
      loading,
      users,
      user,
      match,
      history,
      applicationRoles
    } = this.props;
    return !loading ? (
      <div className="Users">
        <div className="page-header clearfix">
          <h4 className="pull-left">Users</h4>
          <Link className="btn btn-success pull-right" to={`${match.url}/new`}>
            Add User
          </Link>
        </div>
        {users.length ? (
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {users.map(({ _id, profile, emails, roles }) => {
                const isCurrentUser = this.checkIfCurrentUser(_id, user._id);
                return (
                  <tr key={_id}>
                    <td>
                      {isCurrentUser ? (
                        <span className="label success">You!</span>
                      ) : (
                        ""
                      )}
                      {profile.name.first} {profile.name.last}
                    </td>
                    <td>{emails[0].address}</td>
                    <td>
                      <select
                        className="Select-control"
                        value={roles[0]}
                        disabled={isCurrentUser}
                        onChange={event => {
                          this.handleChangeRole(_id, event.target.value);
                        }}
                      >
                        {applicationRoles.map(({ name }) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <Button
                        color="primary"
                        onClick={() => history.push(`${match.url}/${_id}`)}
                      >
                        View
                      </Button>
                    </td>
                    <td>
                      <Button color="danger">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          ""
        )}
        <Invitations />
      </div>
    ) : (
      <Loading />
    );
  }
}

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.object.isRequired,
  applicationRoles: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withTracker(() => {
  const subscription = Meteor.subscribe("users");
  return {
    loading: !subscription.ready(),
    users: Meteor.users.find().fetch()
  };
})(Users);
