import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  status: {
    type: String,
    label: "Team status",
    optional: true
  },
  name: {
    type: String,
    label: "Team name",
    optional: true
  },
  isActive: {
    type: Boolean,
    label: "Is active",
    optional: true
  },
  start: {
    type: Date,
    label: "Team start date",
    optional: true
  },
  end: {
    type: Date,
    label: "Team End date", // once this is set, set isActive to false.
    optional: true
  },
  participant: {
    type: Array,
    label: "Participant",
    optional: true
  },
  "participant.id": {
    type: String,
    label: "Participant ID", // foreign key to userID.
    optional: true
  },
  "participant.role": {
    type: String,
    label: "Role", //doctor, nurse etc.
    optional: true
  },
  "participant.specialty": {
    type: String,
    label: "Specialty", // speciality type, by default === neurosurgery
    optional: true
  },
  "participant.name": {
    type: String,
    label: "Name",
    optional: true
  },
  "participant.start": {
    type: Date,
    label: "Start", // when the participant joined the team
    optional: true
  },
  "participant.end": {
    type: Date,
    label: "End", // when the participant left the team. If blank and
    optional: true
  }
});
