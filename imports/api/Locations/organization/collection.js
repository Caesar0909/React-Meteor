import { Mongo } from "meteor/mongo";
import OrganizationsSchema from "./schema.js";

const Organizations = new Mongo.Collection("organizations");
export default Organizations;

Organizations.attachSchema(OrganizationsSchema);
