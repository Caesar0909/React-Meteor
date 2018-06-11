import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Accounts } from "meteor/accounts-base";
import { Roles } from "meteor/alanning:roles";
import { Email } from "meteor/email";
import editProfile from "./edit-profile";
import Invitations from "../../Invitations/Invitations";
import rateLimit from "../../../modules/rate-limit";

Meteor.methods({
  "users.sendVerificationEmail": function usersSendVerificationEmail() {
    return Accounts.sendVerificationEmail(this.userId);
  },
  "users.editProfile": function usersEditProfile(profile) {
    check(profile, {
      emailAddress: String,
      profile: {
        name: {
          first: String,
          last: String
        }
      }
    });

    return editProfile({ userId: this.userId, profile })
      .then(response => response)
      .catch(exception => {
        throw new Meteor.Error("500", exception);
      });
  },
  "users.changeRole": function usersChangeRole(update) {
    check(update, { _id: String, role: String });

    if (
      update._id !== this.userId &&
      Roles.userIsInRole(this.userId, ["admin", "manager"])
    ) {
      Roles.setUserRoles(update._id, update.role);
    } else {
      throw new Meteor.Error("500", "Ha! Nice try, slick.");
    }
  },
  "invitations.send": function invitationsSend(invitation) {
    check(invitation, {
      emailAddress: String,
      role: String
    });

    if (Roles.userIsInRole(this.userId, "admin")) {
      const { emailAddress } = invitation;
      const invitationExists =
        Invitations.findOne({ emailAddress }) ||
        Meteor.users.findOne({ "emails.address": emailAddress });

      if (!invitationExists) {
        const invitationId = Invitations.insert(invitation);
        Meteor.defer(() => {
          Email.send({
            to: emailAddress,
            from: "FollowUp <support@followup.ca>",
            replyTo: "support@followup.ca",
            subject: "You've been invited to use FollwUp!",
            html: `
              <p>Hi there!</p>
              <p>We'd like to invite you to join FollowUp!</p>
              <p>To claim your invitation and join us, click the link below:</p>
              <p><a href="${Meteor.absoluteUrl(
                `accept/${invitationId}`
              )}">Claim Invitation</a></p>
            `
          });
        });
      } else {
        throw new Meteor.Error(
          "500",
          `Easy, cowpoke. ${emailAddress} has already been invited.`
        );
      }
    } else {
      throw new Meteor.Error(
        "500",
        "Well, shucks! You're not allowed to do that."
      );
    }
  }
});

rateLimit({
  methods: [
    "users.sendVerificationEmail",
    "users.editProfile",
    "invitations.send"
  ],
  limit: 5,
  timeRange: 1000
});
