import { Mongo } from "meteor/mongo";
import QuestionnairesSchema from "./schema";

const Questionnaires = new Mongo.Collection("questionnaires");

Questionnaires.attachSchema(QuestionnairesSchema);

export default Questionnaires;
