import GraphQLBridge from "uniforms/GraphQLBridge";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import { resolvers, typeDefs } from "../../graphqlDefinitions";
import schemaDataCharleston from "./subpages/charleston/bridge";
import { schemaDataGlasgow, validatorGlasgow } from "./subpages/glasgow/bridge";
import schemaDataAISS from "./subpages/aiss/bridge";
import {
  schemaDataMechanism,
  validatorMechanism
} from "./subpages/mechanism/bridge";

import treatment from "./treatment.json";

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

const schemaDataICA = {
  dateInitialReferral: {
    label: "Referral date"
  },
  dateFirstVisit: {
    label: "Initial visit date"
  },
  initialCurrentDate: {
    label: "Assessment date"
  },
  dateConsentSigned: {
    label: "Informed Consent date"
  },
  CA1A: {
    label: "Chief complaint",
    options: [
      {
        label: "Back pain",
        value: "Back pain"
      },
      {
        label: "Neck pain",
        value: "Neck pain"
      },
      {
        label: "Deformity",
        value: "Deformity"
      },
      {
        label: "Radiculopathy",
        value: "Radiculopathy"
      },
      {
        label: "Neurogenic Claudication",
        value: "Neurogenic Claudication"
      },
      {
        label: "Cauda equina syndrome",
        value: "Cauda equina syndrome"
      },
      {
        label: "Myelopathy",
        value: "Myelopathy"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  CA1B: {
    label: "Secondary complaint(s)",
    options: [
      {
        label: "Back pain",
        value: "Back pain"
      },
      {
        label: "Neck pain",
        value: "Neck pain"
      },
      {
        label: "Deformity",
        value: "Deformity"
      },
      {
        label: "Radiculopathy",
        value: "Radiculopathy"
      },
      {
        label: "Neurogenic Claudication",
        value: "Neurogenic Claudication"
      },
      {
        label: "Cauda equina syndrome",
        value: "Cauda equina syndrome"
      },
      {
        label: "Myelopathy",
        value: "Myelopathy"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  CA1BOther: {
    label: "CA1BOther"
  },
  CA2: {
    label:
      "How long has the patient had the condition for which he/she is seeking treatment?",
    options: [
      {
        label: "Less than 6 weeks",
        value: "Less than 6 weeks"
      },
      {
        label: "6 to 12 weeks",
        value: "6 to 12 weeks"
      },
      {
        label: "3 - 6 months",
        value: "3 - 6 months"
      },
      {
        label: "6 - 12 months",
        value: "6 - 12 months"
      },
      {
        label: "1 - 2 years",
        value: "1 - 2 years"
      },
      {
        label: "Over 2 years",
        value: "Over 2 years"
      }
    ]
  },
  CA3: {
    label: "Does this patient have a neurological deficit?",
    options: [
      {
        label: "Yes",
        value: "Yes"
      },
      {
        label: "No",
        value: "No"
      }
    ]
  },
  initialCA4A: {
    label: "Brachial plexus injury",
    options: [
      {
        label: "Yes",
        value: "Yes"
      },
      {
        label: "No",
        value: "No"
      }
    ]
  },
  initialCA4B: {
    label: "Brain deficit",
    options: [
      {
        label: "Yes",
        value: "Yes"
      },
      {
        label: "No",
        value: "No"
      }
    ]
  },
  initialCA4C: {
    label: "Spinal cord deficit",
    options: [
      {
        label: "Yes",
        value: "Yes"
      },
      {
        label: "No",
        value: "No"
      }
    ]
  },
  initialCA4D: {
    label: "Nerve root injury",
    options: [
      {
        label: "Yes",
        value: "Yes"
      },
      {
        label: "No",
        value: "No"
      }
    ]
  },
  myleopathyNurick: {
    label: "Nurick scale",
    options: [
      {
        label:
          "Grade 0: Signs and symptoms of root involvement but without evidence of spinal cord disease",
        value: 0
      },
      {
        label:
          "Grade 1: Signs of spinal cord disease but no difficulty in walking",
        value: 1
      },
      {
        label:
          "Grade 2: Slight difficulty in walking but does not prevent full-time employment",
        value: 2
      },
      {
        label:
          "Grade 3: Difficulty in walking that requires assistance and prevents full-time employment and avocation",
        value: 3
      },
      {
        label:
          "Grade 4: Ability to walk only with assistance or with the aid of a frame",
        value: 4
      },
      {
        label: "Grade 5: Chairbound or bedridden",
        value: 5
      },
      {
        label: "Unknown",
        value: 6
      }
    ]
  },
  PPDegenerative: {
    label: "Specify the type of degeneration",
    options: [
      {
        label: "Disc herniation",
        value: "DiscHerniation",
        code: 1
      },
      {
        label: "Facet degeneration",
        value: "FacetDegeneration",
        code: 2
      },
      {
        label: "Spinal stenosis",
        value: "SpinalStenosis",
        code: 3
      }
    ]
  },
  spineUpperClinical: {
    label: "Clinical level (top)",
    options: clinicalLevelOptions
  },
  spineLowerClinical: {
    label: "Clinical level (bottom)",
    options: clinicalLevelOptions
  },
  spineUpperAnatomic: {
    label: "Anatomic level (top)",
    options: clinicalLevelOptions
  },
  spineLowerAnatomic: {
    label: "Anatomic level (bottom)",
    options: clinicalLevelOptions
  },
  PP1: {
    label: "Select the SINGLE principal pathology",
    options: [
      {
        label: "Disc herniation (with radiculopathy)",
        value: "0"
      },
      {
        label: "Degenerative disc disease",
        value: "1"
      },
      {
        label: "Stenosis (without Spondylolisthesis or Scoliosis)",
        value: "2"
      },
      {
        label: "Spondylolisthesis",
        value: "3"
      },
      {
        label: "Deformity",
        value: "4"
      },
      {
        label: "Trauma - Fracture",
        value: "5"
      },
      {
        label: "Pathologic - Fracture",
        value: "6"
      },
      {
        label: "Tumour",
        value: "7"
      },
      {
        label: "Inflammation",
        value: "8"
      },
      {
        label: "Infection",
        value: "9"
      },
      {
        label: "Intradural pathology",
        value: "10"
      },
      {
        label: "Vascular",
        value: "11"
      },
      {
        label: "Other",
        value: "12"
      },
      {
        label: "Synovial cyst",
        value: "13"
      }
    ]
  },
  NoPreviousSurgery: {
    label: "Has the patient had previous surgery?"
  },
  PPSpondylolisthesis: {
    label: "Type",
    options: [
      {
        label: "Type 1 (congenital, dysplastic)",
        value: "Type 1 (congenital, dysplastic)",
        code: 1
      },
      {
        label: "Type 2 (isthmic)",
        value: "Type 2 (isthmic)",
        code: 2
      },
      {
        label: "Type 3 (degenerative)",
        value: "Type 3 (degenerative)",
        code: 3
      },
      {
        label: "Type 4 (traumatic)",
        value: "Type 4 (traumatic)",
        code: 4
      },
      {
        label: "Type 5 (pathologic)",
        value: "Type 5 (pathologic)",
        code: 5
      },
      {
        label: "Type 6 (post-surgical)",
        value: "Type 6 (post-surgical)",
        code: 6
      },
      {
        label: "Unknown",
        value: "Unknown"
      }
    ]
  },
  TypeSpondStenosis: {
    label: "With stenosis?",
    options: [
      {
        label: "Yes",
        value: "Yes - Stenosis"
      },
      {
        label: "No",
        value: "No - Stenosis"
      }
    ]
  },
  PPDeformity: {
    label: "Principal deformity",
    options: [
      {
        label: "Scoliosis",
        value: "Scoliosis"
      },
      {
        label: "Kyphosis",
        value: "Kyphosis"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  PPDeformScoliosis: {
    label: "What is the predominant etiology?",
    options: [
      {
        label: "Idiopathic",
        value: "Idiopathic"
      },
      {
        label: "Congenital",
        value: "Congenital"
      },
      {
        label: "Neuromuscular",
        value: "Neuromuscular"
      },
      {
        label: "Degenerative",
        value: "Degenerative"
      },
      {
        label: "Post traumatic",
        value: "Post traumatic"
      },
      {
        label: "Post surgical",
        value: "Post surgical"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  DegenScolStenosis: {
    label: "Any type with stenosis?"
  },
  PPDeformKyphosis: {
    label: "What is the predominant etiology?",
    options: [
      {
        label: "Scheuermann's",
        value: "Scheuermann's"
      },
      {
        label: "Idiopathic",
        value: "Idiopathic"
      },
      {
        label: "Congenital",
        value: "Congenital"
      },
      {
        label: "Neuromuscular",
        value: "Neuromuscular"
      },
      {
        label: "Degenerative",
        value: "Degenerative"
      },
      {
        label: "Post traumatic",
        value: "Post traumatic"
      },
      {
        label: "Post surgical",
        value: "Post surgical"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  PPPathFracture: {
    label: "Please specify the reason",
    options: [
      {
        label: "Osteoporosis",
        value: "Osteoporosis",
        code: 1
      },
      {
        label: "Tumour",
        value: "Tumour",
        code: 2
      },
      {
        label: "Other",
        value: "Other",
        code: 3
      }
    ]
  },
  PPPathFractureTumourType: {
    label: "Please select",
    options: [
      {
        label: "Primary malignant",
        value: "Primary malignant"
      },
      {
        label: "Primary benign",
        value: "Primary benign"
      },
      {
        label: "Secondary malignant",
        value: "Secondary malignant"
      },
      {
        label: "Tumour-like lesion",
        value: "Tumour-like lesion"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  PPTumourType: {
    label: "Select the type of tumour",
    options: [
      {
        label: "Primary malignant",
        value: "Primary malignant"
      },
      {
        label: "Primary benign",
        value: "Primary benign"
      },
      {
        label: "Secondary malignant",
        value: "Secondary malignant"
      },
      {
        label: "Tumour-like lesion",
        value: "Tumour-like lesion"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  PPTumourTypeOther: {
    label: "Please specify the type of tumour"
  },
  PPInflammationType: {
    label: "Select the type of infection",
    options: [
      {
        label: "RA, SLE, Psoriasis",
        value: "RA, SLE, Psoriasis",
        code: 1
      },
      {
        label: "Ankylosing spondylitis",
        value: "Ankylosing spondylitis",
        code: 2
      },
      {
        label: "Other",
        value: "Other",
        code: 3
      }
    ]
  },
  PPInflammationTypeOther: {
    label: "Please specify"
  },
  PPInfection: {
    label: "Select the type of infection",
    options: [
      {
        label: "Pyrogenic",
        value: "Pyrogenic"
      },
      {
        label: "Tuberculosis",
        value: "Tuberculosis"
      },
      {
        label: "Fungal",
        value: "Fungal"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  PPInfectionOther: {
    label: "Please specify"
  },
  PPIntradural: {
    label: "Please specify",
    options: [
      {
        label: "Intramedullary",
        value: "Intramedullary"
      },
      {
        label: "Extramedullary",
        value: "Extramedullary tumour"
      },
      {
        label: "Syringomyelia",
        value: "Syringomyelia"
      },
      {
        label: "Arachnoid cyst",
        value: "Arachnoid cyst"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  PPIntraduralOther: {
    label: "Please specify"
  },
  PPVascular: {
    label: "Please specify the type",
    options: [
      {
        label: "Vascular lesion",
        value: "Vascular lesion",
        code: 1
      },
      {
        label: "Spinal cord infarct",
        value: "Spinal cord infarct",
        code: 2
      }
    ]
  },
  PPOther: {
    label: "Other"
  },
  PPTraumaticFracture: {
    label: "Select the injury/fracture type",
    options: [
      {
        label: "Soft tissue only",
        value: "Soft tissue only"
      },
      {
        label: "Condylar (C0)",
        value: "Condylar (C0)"
      },
      {
        label: "C0/C1 dissociation",
        value: "C0/C1 dissociation"
      },
      {
        label: "C1 fracture",
        value: "C1 fracture"
      },
      {
        label: "C2 dens fracture",
        value: "C2_dens_fracture"
      },
      {
        label: "C2 other fracture",
        value: "C2 other fracture"
      },
      {
        label: "Fracture C3-L5",
        value: "Fracture C3-L5"
      },
      {
        label: "Sacral fracture",
        value: "Sacral fracture"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  PPTraumaticFractureC2dens: {
    label: "Select the type of fracture",
    options: [
      {
        label: "Type 1",
        value: "Type 1"
      },
      {
        label: "Type 2",
        value: "Type 2"
      },
      {
        label: "Type 3",
        value: "Type 3"
      }
    ]
  },
  PPTraumaticFractureC3L5: {
    label: "Select the type of fracture",
    options: [
      {
        label: "Compression fracture",
        value: "Compression fracture"
      },
      {
        label: "Burst fracture",
        value: "Burst fracture"
      },
      {
        label: "Flexion distraction",
        value: "Flexion distraction"
      },
      {
        label: "Fracture/dislocation",
        value: "Fracture/dislocation"
      }
    ]
  },
  PPTraumaticFractureOther: {
    label: "Please specify"
  },
  PPSpondylolisthesisGrade: {
    label: "Grade",
    options: [
      {
        label: "Grade 1",
        value: "Grade 1"
      },
      {
        label: "Grade 2",
        value: "Grade 2"
      },
      {
        label: "Grade 3",
        value: "Grade 3"
      },
      {
        label: "Grade 4",
        value: "Grade 4"
      },
      {
        label: "Spondyloptosis (5)",
        value: "Spondyloptosis (5)"
      }
    ]
  },
  PS1: {
    label: "PS-1: Specify surgery type(s)",
    options: [
      {
        label: "Decompression or Discectomy",
        value: "Decompression or Discectomy"
      },
      {
        label: "Fusion",
        value: "Fusion"
      },
      {
        label: "Artificial disc or intradiscal motion preservation",
        value: "Artificial disc or intradiscal motion preservation"
      },
      {
        label: "Dynamic stabilization or extradiscal motion preservation",
        value: "Dynamic stabilization or extradiscal motion preservation"
      },
      {
        label: "Deformity correction",
        value: "Deformity correction"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  PS2: {
    label: "Number of previous spine surgeries",
    options: [
      {
        label: "1",
        value: "1"
      },
      {
        label: "2",
        value: "2"
      },
      {
        label: "3",
        value: "3"
      },
      {
        label: "4",
        value: "4"
      },
      {
        label: "5",
        value: "5"
      },
      {
        label: "More than 5",
        value: "More than 5"
      }
    ]
  },
  PS3: {
    label: "Prior surgery at the same level as current complaint?"
  },
  PS4: {
    label: "Previous surgeries",
    options: [
      {
        label: "Recurrent disc herniation",
        value: "Recurrent disc herniation",
        code: "1"
      },
      {
        label: "Neurocompression",
        value: "Neurocompression",
        code: "2"
      },
      {
        label: "Post-operative infection",
        value: "Post-operative infection",
        code: "3"
      },
      {
        label: "Adjacent segment disease",
        value: "Adjacent segment disease",
        code: "4"
      },
      {
        label: "Spondylolisthesis",
        value: "Spondylolisthesis",
        code: "5"
      },
      {
        label: "Non-union",
        value: "Non-union",
        code: "6"
      },
      {
        label: "Implant failure",
        value: "Implant failure",
        code: "7"
      },
      {
        label: "Instability",
        value: "Instability",
        code: "8"
      },
      {
        label: "Scoliosis",
        value: "Scoliosis",
        code: "9"
      },
      {
        label: "Sagittal imbalance",
        value: "Sagittal imbalance",
        code: "10"
      },
      {
        label: "Other",
        value: "Other",
        code: "11"
      }
    ]
  },
  PS4NoFailedSurgery: {
    label: "Will the surgery revise a previous operation?"
  },
  treatmentType: {
    label: "Treatment Type",
    options: [
      {
        label: "No further treatment required",
        value: "NoFurtherTreatmentRequired"
      },
      {
        label: "Follow-up required only",
        value: "FollowUpRequiredOnly"
      },
      {
        label: "Surgery and follow-up",
        value: "SurgeryAndFollowUp"
      },
      {
        label: "Cannot assess / confirmation needed / To be determined",
        value: "CannotAssess"
      },
      {
        label: "Refer patient to another provider",
        value: "ReferPatientToAnotherProvider"
      }
    ]
  },
  treatmentOption: {
    label: "Treatment Options",
    options: treatment
  }
};

const schemaData = merge(
  schemaDataCharleston,
  schemaDataGlasgow,
  schemaDataAISS,
  schemaDataMechanism,
  schemaDataICA
);

const schemaValidator = model => {
  const details = [];
  if (!model.spineUpperClinical) {
    details.push({
      name: "spineUpperClinical",
      message: "Spine upper clinical is required"
    });
  }
  if (!model.spineUpperClinical) {
    details.push({
      name: "spineUpperClinical",
      message: "Spine upper clinical is required"
    });
  }
  if (!model.spineLowerClinical) {
    details.push({
      name: "spineLowerClinical",
      message: "Spine lower clinical is required"
    });
  }
  if (!model.spineUpperAnatomic) {
    details.push({
      name: "spineUpperAnatomic",
      message: "Spine upper anatomic is required"
    });
  }
  if (!model.spineLowerAnatomic) {
    details.push({
      name: "spineLowerAnatomic",
      message: "Spine lower anatomic is required"
    });
  }
  if (!model.PP1) {
    details.push({
      name: "PP1",
      message: "Select the SINGLE principal pathology is required"
    });
  }
  validatorGlasgow({ model, details });
  validatorMechanism({ model, details });
  if (details.length) {
    throw { details };
  }
};

const bridge = new GraphQLBridge(
  schema.getType("InitialClinicalAssessment"),
  schemaValidator,
  schemaData
);

export default bridge;
