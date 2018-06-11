export const schemaDataGlasgow = {
  "glasgow.score": {
    label: "Score"
  },
  "glasgow.eye": {
    label: "Eye Opening",
    options: [
      {
        label: "None",
        value: 1
      },
      {
        label: "To Pain",
        value: 2
      },
      {
        label: "To Speech",
        value: 3
      },
      {
        label: "Spontaneous",
        value: 4
      }
    ]
  },
  "glasgow.motor": {
    label: "Motor",
    options: [
      {
        label: "None",
        value: 1
      },
      {
        label: "Extensor",
        value: 2
      },
      {
        label: "Flexion",
        value: 3
      },
      {
        label: "Withdraws to pain",
        value: 4
      },
      {
        label: "Localizes pain",
        value: 5
      },
      {
        label: "Obeys",
        value: 6
      }
    ]
  },
  "glasgow.verbal": {
    type: Number,
    optional: false,
    label: "Verbal",
    options: [
      {
        label: "None",
        value: 1
      },
      {
        label: "Incomprehensible",
        value: 2
      },
      {
        label: "Inappropriate",
        value: 3
      },
      {
        label: "Confused",
        value: 4
      },
      {
        label: "Oriented",
        value: 5
      }
    ]
  }
};

export const validatorGlasgow = ({ model, details }) => {
  if (model.glasgow && !model.glasgow.eye) {
    details.push({
      name: "glasgow.eye",
      message: "Eye Opening is required"
    });
  }
  // if (model.glasgow && !model.glasgow.verbal) {
  //   details.push({
  //     name: "glasgow.verbal",
  //     message: "Verbal is required"
  //   });
  // }
};

export default schemaDataGlasgow;
