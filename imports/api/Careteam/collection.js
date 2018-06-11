import Mongo from "meteor/mongo";
import CareteamsSchema from "./schema";

const Careteams = new Mongo.Collection("careteams");

Careteams.attachSchema(CareteamsSchema);

export default Careteams;
