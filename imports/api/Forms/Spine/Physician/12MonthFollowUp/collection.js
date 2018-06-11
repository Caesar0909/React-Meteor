import { Mongo } from "meteor/mongo";
import Physician12MonthFollowUpSchema from "./schema";

const Physician12MonthFollowUps = new Mongo.Collection(
  "physician12MonthFollowUp"
);

Physician12MonthFollowUps.attachSchema(Physician12MonthFollowUpSchema);

export default Physician12MonthFollowUps;
