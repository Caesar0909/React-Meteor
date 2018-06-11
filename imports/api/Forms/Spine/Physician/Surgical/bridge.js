import GraphQLBridge from "uniforms/GraphQLBridge";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers, typeDefs } from "../../../../graphqlDefinitions";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const clinicalLevelOptions = [
  {
    label: "Not accessible",
    value: "N/A"
  },
  {
    label: "C0",
    value: "C0"
  },
  {
    label: "C1",
    value: "C1"
  },
  {
    label: "C2",
    value: "C2"
  },
  {
    label: "C3",
    value: "C3"
  },
  {
    label: "C4",
    value: "C4"
  },
  {
    label: "C5",
    value: "C5"
  },
  {
    label: "C6",
    value: "C6"
  },
  {
    label: "C7",
    value: "C7"
  },
  {
    label: "T1",
    value: "T1"
  },
  {
    label: "T2",
    value: "T2"
  },
  {
    label: "T3",
    value: "T3"
  },
  {
    label: "T4",
    value: "T4"
  },
  {
    label: "T5",
    value: "T5"
  },
  {
    label: "T6",
    value: "T6"
  },
  {
    label: "T7",
    value: "T7"
  },
  {
    label: "T8",
    value: "T8"
  },
  {
    label: "T9",
    value: "T89"
  },
  {
    label: "T10",
    value: "T10"
  },
  {
    label: "T11",
    value: "T11"
  },
  {
    label: "T12",
    value: "T12"
  },
  {
    label: "L1",
    value: "L1"
  },
  {
    label: "L2",
    value: "L2"
  },
  {
    label: "L3",
    value: "L3"
  },
  {
    label: "L4",
    value: "L4"
  },
  {
    label: "L5",
    value: "L5"
  },
  {
    label: "S1",
    value: "S1"
  },
  {
    label: "S2",
    value: "S2"
  },
  {
    label: "S3",
    value: "S3"
  },
  {
    label: "S4",
    value: "S4"
  },
  {
    label: "Coccyx",
    value: "Coccyx"
  },
  {
    label: "SI Joint",
    value: "SI Joint"
  }
];

