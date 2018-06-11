import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  pathology: {
    type: Object,
    label: "Pathology",
    optional: true
  },
  "pathology.principal": {
    type: String,
    label: "Principal diagnosis",
    optional: true
  },
  "pathology.principal.authorId": {
    type: String,
    label: "Id",
    optional: true
  },
  "pathology.principal.author": {
    type: String,
    label: "Author name",
    optional: true
  },
  "pathology.secondary": {
    type: String,
    label: "Secondary diagnosis",
    optional: true
  },
  surgery: {
    type: Object,
    optional: true
  },
  "surgery.isRequired": {
    type: Boolean,
    label: "Requires surgery?",
    optional: true
  },
  "surgery.planned": {
    type: Date,
    label: "Planned surgery date",
    optional: true
  },
  "surgery.updatedBy": {
    type: String, // FK to the userId who sets the planned surgery date
    optional: true
  },
  "surgery.planned.history.$": {
    type: Array, // this is an array that stores all the
    label: "Planned surgery history",
    optional: true
  },
  "surgery.planned.history.$.date": {
    type: Date,
    label: "Planned surgery history",
    optional: true
  },
  "surgery.planned.history.$.updatedBy": {
    type: String, //FK to the userId who updated the planned surgery date
    label: "Updated by",
    optional: true
  },
  "surgery.date": {
    type: Date,
    label: "Surgical date",
    optional: true
  }
});
