import { Mongo } from "meteor/mongo";
import LocationsSchema from "./schema.js";

const Locations = new Mongo.Collection("locations");
export default Locations;

Locations.attachSchema(LocationsSchema);

// need to split up into rooms/sections/and organization