const schemaData = {
  DateInitialReferral: {
    label: "Initial referral date"
  },
  surg_proc_asascore: {
    label: "ASA Classification"
  },
  surg_proc_surg_dt: {
    label: "Date of surgery"
  },
  surg_proc_optimestart: {
    label: "Operating Time - Skin to Skin Start Time"
  },
  surg_proc_optimeend: {
    label: "Operating Time - Skin to Skin End Time"
  },
  surg_proc_estimatedbloodloss: {
    label: "Blood Loss (mL)"
  },
  surg_proc_injury_dt: {
    label: "Date and Time of Injury"
  },
  surg_proc_decomp_dt: {
    label: "Date of Decompression (SCI patients)"
  },
  surg_proc_vertebral: {
    label: "Vertebral procedure(s) performed",
    options: [
      {
        label: "Excision",
        value: "1"
      },
      {
        label: "Decompression",
        value: "2"
      },
      {
        label: "Fixation / Fusion",
        value: "3"
      },
      {
        label: "I and D",
        value: "4"
      },
      {
        label: "Osteotomy ",
        value: "5"
      },
      {
        label: "Augmentation",
        value: "6"
      },
      {
        label: "Excision Tumour",
        value: "7"
      }
    ]
  },
  vertebral: {
    label: "Vertebral surgery"
  },
  "vertebralSurgery.$.surgeryType": {
    label: "Select the surgery type",
    allowedValues: [
      "Removal of spinal instrumentation",
      "Discectomy",
      "Foraminotomy",
      "Laminectomy",
      "Laminoplasty",
      "Laminotomy",
      "I & D",
      "Kyphyoplasty",
      "Vertebroplasty",
      "Smith Peterson",
      "Corpectomy",
      "Pedicle Subtraction",
      "VCR",
      "Intralesional",
      "Marginal",
      "Wide"
    ]
  },
  "vertebralSurgery.$.approach": {
    label: "Approach",
    allowedValues: [
      "Transoral",
      "Subaxial cervical spine",
      "Sternal split",
      "Thoracotomy",
      "Thoracoabdominal",
      "Transperitoneal",
      "Retroperitoneal",
      "Posterior Midline",
      "Posterior Paraspinal",
      "Lateral"
    ]
  },
  "vertebralSurgery.$.additional": {
    label: "Additional",
    allowedValues: ["MIS", "Trans", "Revision"]
  },
  "vertebralSurgery.$.upper": {
    label: "Upper level",
    options: clinicalLevelOptions
  },
  "vertebralSurgery.$.lower": {
    label: "Lower level",
    options: clinicalLevelOptions
  },
  fixation_fusion: {
    label: "Fixation / Fusion"
  },
  "fixation.$.device": {
    label: "Device",
    allowedValues: [
      "None",
      "Plate",
      "Rod-screw construct",
      "Arthroplasty",
      "Interspinous device",
      "Cannulated Screw",
      "Synthetic Cage",
      "Interbody Bone Graft",
      "Other"
    ]
  },
  "fixation.$.approach": {
    label: "Approach",
    allowedValues: ["Anterior", "Posterior"]
  },
  "fixation.$.upper": {
    label: "Upper",
    options: clinicalLevelOptions
  },
  "fixation.$.lower": {
    label: "Lower",
    options: clinicalLevelOptions
  },
  fusionBoneGraft: {
    label: "Fusion bone graft"
  },

  "autograft.type": {
    label: "Autograft type",
    options: [
      {
        label: "None",
        value: "None"
      },
      {
        label: "Local",
        value: "Local"
      },
      {
        label: "Fibula",
        value: "Fibula"
      },
      {
        label: "Rib",
        value: "Rib"
      },
      {
        label: "Structural Illium",
        value: "Structural Illium"
      },
      {
        label: "Morcelized Illium",
        value: "Morcelized Illium"
      },
      {
        label: "Vascularized",
        value: "Vascularized"
      }
    ]
  },

  "allograft.type": {
    label: "Allograft",
    options: [
      {
        label: "None",
        value: "None"
      },
      {
        label: "Structural",
        value: "Structural"
      },
      {
        label: "Morcelized",
        value: "Morcelized"
      },
      {
        label: "DBM",
        value: "DBM"
      }
    ]
  },

  "synthetics.type": {
    label: "Synthetics",
    options: [
      {
        label: "None",
        value: "None"
      },
      {
        label: "BMP",
        value: "BMP"
      },
      {
        label: "PMMA",
        value: "PMMA"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  adjunctive: {
    label: "Adjunctive procedures"
  },
  "intraoperativeMonitoring.type": {
    label: "Intra-operative monitoring",
    options: [
      {
        label: "None",
        value: "None"
      },
      {
        label: "EMG",
        value: "EMG"
      },
      {
        label: "Motor",
        value: "Motor"
      },
      {
        label: "Sensory",
        value: "Sensory"
      }
    ]
  },
  "intraoperativeImaging.type": {
    label: "Intraoperative Imaging",
    options: [
      {
        label: "None",
        value: "None"
      },
      {
        label: "X-ray",
        value: "X-Ray"
      },
      {
        label: "Fluroscopy",
        value: "Fluroscopy"
      },
      {
        label: "CT-3D",
        value: "CT-3D"
      }
    ]
  },
  "navigation.type": {
    label: "Navigation",
    options: [
      {
        label: "No",
        value: "No"
      },
      {
        label: "Yes",
        value: "Yes"
      }
    ]
  },
  otherProcedure: {
    label: "Other procedures (intradural surgery, pumps, shunts)"
  },
  "cord.type": {
    label: "Cord or nerve",
    options: [
      {
        label: "Exploration and restoration of Subarachnoid Space",
        value: "Exploration and restoration of Subarachnoid Space"
      },
      {
        label: "Repair Meningocele",
        value: "Repair Meningocele"
      },
      {
        label: "Release Tethered Cord",
        value: "Release Tethered Cord"
      },
      {
        label: "Rhizotomy",
        value: "Rhizotomy"
      },
      {
        label: "Drez Lesion",
        value: "Drez Lesion"
      },
      {
        label: "Intradural intramedullary tumour",
        value: "Intradural intramedullary tumour"
      },
      {
        label: "Intradural extramedullary tumour",
        value: "Intradural extramedullary tumour"
      },
      {
        label: "Not applicable",
        value: "Not applicable"
      }
    ]
  },
  "pumps.type": {
    label: "Pumps",
    options: [
      {
        label: "Replacement / Removal / Implant of Infusion Pump",
        value: "Infusion pump replacement/removal/installation"
      },
      {
        label:
          "Spinal Stimulator (complete system) to include Pulse Generator / Receiver",
        value: "Spinal Stimulator - complete"
      },
      {
        label: "Not applicable",
        value: "Not applicable"
      }
    ]
  },
  "drainage.type": {
    label: "Drainage",
    options: [
      {
        label: "Lumboperitoneal shunt",
        value: "Lumboperitoneal shunt"
      },
      {
        label: "Syringoperitoneal shunt",
        value: "Syringoperitoneal shunt"
      },
      {
        label: "Insertion subarachnoid catheter",
        value: "Insertion subarachnoid catheter"
      },
      {
        label: "Not applicable",
        value: "Not applicable"
      }
    ]
  }
};

const schemaValidator = model => {
  const details = [];
  if (!model.fixation_fusion) {
    details.push({
      name: "fixation_fusion",
      message: "fixation_fusion is required"
    });
  }
};

const bridge = new GraphQLBridge(
  schema.getType("PhysicianSurgical"),
  schemaValidator,
  schemaData
);

export default bridge;
