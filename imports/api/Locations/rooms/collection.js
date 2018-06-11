import { Mongo } from "meteor/mongo";
import RoomsSchema from "./schema.js";

const Rooms = new Mongo.Collection("rooms");
export default Rooms;

Rooms.attachSchema(RoomsSchema);
