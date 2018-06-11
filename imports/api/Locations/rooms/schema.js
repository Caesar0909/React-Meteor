import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  organization_id: {
    type: String,
    // fk to organization -- is this necessary?
    label: "Organization ID",
    optional: true
  },

  section_id: {
    type: String,
    // fk to section -- is this necessary?
    label: "Section ID",
    optional: true
  },

  type: {
    type: String,
    label: "Room Type",
    optional: true
  },
  name: {
    type: String,
    label: "Room name",
    optional: true
  },
  code: {
    type: String,
    label: "Room code",
    optional: true
  }
});
