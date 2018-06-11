import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  DateInitialReferral: {
    type: Date,
    label: "Referral date",
    optional: true
  },
  surg_proc_asascore: {
    type: Number,
    label: " ASA Classification",
    optional: true,
    min: 1,
    max: 5,
    defaultValue: 1
  },
  surg_proc_surg_dt: {
    type: Date,
    label: " Date of Surgery",
    optional: true
    // autoValue: function() {
    //   if (this.isInsert) {
    //     return new Date();
    //   } else if (this.isUpsert) {
    //     return { $setOnInsert: new Date() };
    //   } else {
    //     this.unset();
    //   }
    // }
  },
  surg_proc_optimestart: {
    type: String,
    label: " Operating Time - Skin to Skin Start Time",
    optional: true
    // defaultValue: function() {
    //   return moment().format("HH:mm");
    // }
    // autoform: {
    //   afFieldInput: {
    //     type: "time"
    //   }
    // }
  },
  surg_proc_optimeend: {
    type: String,
    label: " Operating Time - Skin to Skin End Time",
    optional: true
    // defaultValue: function() {
    //   return moment().add(moment.duration(1, 'hours')).format("HH:mm");
    // },
    // autoform: {
    //   afFieldInput: {
    //     type: "time"
    //   }
    // }
  },
  surg_proc_estimatedbloodloss: {
    type: Number,
    label: " Blood Loss (mL)",
    optional: true
  },
  surg_proc_injury_dt: {
    type: Date,
    label: " Date and Time of Injury",
    optional: true
    // autoform: {
    //   afFieldInput: {
    //     type: "datetime-local"
    //   }
    // }
  },
  surg_proc_decomp_dt: {
    type: Date,
    label: " Date of Decompression (SCI patients)",
    optional: true
  },

  surg_proc_vertebral: {
    type: String,
    label: "Vertebral procedure(s) performed",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "Excision",
    //         value: "1"
    //       },
    //       {
    //         label: "Decompression",
    //         value: "2"
    //       },
    //       {
    //         label: "Fixation / Fusion",
    //         value: "3"
    //       },
    //       {
    //         label: "I and D",
    //         value: "4"
    //       },
    //       {
    //         label: "Osteotomy ",
    //         value: "5"
    //       },
    //       {
    //         label: "Augmentation",
    //         value: "6"
    //       },
    //       {
    //         label: "Excision Tumour",
    //         value: "7"
    //       }
    //     ];
    //   }
    // }
  },
  vertebral: {
    type: Boolean,
    label: "Vertebral column surgery",
    optional: true
  },
  vertebralSurgery: {
    type: Array,
    optional: true
  },
  "vertebralSurgery.$": {
    type: Object,
    optional: true
  },
  "vertebralSurgery.$.surgeryType": {
    type: String,
    label: "Select the Surgery type",
    optional: true
    // autoform: {
    //   afFieldInput: {
    //     options: () => [
    //       {
    //         itemGroup: "Excision",
    //         items: [
    //           {
    //             value: "Removal of spinal instrumentation",
    //             label: "Removal of spinal instrumentation"
    //           }
    //         ]
    //       },
    //       {
    //         itemGroup: "Decompression",
    //         items: [
    //           { value: "Discectomy", label: "Discectomy" },
    //           { value: "Foraminotomy", label: "Foraminotomy" },
    //           { value: "Laminectomy", label: "Laminectomy" },
    //           { value: "Laminoplasty", label: "Laminoplasty" },
    //           { value: "Laminotomy", label: "Laminotomy" }
    //         ]
    //       },
    //       {
    //         itemGroup: "I & D",
    //         items: [{ value: "I & D", label: "I & D" }]
    //       },
    //       {
    //         itemGroup: "Osteotomy",
    //         items: [
    //           { value: "Kyphyoplasty", label: "Kyphyoplasty" },
    //           { value: "Vertebroplasty", label: "Vertebroplasty" }
    //         ]
    //       },
    //       {
    //         itemGroup: "Augmentation",
    //         items: [
    //           { value: "Smith Peterson", label: "Smith Peterson" },
    //           { value: "Corpectomy", label: "Corpectomy" },
    //           { value: "Pedicle Subtraction", label: "Pedicle Subtraction" },
    //           { value: "VCR", label: "VCR" }
    //         ]
    //       },
    //       {
    //         itemGroup: "Excision Tumour",
    //         items: [
    //           { value: "Intralesional", label: "Intralesional" },
    //           { value: "Marginal", label: "Marginal" },
    //           { value: "Wide", label: "Wide" }
    //         ]
    //       }
    //     ]
    //   }
    // }
  },
  "vertebralSurgery.$.approach": {
    type: String,
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "Transoral",
    //         value: "Transoral"
    //       },
    //       {
    //         label: "Subaxial cervical spine",
    //         value: "Subaxial cervical spine"
    //       },
    //       {
    //         label: "Sternal split",
    //         value: "Sternal split"
    //       },
    //       {
    //         label: "Thoracotomy",
    //         value: "Thoracotomy"
    //       },
    //       {
    //         label: "Thoracoabdominal",
    //         value: "Thoracoabdominal"
    //       },
    //       {
    //         label: "Transperitoneal",
    //         value: "Transperitoneal"
    //       },
    //       {
    //         label: "Retroperitoneal",
    //         value: "Retroperitoneal"
    //       },
    //       {
    //         label: "Posterior Midline",
    //         value: "Posterior Midline"
    //       },
    //       {
    //         label: "Posterior Paraspinal",
    //         value: "Posterior Paraspinal"
    //       },
    //       {
    //         label: "Lateral",
    //         value: "Lateral"
    //       }
    //     ];
    //   }
    // }
  },
  "vertebralSurgery.$.additional": {
    type: String,
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   classNames: "inline fields",
    //   options: function() {
    //     return [
    //       {
    //         label: "MIS",
    //         value: "MIS"
    //       },
    //       {
    //         label: "Trans",
    //         value: "Trans"
    //       },
    //       {
    //         label: "Revision",
    //         value: "Revision"
    //       }
    //     ];
    //   }
    // }
  },
  "vertebralSurgery.$.upper": {
    type: String,
    optional: true
    // autoform: {
    //   type: "select",
    //   value: function() {
    //     if (Meteor.isClient) {
    //       return (
    //         getPrevValue("vertebralSurgery", "upper") ||
    //         diagnosValue("upper") ||
    //         "N/A"
    //       );
    //     }
    //   },
    //   options: function() {
    //     if (Meteor.isClient) {
    //       return Blaze._globalHelpers.clinicalLevelOptions();
    //     }
    //   }
    // }
  },
  "vertebralSurgery.$.lower": {
    type: String,
    optional: true
    // autoform: {
    //   type: "select",
    //   value: function() {
    //     if (Meteor.isClient) {
    //       return (
    //         getPrevValue("vertebralSurgery", "lower") ||
    //         diagnosValue("lower") ||
    //         "N/A"
    //       );
    //     }
    //   },
    //   options: function() {
    //     if (Meteor.isClient) {
    //       return Blaze._globalHelpers.clinicalLevelOptions();
    //     }
    //   }
    // }
  },
  fixation_fusion: {
    type: Boolean,
    optional: true,
    label: "Fixation / Fusion"
  },
  fixation: {
    type: Array,
    optional: true
  },
  "fixation.$": {
    type: Object,
    optional: true
  },
  "fixation.$.device": {
    type: String,
    label: "Please select the type of device",
    optional: true
    // autoform: {
    //   type: "select",
    //   options: function() {
    //     return [
    //       {
    //         label: "None",
    //         value: "None"
    //       },
    //       {
    //         label: "Plate",
    //         value: "Plate"
    //       },
    //       {
    //         label: "Rod-screw construct",
    //         value: "Rod-screw construct"
    //       },
    //       {
    //         label: "Arthroplasty",
    //         value: "Arthroplasty"
    //       },
    //       {
    //         label: "Interspinous device",
    //         value: "Interspinous device"
    //       },
    //       {
    //         label: "Cannulated Screw",
    //         value: "Cannulated Screw"
    //       },
    //       {
    //         label: "Synthetic Cage",
    //         value: "Synthetic Cage"
    //       },
    //       {
    //         label: "Interbody Bone Graft",
    //         value: "Interbody Bone Graft"
    //       },
    //       {
    //         label: "Other",
    //         value: "Other"
    //       }
    //     ];
    //   }
    // }
  },
  "fixation.$.approach": {
    type: String,
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   class: "inline fields",
    //   options: function() {
    //     return [
    //       {
    //         label: "Anterior",
    //         value: "Anterior"
    //       },
    //       {
    //         label: "Posterior",
    //         value: "Posterior"
    //       }
    //     ];
    //   }
    // }
  },
  "fixation.$.upper": {
    type: String,
    optional: true
    // autoform: {
    //   type: "select",
    //   value: function() {
    //     if (Meteor.isClient) {
    //       return (
    //         getPrevValue("fixation", "upper") ||
    //         getPrevValue("vertebralSurgery", "upper") ||
    //         diagnosValue("upper") ||
    //         "N/A"
    //       );
    //     }
    //   },
    //   options: function() {
    //     if (Meteor.isClient) {
    //       return Blaze._globalHelpers.clinicalLevelOptions();
    //     }
    //   }
    // }
  },
  "fixation.$.lower": {
    type: String,
    optional: true
    // autoform: {
    //   type: "select",
    //   value: function() {
    //     if (Meteor.isClient) {
    //       return (
    //         getPrevValue("fixation", "lower") ||
    //         getPrevValue("vertebralSurgery", "lower") ||
    //         diagnosValue("lower") ||
    //         "N/A"
    //       );
    //     }
    //   },
    //   options: function() {
    //     if (Meteor.isClient) {
    //       return Blaze._globalHelpers.clinicalLevelOptions();
    //     }
    //   }
    // }
  },
  fusionBoneGraft: {
    type: Boolean,
    optional: true
  },
  autograft: {
    type: Object,
    optional: true
  },

  "autograft.type": {
    type: Array,
    label: "Please select all applicable types",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "None",
    //         value: "None"
    //       },
    //       {
    //         label: "Local",
    //         value: "Local"
    //       },
    //       {
    //         label: "Fibula",
    //         value: "Fibula"
    //       },
    //       {
    //         label: "Rib",
    //         value: "Rib"
    //       },
    //       {
    //         label: "Structural Illium",
    //         value: "Structural Illium"
    //       },
    //       {
    //         label: "Morcelized Illium",
    //         value: "Morcelized Illium"
    //       },
    //       {
    //         label: "Vascularized",
    //         value: "Vascularized"
    //       }
    //     ];
    //   }
    // }
  },
  allograft: {
    type: Object,
    optional: true
  },
  "allograft.type": {
    type: Array,
    label: "Please select all applicable types",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "None",
    //         value: "None"
    //       },
    //       {
    //         label: "Structural",
    //         value: "Structural"
    //       },
    //       {
    //         label: "Morcelized",
    //         value: "Morcelized"
    //       },
    //       {
    //         label: "DBM",
    //         value: "DBM"
    //       }
    //     ];
    //   }
    // }
  },
  synthetics: {
    type: Object,
    optional: true
  },
  "synthetics.type": {
    type: Array,
    label: "Please select all applicable types",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "None",
    //         value: "None"
    //       },
    //       {
    //         label: "BMP",
    //         value: "BMP"
    //       },
    //       {
    //         label: "PMMA",
    //         value: "PMMA"
    //       },
    //       {
    //         label: "Other",
    //         value: "Other"
    //       }
    //     ];
    //   }
    // }
  },
  adjunctive: {
    type: Boolean,
    label: "Adjunctive procedures",
    optional: true
  },
  intraoperativeMonitoring: {
    type: Object,
    optional: true
  },

  "intraoperativeMonitoring.type": {
    type: Array,
    label: "Intraoperative monitoring",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "None",
    //         value: "None"
    //       },
    //       {
    //         label: "EMG",
    //         value: "EMG"
    //       },
    //       {
    //         label: "Motor",
    //         value: "Motor"
    //       },
    //       {
    //         label: "Sensory",
    //         value: "Sensory"
    //       }
    //     ];
    //   }
    // }
  },
  intraoperativeImaging: {
    type: Object,
    optional: true
  },
  "intraoperativeImaging.type": {
    type: Array,
    label: "Intraoperative Imaging",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "None",
    //         value: "None"
    //       },
    //       {
    //         label: "X-ray",
    //         value: "X-Ray"
    //       },
    //       {
    //         label: "Fluroscopy",
    //         value: "Fluroscopy"
    //       },
    //       {
    //         label: "CT-3D",
    //         value: "CT-3D"
    //       }
    //     ];
    //   }
    // }
  },
  navigation: {
    type: Object,
    optional: true
  },
  "navigation.type": {
    type: String,
    label: "Navigation",
    optional: true
    // autoform: {
    //   type: "select-radio",
    //   options: function() {
    //     return [
    //       {
    //         label: "No",
    //         value: "No"
    //       },
    //       {
    //         label: "Yes",
    //         value: "Yes"
    //       }
    //     ];
    //   }
    // }
  },
  otherProcedure: {
    type: Boolean,
    label: "Other procedures (intradural surgery, pumps, shunts)",
    optional: true
  },
  cord: {
    type: Object,
    optional: true
  },
  "cord.type": {
    type: Object,
    label: "Cord or nerve",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "Exploration and restoration of Subarachnoid Space",
    //         value: "Exploration and restoration of Subarachnoid Space"
    //       },
    //       {
    //         label: "Repair Meningocele",
    //         value: "Repair Meningocele"
    //       },
    //       {
    //         label: "Release Tethered Cord",
    //         value: "Release Tethered Cord"
    //       },
    //       {
    //         label: "Rhizotomy",
    //         value: "Rhizotomy"
    //       },
    //       {
    //         label: "Drez Lesion",
    //         value: "Drez Lesion"
    //       },
    //       {
    //         label: "Intradural intramedullary tumour",
    //         value: "Intradural intramedullary tumour"
    //       },
    //       {
    //         label: "Intradural extramedullary tumour",
    //         value: "Intradural extramedullary tumour"
    //       },
    //       {
    //         label: "Not applicable",
    //         value: "Not applicable"
    //       }
    //     ];
    //   }
    // }
  },
  pumps: {
    type: Object,
    optional: true
  },
  "pumps.type": {
    type: Object,
    label: "Pumps",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "Replacement / Removal / Implant of Infusion Pump",
    //         value: "Infusion pump replacement/removal/installation"
    //       },
    //       {
    //         label:
    //           "Spinal Stimulator (complete system) to include Pulse Generator / Receiver",
    //         value: "Spinal Stimulator - complete"
    //       },
    //       {
    //         label: "Not applicable",
    //         value: "Not applicable"
    //       }
    //     ];
    //   }
    // }
  },
  drainage: {
    type: Object,
    optional: true
  },
  "drainage.type": {
    type: Object,
    label: "Drainage",
    optional: true
    // autoform: {
    //   type: "select-checkbox",
    //   options: function() {
    //     return [
    //       {
    //         label: "Lumboperitoneal shunt",
    //         value: "Lumboperitoneal shunt"
    //       },
    //       {
    //         label: "Syringoperitoneal shunt",
    //         value: "Syringoperitoneal shunt"
    //       },
    //       {
    //         label: "Insertion subarachnoid catheter",
    //         value: "Insertion subarachnoid catheter"
    //       },
    //       {
    //         label: "Not applicable",
    //         value: "Not applicable"
    //       }
    //     ];
    //   }
    // }
  }
});
