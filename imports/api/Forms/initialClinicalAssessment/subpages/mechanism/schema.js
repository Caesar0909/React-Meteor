import SimpleSchema from "simpl-schema";

const MechanismSchema = new SimpleSchema({
  mechanism: {
    type: Object,
    label: "mechanism",
    optional: true
  },
  "mechanism.value": {
    type: Number,
    optional: false,
    label: "Mechanism"
  },
  "mechanism.energy": {
    type: Number,
    optional: false,
    label: "What energy was associated with the injury?"
  }
});

export default MechanismSchema;
