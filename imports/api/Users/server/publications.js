import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import Invitations from "../../../api/Invitations/Invitations";

Meteor.publish("users.editProfile", function usersProfile() {
  return Meteor.users.find(this.userId, {
    fields: {
      emails: 1,
      profile: 1,
      services: 1
    }
  });
});

Meteor.publish("users", function users() {
  if (Roles.userIsInRole(this.userId, ["admin", "manager"])) {
    return [Meteor.users.find({}), Roles.getAllRoles(), Invitations.find({})];
  }
  return this.ready();
});
