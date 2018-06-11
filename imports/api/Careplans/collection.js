import { Mongo } from "meteor/mongo";
import CareplanSchema from "./schema";

const Careplans = new Mongo.Collection("careplans");

Careplans.attachSchema(CareplanSchema);

export default Careplans;
