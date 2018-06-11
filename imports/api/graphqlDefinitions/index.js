import merge from "lodash/merge";

// RESOLVERS
import UsersResolvers from "../Users/resolvers";
import PatientsResolvers from "../Patients/resolvers";
import CareplansResolvers from "../Careplans/resolvers";
import LocationsResolvers from "../Locations/resolvers";
import AdmissionsResolvers from "../Admissions/resolvers";
import QuestionnairesResolvers from "../Questionnaires/resolvers";
import AppointmentsResolvers from "../Appointments/resolvers";
import InitialClinicalAssessmentResolvers from "../Forms/initialClinicalAssessment/resolvers";
import Physician3MonthFollowResolvers from "../Forms/Spine/Physician/3MonthFollowUp/resolvers";
import Physician12MonthFollowResolvers from "../Forms/Spine/Physician/12MonthFollowUp/resolvers";
import Physician24MonthFollowResolvers from "../Forms/Spine/Physician/24MonthFollowUp/resolvers";
import PhysicianDischargeResolvers from "../Forms/Spine/Physician/Discharge/resolvers";
import PhysicianSurgicalResolvers from "../Forms/Spine/Physician/Surgical/resolvers";
import PhysicianPre12WkAEResolvers from "../Forms/Spine/Physician/Pre12WkAE/resolvers";

// SCHEMAS
import UsersTypeDefs from "../Users/schema.graphql";
import PatientsTypeDefs from "../Patients/schema.graphql";
import CareplansTypeDefs from "../Careplans/schema.graphql";
import LocationsTypeDefs from "../Locations/schema.graphql";
import AdmissionsTypeDefs from "../Admissions/schema.graphql";
import QuestionnairesTypeDefs from "../Questionnaires/schema.graphql";
import AppointmentsTypeDefs from "../Appointments/schema.graphql";
import CharlestonTypeDefs from "../Forms/initialClinicalAssessment/subpages/charleston/schema.graphql";
import GlasgowTypeDefs from "../Forms/initialClinicalAssessment/subpages/glasgow/schema.graphql";
import AissTypeDefs from "../Forms/initialClinicalAssessment/subpages/aiss/schema.graphql";
import MechanismTypeDefs from "../Forms/initialClinicalAssessment/subpages/mechanism/schema.graphql";
import InitialClinicalAssessmentTypeDefs from "../Forms/initialClinicalAssessment/schema.graphql";
import Physician3MonthFollowTypeDefs from "../Forms/Spine/Physician/3MonthFollowUp/schema.graphql";
import Physician12MonthFollowTypeDefs from "../Forms/Spine/Physician/12MonthFollowUp/schema.graphql";
import Physician24MonthFollowTypeDefs from "../Forms/Spine/Physician/24MonthFollowUp/schema.graphql";
import PhysicianPre12WkAEDefs from "../Forms/Spine/Physician/Pre12WkAE/schema.graphql";
import PhysicianDischargeDefs from "../Forms/Spine/Physician/Discharge/schema.graphql";
import PhysicianSurgicalDefs from "../Forms/Spine/Physician/Surgical/schema.graphql";

// DEFAULTS
import PatientsDefaults from "../Patients/defaults";
import UsersDefaults from "../Users/defaults";
import LocationsDefaults from "../Locations/defaults";
import AdmissionsDefaults from "../Admissions/defaults";
import QuestionnairesDefaults from "../Questionnaires/defaults";
import AppointmentsDefaults from "../Appointments/defaults";
import CareplansDefaults from "../Careplans/defaults";
import InitialClinicalAssessmentDefaults from "../Forms/initialClinicalAssessment/defaults";
import Physician3MonthFollowDefaults from "../Forms/Spine/Physician/3MonthFollowUp/defaults";
import Physician12MonthFollowDefaults from "../Forms/Spine/Physician/12MonthFollowUp/defaults";
import Physician24MonthFollowDefaults from "../Forms/Spine/Physician/24MonthFollowUp/defaults";
import PhysicianDischargeDefaults from "../Forms/Spine/Physician/Discharge/defaults";
import PhysicianSurgicalDefaults from "../Forms/Spine/Physician/Surgical/defaults";
import PhysicianPre12WkAEDefaults from "../Forms/Spine/Physician/Pre12WkAE/defaults";

const resolvers = merge(
  PatientsResolvers,
  UsersResolvers,
  CareplansResolvers,
  LocationsResolvers,
  AdmissionsResolvers,
  QuestionnairesResolvers,
  AppointmentsResolvers,
  InitialClinicalAssessmentResolvers,
  Physician3MonthFollowResolvers,
  Physician12MonthFollowResolvers,
  Physician24MonthFollowResolvers,
  PhysicianDischargeResolvers,
  PhysicianSurgicalResolvers,
  PhysicianPre12WkAEResolvers
);

const typeDefs = [
  PatientsTypeDefs,
  UsersTypeDefs,
  LocationsTypeDefs,
  AdmissionsTypeDefs,
  CareplansTypeDefs,
  QuestionnairesTypeDefs,
  AppointmentsTypeDefs,
  CharlestonTypeDefs,
  GlasgowTypeDefs,
  AissTypeDefs,
  MechanismTypeDefs,
  InitialClinicalAssessmentTypeDefs,
  Physician3MonthFollowTypeDefs,
  Physician12MonthFollowTypeDefs,
  Physician24MonthFollowTypeDefs,
  PhysicianDischargeDefs,
  PhysicianSurgicalDefs,
  PhysicianPre12WkAEDefs
];

const defaults = merge(
  PatientsDefaults,
  UsersDefaults,
  LocationsDefaults,
  AdmissionsDefaults,
  QuestionnairesDefaults,
  AppointmentsDefaults,
  InitialClinicalAssessmentDefaults,
  CareplansDefaults,
  Physician3MonthFollowDefaults,
  Physician12MonthFollowDefaults,
  Physician24MonthFollowDefaults,
  PhysicianDischargeDefaults,
  PhysicianSurgicalDefaults,
  PhysicianPre12WkAEDefaults
);

export { defaults, resolvers, typeDefs };
