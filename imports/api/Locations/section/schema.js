import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  organization_id: {
    // fk to organization
    type: String,
    label: "Organization Name",
    optional: true
  },
  name: {
    type: String,
    label: "Section name",
    optional: true
  },
  code: {
    type: String,
    label: "Section code",
    optional: true
  }
});
