import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  status: {
    type: String
  },
  primaryPhysican: {
    type: String,
    optional: true
  },
  patientId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  isActive: {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  createdBy: {
    type: String,
    optional: true
  },
  pathway: {
    type: Object,
    optional: true
  },
  "pathway.type": {
    type: String, // defaultValue===spine, surgery, followup
    label: "Pathway Type"
  },
  "pathway.status": {
    type: String, // this value changes each time the physician submits a form
    label: "Current pathway status"
  },
  "pathway.history": {
    type: Array, // here we store the history of changes made to the pathway. we store the da
    label: "Pathway history",
    optional: true
  },
  "pathway.history.$": { type: Object },
  "pathway.history.$.value": {
    type: String, // the status value
    label: "Pathway history",
    optional: true
  },
  "pathway.history.$.date": {
    type: String, // date when the status changed
    label: "Pathway history",
    optional: true
  }
});
