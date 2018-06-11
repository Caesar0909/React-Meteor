import { Mongo } from "meteor/mongo";
import SectionsSchema from "./schema";

const Sections = new Mongo.Collection("sections");
export default Sections;

Sections.attachSchema(SectionsSchema);
