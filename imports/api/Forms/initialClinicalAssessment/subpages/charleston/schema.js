import SimpleSchema from "simpl-schema";

const CharlestonSchema = new SimpleSchema({
  charleston: {
    type: Object,
    optional: true
  },
  "charleston.score": {
    type: Number,
    label: "Charleston Score",
    optional: true
  },
  "charleston.probability": {
    type: Number,
    label: "Charleston Probability",
    optional: true
  },
  "charleston.myocardialInfarction": {
    type: Boolean,
    label: "Charleston Myocardial Infarction",
    optional: true
  },
  "charleston.congestive_heart_failure": {
    type: Boolean,
    label: "Charleston Congestive heart failure",
    optional: true
  },
  "charleston.peripheral_disease": {
    type: Boolean,
    label: "Charleston Peripheral disease ",
    optional: true
  },
  "charleston.cva_with_mild": {
    type: Boolean,
    label: "Charleston CVA with mild or no residua or TIA",
    optional: true
  },
  "charleston.dementia": {
    type: Boolean,
    label: "Charleston Dementia",
    optional: true
  },
  "charleston.chronic_pulmonary": {
    type: Boolean,
    label: "Charleston Chronic pulmonary disease",
    optional: true
  },
  "charleston.connective_tissue": {
    type: Boolean,
    label: "Charleston Connective tissue disease",
    optional: true
  },
  "charleston.peptic_ulcer": {
    type: Boolean,
    label: "Charleston Peptic ulcer disease",
    optional: true
  },
  "charleston.mild_liver": {
    type: Boolean,
    label: "Charleston Mild liver disease",
    optional: true
  },
  "charleston.diabetes_without_end": {
    type: Boolean,
    label: "Charleston Diabetes without end-organ damage",
    optional: true
  },
  "charleston.hemiplegia": {
    type: Boolean,
    label: "Charleston Hemiplegia",
    optional: true
  },
  "charleston.moderate_or_severe_renal": {
    type: Boolean,
    label: "Charleston Moderate or severe renal disease",
    optional: true
  },
  "charleston.Diabetes_with_end_organ_damage": {
    type: Boolean,
    label: "Charleston Diabetes with end-organ damage",
    optional: true
  },
  "charleston.tumor_without_metastasis": {
    type: Boolean,
    label: "Charleston Tumor without metastasis",
    optional: true
  },
  "charleston.leukemia": {
    type: Boolean,
    label: "Charleston Leukemia",
    optional: true
  },
  "charleston.lymphoma": {
    type: Boolean,
    label: "Charleston Lymphoma",
    optional: true
  },
  "charleston.moderate_severe_liver": {
    type: Boolean,
    label: "Charleston Moderate–severe liver disease",
    optional: true
  },
  "charleston.metastatic_solid_tumor": {
    type: Boolean,
    label: "Charleston Metastatic solid tumor",
    optional: true
  },
  "charleston.AIDS": {
    type: Boolean,
    label: "Charleston AIDS (not just HIV positive)",
    optional: true
  }
});

export default CharlestonSchema;
