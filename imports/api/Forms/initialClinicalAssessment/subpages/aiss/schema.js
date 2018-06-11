import SimpleSchema from "simpl-schema";

const AISSSchema = new SimpleSchema({
  aiss: {
    type: Object,
    optional: true
  },
  "aiss.required": {
    type: Boolean,
    label: "Is this a single system injury?",
    optional: true
  },
  "aiss.score": {
    type: Number,
    label: "Score",
    optional: true
  },
  "aiss.head": {
    type: Number,
    optional: true,
    label: "Head"
    // autoform: {
    //   type: "select-radio",
    //   label: "Head",
    // options: function () {
    //   return [{
    //     label: "Minor",
    //     value: 1
    //   }, {
    //     label: "Moderate",
    //     value: 2
    //   }, {
    //     label: "Serious",
    //     value: 3
    //   }, {
    //     label: "Severe",
    //     value: 4
    //   }, {
    //     label: "Critical",
    //     value: 5
    //   }, {
    //     label: "Unsurvivable",
    //     value: 6
    //   }];
    // }
    //}
  },
  "aiss.face": {
    type: Number,
    optional: true,
    label: "Face"
    // autoform: {
    //   type: "select-radio",
    //   label: "Face",
    // options: function () {
    //   return [{
    //     label: "Minor",
    //     value: 1
    //   }, {
    //     label: "Moderate",
    //     value: 2
    //   }, {
    //     label: "Serious",
    //     value: 3
    //   }, {
    //     label: "Severe",
    //     value: 4
    //   }, {
    //     label: "Critical",
    //     value: 5
    //   }, {
    //     label: "Unsurvivable",
    //     value: 6
    //   }];
    // }
    //}
  },
  "aiss.chest": {
    type: Number,
    optional: true,
    label: "Chest"
    // autoform: {
    //   type: "select-radio",
    //   label: "Chest",
    // options: function () {
    //   return [{
    //     label: "Minor",
    //     value: 1
    //   }, {
    //     label: "Moderate",
    //     value: 2
    //   }, {
    //     label: "Serious",
    //     value: 3
    //   }, {
    //     label: "Severe",
    //     value: 4
    //   }, {
    //     label: "Critical",
    //     value: 5
    //   }, {
    //     label: "Unsurvivable",
    //     value: 6
    //   }];
    // }
    //}
  },
  "aiss.abdomen": {
    type: Number,
    optional: true,
    label: "Abdomen"
    // autoform: {
    //   type: "select-radio",
    //   label: "Abdomen",
    // options: function () {
    //   return [{
    //     label: "Minor",
    //     value: 1
    //   }, {
    //     label: "Moderate",
    //     value: 2
    //   }, {
    //     label: "Serious",
    //     value: 3
    //   }, {
    //     label: "Severe",
    //     value: 4
    //   }, {
    //     label: "Critical",
    //     value: 5
    //   }, {
    //     label: "Unsurvivable",
    //     value: 6
    //   }];
    // }
    //}
  },

  "aiss.extremity": {
    type: Number,
    optional: true,
    label: "Extremity"
    // autoform: {
    //   type: "select-radio",
    //   label: "Extremity",
    // options: function () {
    //   return [{
    //     label: "Minor",
    //     value: 1
    //   }, {
    //     label: "Moderate",
    //     value: 2
    //   }, {
    //     label: "Serious",
    //     value: 3
    //   }, {
    //     label: "Severe",
    //     value: 4
    //   }, {
    //     label: "Critical",
    //     value: 5
    //   }, {
    //     label: "Unsurvivable",
    //     value: 6
    //   }];
    // }
    //}
  },

  "aiss.external": {
    type: Number,
    optional: true,
    label: "External"
    // autoform: {
    //   type: "select-radio",
    //   label: "External",
    // options: function () {
    //   return [{
    //     label: "Minor",
    //     value: 1
    //   }, {
    //     label: "Moderate",
    //     value: 2
    //   }, {
    //     label: "Serious",
    //     value: 3
    //   }, {
    //     label: "Severe",
    //     value: 4
    //   }, {
    //     label: "Critical",
    //     value: 5
    //   }, {
    //     label: "Unsurvivable",
    //     value: 6
    //   }];
    // }
    //}
  }
});

export default AISSSchema;
