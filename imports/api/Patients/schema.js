import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  firstName: {
    type: String
  },
  middleNames: {
    type: String,
    optional: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    label: "Email",
    optional: true
  },
  DOB: {
    type: Date,
    optional: true
  },
  csorn: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ["M", "F", "O"],
    defaultValue: "M"
  },
  identifierPHN: {
    type: String,
    optional: true
  },
  identifierMRN: {
    type: String,
    optional: true
  },
  identifierOther: {
    type: String,
    optional: true
  },
  contacts: {
    type: {
      type: Array,
      minCount: 1,
      maxCount: 2
    },
    optional: true
  },
  isActive: {
    type: Boolean,
    defaultValue: true
  },
  createdAt: {
    type: Date,
    defaultValue: new Date()
  },
  createdBy: {
    type: String,
    optional: true
  }
});
