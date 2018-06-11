import { Mongo } from "meteor/mongo";
import PhysicianDischargeSchema from "./schema";

const PhysicianDischarges = new Mongo.Collection("physicianDischarge");

PhysicianDischarges.attachSchema(PhysicianDischargeSchema);

export default PhysicianDischarges;
