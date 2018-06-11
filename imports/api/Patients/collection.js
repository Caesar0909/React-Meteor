import { Mongo } from "meteor/mongo";
import PatientsSchema from "./schema";

const Patients = new Mongo.Collection("patients");

Patients.attachSchema(PatientsSchema);

export default Patients;
