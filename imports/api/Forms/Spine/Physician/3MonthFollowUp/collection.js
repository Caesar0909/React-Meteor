import { Mongo } from "meteor/mongo";
import Physician3MonthFollowUpSchema from "./schema";

const Physician3MonthFollowUps = new Mongo.Collection(
  "physician3MonthFollowUp"
);

Physician3MonthFollowUps.attachSchema(Physician3MonthFollowUpSchema);

export default Physician3MonthFollowUps;
