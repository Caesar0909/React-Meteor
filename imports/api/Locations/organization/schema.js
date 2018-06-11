import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  type: {
    type: String,
    label: "Organization Type",
    optional: true
    // types: organization, facility, room
  },
  name: {
    type: String,
    label: "Organization name",
    optional: true
  },
  code: {
    type: String,
    label: "Organization code",
    optional: true
  }
});
