import { Mongo } from "meteor/mongo";
import Physician24MonthFollowUpSchema from "./schema";

const Physician24MonthFollowUps = new Mongo.Collection(
  "physician24MonthFollowUp"
);

Physician24MonthFollowUps.attachSchema(Physician24MonthFollowUpSchema);

export default Physician24MonthFollowUps;
