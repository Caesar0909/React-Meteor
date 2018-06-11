import React from "react";
import { Switch, Route } from "react-router-dom";

import Authenticated from "./components/Authenticated/Authenticated";
import Public from "./components/Public/Public";
import Index from "./pages/Index/Index";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import Dashboard from "./pages/Dashboard/Dashboard";
import {
  Patients,
  NewPatient,
  EditPatient,
  ViewPatient
} from "./pages/Patient";
import {
  Admissions,
  NewAdmission,
  ViewAdmission,
  EditAdmission
} from "./pages/Admission";
import { Appointments, NewAppointment } from "./pages/Appointments";
import { EditQuestionnaire } from "./pages/Questionnaire";
import Users from "./pages/Users/Users";
import NotFound from "./pages/NotFound/NotFound";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import { Careplans, ViewCareplan } from "./pages/Careplan";
import ClinicalFormsPage from "./pages/ClinicalFormsPage/ClinicalFormsPage";
import Profile from "./pages/Profile/Profile";

const Routes = props => (
  <Switch>
    <Authenticated exact path="/" component={Index} name="index" />
    <Authenticated exact path="/dashboard" component={Dashboard} {...props} />
    <Authenticated exact path="/patients" component={Patients} {...props} />
    <Authenticated
      exact
      path="/patients/new"
      component={NewPatient}
      {...props}
    />
    <Authenticated
      exact
      path="/patients/:_id"
      component={ViewPatient}
      {...props}
    />
    <Authenticated
      exact
      path="/patients/:_id/edit"
      component={EditPatient}
      {...props}
    />
    <Authenticated exact path="/admissions" component={Admissions} {...props} />
    <Authenticated
      exact
      path="/admissions/new"
      component={NewAdmission}
      {...props}
    />
    <Authenticated
      exact
      path="/admissions/new/:appointmentId"
      component={NewAdmission}
      {...props}
    />
    <Authenticated
      exact
      path="/admissions/:_id"
      component={ViewAdmission}
      {...props}
    />
    <Authenticated
      exact
      path="/admissions/:_id/edit"
      component={EditAdmission}
      {...props}
    />
    <Authenticated
      exact
      path="/appointments"
      component={Appointments}
      {...props}
    />
    <Authenticated
      exact
      path="/appointments/new"
      component={NewAppointment}
      {...props}
    />
    <Authenticated
      exact
      path="/questionnaires/:_id/:part?"
      component={EditQuestionnaire}
      {...props}
    />
    <Authenticated exact path="/careplans" component={Careplans} {...props} />
    <Authenticated exact path="/clinicalForms" component={ClinicalFormsPage} {...props} />
    <Authenticated
      exact
      path="/careplans/:_id"
      component={ViewCareplan}
      {...props}
    />
    <Authenticated exact path="/users" component={Users} {...props} />
    <Authenticated exact path="/profile" component={Profile} {...props} />
    <Public path="/signup" component={Signup} {...props} />
    <Public path="/login" component={Login} {...props} />
    <Route name="terms" path="/logout" component={Logout} {...props} />
    <Authenticated path="/logout" component={Logout} {...props} />
    <Route name="terms" path="/terms" component={Terms} />
    <Route name="privacy" path="/privacy" component={Privacy} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
