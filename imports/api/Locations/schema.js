import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  type: {
    type: String,
    optional: false
  },
  name: {
    type: String,
    optional: false
  },
  code: {
    type: String,
    optional: false
  },
  partOf: {
    type: String,
    optional: true
  }
});
