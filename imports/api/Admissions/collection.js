import { Mongo } from "meteor/mongo";
import AdmissionsSchema from "./schema";

const Admissions = new Mongo.Collection("admissions");

Admissions.attachSchema(AdmissionsSchema);

export default Admissions;
