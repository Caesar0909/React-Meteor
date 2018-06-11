import Mongo from "meteor/mongo";
import DiagnosisSchema from "./schema";

const Diagnosis = new Mongo.Collection("diagnosis");

Diagnosis.attachSchema(DiagnosisSchema);

export default Diagnosis;
