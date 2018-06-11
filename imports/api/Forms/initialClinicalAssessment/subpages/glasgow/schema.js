import SimpleSchema from "simpl-schema";

const GlasgowSchema = new SimpleSchema({
  glasgow: {
    type: Object,
    optional: true
  },

  "glasgow.eye": {
    type: Number,
    optional: true,
    label: "Glasgow Eye Opening"
  },

  "glasgow.motor": {
    type: Number,
    optional: true,
    label: "Glasgow Motor"
  },

  "glasgow.verbal": {
    type: Number,
    optional: true,
    label: "Glasgow Verbal"
    // autoform: {
    //   type: "select-radio",
    // options: function () {
    //   return [{
    //     label: "None",
    //     value: 1
    //   }, {
    //     label: "Incomprehensible",
    //     value: 2
    //   }, {
    //     label: "Inappropriate",
    //     value: 3
    //   }, {
    //     label: "Confused",
    //     value: 4
    //   }, {
    //     label: "Oriented",
    //     value: 5
    //   }];
    // }
    // }
  },
  "glasgow.score": {
    type: Number,
    label: "Score",
    optional: true
  }
});

export default GlasgowSchema;
