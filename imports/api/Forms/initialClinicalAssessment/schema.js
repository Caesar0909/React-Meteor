import SimpleSchema from "simpl-schema";

import CharlestonSchema from "./subpages/charleston/schema";
import GlasgowSchema from "./subpages/glasgow/schema";
import AISSSchema from "./subpages/aiss/schema";
import MechanismSchema from "./subpages/mechanism/schema";

const InitialClinicalAssessmentSchema = new SimpleSchema({
  dateInitialReferral: {
    type: Date,
    label: "Referral date",
    optional: true
  },

  dateFirstVisit: {
    type: Date,
    label: "Initial visit date",
    optional: true
  },

  initialCurrentDate: {
    type: Date,
    label: "Assessment date",
    optional: true
  },

  dateConsentSigned: {
    type: Date,
    label: "Informed Consent date",
    optional: true
  },

  CA1A: {
    type: String,
    optional: true
  },

  myleopathyNurick: {
    type: SimpleSchema.Integer,
    optional: true
  },
  CA1AOther: {
    type: String,
    label: "Other - Please specify",
    max: 200,
    optional: true
  },

  CA1B: {
    type: Array,
    label: "Secondary complaint(s)",
    defaultValue: [],
    optional: true
  },
  "CA1B.$": {
    type: String,
    optional: true
  },
  CA1BOther: {
    type: String,
    label: "Please specify",
    max: 200,
    optional: true
  },

  CA2: {
    type: String,
    optional: true
  },

  CA3: {
    type: Boolean,
    optional: true
  },

  CA3B: {
    type: String,
    label: "If YES, is it:",
    optional: true
  },
  initialCA4A: {
    type: String,
    label: "Brachial plexus injury",
    optional: true,
    defaultValue: "No"
  },
  initialCA4B: {
    type: String,
    label: "Brain deficit",
    optional: true,
    defaultValue: "No"
  },

  initialCA4C: {
    type: String,
    label: "Spinal cord deficit",
    optional: true,
    defaultValue: "No"
  },
  initialCA4D: {
    type: String,
    label: "Nerve root injury",
    optional: true,
    defaultValue: "No"
  },

  spineUpperClinical: {
    type: String,
    optional: true
  },

  spineLowerClinical: {
    type: String,
    optional: true
  },

  spineUpperAnatomic: {
    type: String,
    optional: true
  },
  spineLowerAnatomic: {
    type: String,
    optional: true
  },
  // part 2: Principal pathology
  // this part corresponds to step 5 of the encounter flow
  PP1: {
    type: String,
    optional: true
  },

  PPOther: {
    type: String,
    label: "Other",
    optional: true
  },

  // degenerative
  PPDegenerative: {
    type: String,
    label: "Specify the type of degeneration",
    optional: true
  },

  // spondy
  PPSpondylolisthesis: {
    type: String,
    label: "Type",
    optional: true
  },
  TypeSpondStenosis: {
    type: String,
    label: "With stenosis?",
    optional: true
  },

  PPSpondylolisthesisGrade: {
    type: String,
    label: "Grade",
    optional: true
  },
  PPDeformity: {
    type: String,
    label: "Principal deformity",
    optional: true
  },
  PPDeformScoliosis: {
    type: String,
    label: "What is the predominant etiology?",
    optional: true
  },

  DegenScolStenosis: {
    type: Boolean,
    label: "Any type with stenosis?",
    optional: true
  },

  PPDeformKyphosis: {
    type: String,
    label: "What is the predominant etiology?",
    optional: true
  },

  // tumour here
  PPTumourType: {
    type: String,
    label: "Select the type of tumour",
    optional: true
  },
  PPIntradural: {
    type: String,
    label: "Please specify",
    optional: true
  },
  PPIntraduralOther: {
    type: String,
    label: "Please specify",
    optional: true
  },
  PPTumourTypeOther: {
    type: String,
    label: "Please specify",
    optional: true
  },
  // trauma-fracture
  PPTraumaticFracture: {
    type: String,
    label: "Select the injury/fracture type",
    optional: true
  },
  PPTraumaticFractureC2dens: {
    type: String,
    label: "Select the type of fracture",
    optional: true
  },

  PPTraumaticFractureC3L5: {
    type: String,
    label: "Select the type of fracture",
    optional: true
  },

  PPTraumaticFractureOther: {
    type: String,
    label: "Please specify",
    optional: true
  },

  // vascular
  PPVascular: {
    type: String,
    label: "Please specify the type",
    optional: true
  },

  // pathological fracture
  PPPathFracture: {
    type: String,
    label: "Please specify the reason",
    optional: true
  },

  PPPathFractureTumourType: {
    type: String,
    label: "Select the type of tumour",
    optional: true
  },

  PPPathFractureTumourTypeOther: {
    type: String,
    label: "Please specify",
    optional: true
  },

  // inflammation
  PPInflammationType: {
    type: String,
    label: "Select the type of infection",
    optional: true
  },
  PPInflammationTypeOther: {
    type: String,
    label: "Please specify",
    optional: true
  },

  // infection
  PPInfection: {
    type: String,
    label: "Select the type of infection",
    optional: true
  },
  PPInfectionOther: {
    type: String,
    label: "Please specify",
    optional: true
  },

  // previous surgery
  NoPreviousSurgery: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },

  PS1: {
    type: Array,
    label: "PS-1: Specify surgery type(s)",
    optional: true
  },
  "PS1.$": {
    type: String
  },
  PS1Other: {
    type: String,
    label: "Please specify",
    optional: true
  },

  PS2: {
    type: String,
    label: "Number of previous spine surgeries",
    optional: true
  },

  PS2MoreThan5: {
    type: SimpleSchema.Integer,
    label: "How many more than 5?",
    optional: true,
    min: 6
  },

  PS3: {
    type: Boolean,
    optional: true,
    label: "Prior surgery at the same level as current complaint?",
    defaultValue: false
  },

  // we add PS4 only on the treatment page.
  PS4NoFailedSurgery: {
    type: Boolean,
    optional: true
  },
  PS4: {
    type: Array,
    label: "Previous surgeries",
    optional: true
  },
  "PS4.$": {
    type: String
  },
  PS4Other: {
    type: String,
    optional: true,
    label: "Please specify"
  },

  treatmentType: {
    type: String,
    optional: true
  },
  treatmentOption: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date
  }
});

InitialClinicalAssessmentSchema.extend(CharlestonSchema);
InitialClinicalAssessmentSchema.extend(GlasgowSchema);
InitialClinicalAssessmentSchema.extend(AISSSchema);
InitialClinicalAssessmentSchema.extend(MechanismSchema);

export default InitialClinicalAssessmentSchema;
