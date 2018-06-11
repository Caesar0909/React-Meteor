export const schemaDataMechanism = {
  "mechanism.value": {
    label: "Score",
    options: [
      {
        label: "Fall",
        value: 1
      },
      {
        label: "Object falling on patient",
        value: 2
      },
      {
        label: "High speed MVA >100km",
        value: 3
      },
      {
        label: "Low speed MVA (City speeds)",
        value: 4
      },
      {
        label: "Bicycle",
        value: 5
      },
      {
        label: "Skiing/ snowboarding",
        value: 6
      },
      {
        label: "Snowmobile",
        value: 7
      },
      {
        label: "Other sports",
        value: 8
      },
      {
        label: "ATV",
        value: 9
      },
      {
        label: "Pedestrian",
        value: 10
      },
      {
        label: "Blunt assault",
        value: 11
      },
      {
        label: "Penetrating assault",
        value: 12
      },
      {
        label: "Unknown",
        value: 13
      },
      {
        label: "Transport",
        value: 14
      },
      {
        label: "Other",
        value: 15
      }
    ]
  },
  "mechanism.energy": {
    label: "Energy",
    options: [
      {
        label: "High",
        value: 1
      },
      {
        label: "Low",
        value: 2
      },
      {
        label: "Unknown",
        value: 3
      }
    ]
  }
};

export const validatorMechanism = ({ model, details }) => {
  if (model.mechanism && model.mechanism.value && !model.mechanism.energy) {
    details.push({
      name: "mechanism.energy",
      message: "What energy was associated with the injury?"
    });
  }
};

export default schemaDataMechanism;
