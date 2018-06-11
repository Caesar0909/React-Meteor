import { Mongo } from "meteor/mongo";
import PhysicianPre12WkAESchema from "./schema";

const PhysicianPre12WkAEs = new Mongo.Collection("physicianPre12WkAE");

PhysicianPre12WkAEs.attachSchema(PhysicianPre12WkAESchema);

export default PhysicianPre12WkAEs;
