import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import { withTracker } from "meteor/react-meteor-data";

const SendInvitationModal = ({ show, onClose, onSubmit, applicationRoles }) => (
  <div className="SendInvitationModal">
    <Modal isOpen={show} toggle={onClose}>
      <ModalHeader toggle={onClose}>Send an Invitation</ModalHeader>
      <Form onSubmit={onSubmit}>
        <ModalBody>
          <FormGroup>
            <Label>Email Address</Label>
            <input
              type="email"
              name="emailAddress"
              className="form-control"
              placeholder="doug@funnie.com"
            />
          </FormGroup>
          <Label>Role</Label>
          <select className="form-control" name="role">
            {applicationRoles.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Nevermind</Button>
          <Button type="submit" color="success">
            Send Invitation
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  </div>
);

SendInvitationModal.defaultProps = {
  show: true
};

SendInvitationModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  applicationRoles: PropTypes.array.isRequired
};

export default withTracker(() => {
  const subscription = Meteor.subscribe("users.roles");

  return {
    loading: !subscription,
    applicationRoles: Roles.getAllRoles().fetch()
  };
})(SendInvitationModal);
