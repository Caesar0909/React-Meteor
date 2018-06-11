import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  isActive: {
    type: Boolean,
    label: "isActive", // set to false once the 'form' status ===completed
    optional: true
  },
  type: {
    type: String,
    optional: true,
    label: "Questionnaire type" // physician || patient
  },
  careplanId: {
    type: String,
    label: "Careplan ID", // fk to the careplan ID
    optional: true
  },
  formId: {
    type: String,
    optional: true
  },
  owner: {
    type: String,
    optional: true,
    label: "Owner" // FK of the UserID who is ultimately responsible for the contents of the form
  },
  assignedTo: {
    type: String,
    optional: true,
    label: "Assigned to"
  },
  patientId: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: false
  },
  dueDate: {
    type: Date,
    optional: true,
    label: "Due date"
  },
  name: {
    type: String,
    optional: true,
    label: "Questionnaire name"
  },
  status: {
    type: String,
    optional: true,
    label: "Questionnaire status" // planned, in-progress, completed,
  },
  history: {
    type: Array,
    label: "Change log",
    optional: true
  },
  "history.$.updatedBy.id": {
    type: String, // fk to the user who
    label: "Updated by",
    optional: true
  },
  "history.$.updatedBy.name": {
    type: String, // name of the user who made the update
    label: "Updated by",
    optional: true
  },
  "history.$.date": {
    type: Date, // date when the record was updated
    label: "Date",
    optional: true
  }
});
