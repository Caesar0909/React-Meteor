import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Accounts } from "meteor/accounts-base";
import { Roles } from "meteor/alanning:roles";
import Invitations from "../../Invitations/Invitations";
import rateLimit from "../../../modules/rate-limit";

Meteor.methods({
  "invitations.accept": function invitationsAccept(userToCreate) {
    check(userToCreate, {
      invitationId: String,
      user: {
        email: String,
        password: Object, // Hash object using Accounts._hashPassword() on client.
        profile: Object
      }
    });

    const invitation = Invitations.findOne(userToCreate.invitationId);
    const userId = Accounts.createUser(userToCreate.user);

    if (userId) {
      Roles.addUsersToRoles(userId, invitation.role);
      Invitations.remove(userToCreate.invitationId);
    }

    return userId;
  }
});

rateLimit({
  methods: ["invitations.send"],
  limit: 5,
  timeRange: 1000
});
