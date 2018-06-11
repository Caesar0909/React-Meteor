import { Mongo } from "meteor/mongo";
import PhysicianGeneralAssessmentSchema from "./schema";

const PhysicianGeneralAssessments = new Mongo.Collection(
  "physicianGeneralAssessment"
);

PhysicianGeneralAssessments.attachSchema(PhysicianGeneralAssessmentSchema);

export default PhysicianGeneralAssessments;
