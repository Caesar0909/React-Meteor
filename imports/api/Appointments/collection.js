import { Mongo } from "meteor/mongo";
import AppointmentsSchema from "./schema";

const Appointments = new Mongo.Collection("appointments");

Appointments.attachSchema(AppointmentsSchema);

export default Appointments;
