import { Mongo } from "meteor/mongo";
import InitialClinicalAssessmentSchema from "./schema";

const InitialClinicalAssessment = new Mongo.Collection(
  "initialClinicalAssessment"
);

InitialClinicalAssessment.attachSchema(InitialClinicalAssessmentSchema);

export default InitialClinicalAssessment;
