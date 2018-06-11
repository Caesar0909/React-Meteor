import { Mongo } from "meteor/mongo";
import PhysicianSurgicalSchema from "./schema";

const PhysicianSurgicals = new Mongo.Collection("physicianSurgical");

PhysicianSurgicals.attachSchema(PhysicianSurgicalSchema);

export default PhysicianSurgicals;
