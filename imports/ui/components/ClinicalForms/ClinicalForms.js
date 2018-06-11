import React, { Component } from "react";
import { pure, compose } from "recompose";
import PropTypes from "prop-types";

import { graphql } from "react-apollo";

import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Container,
  Row,
  Col,
  Label
} from "reactstrap";
import questionnaires from "../../../api/Questionnaires/queries/questionnaries.graphql";

class ClinicalForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (this.props.questionnaires && this.props.questionnaires.questionnaires) {
      let table = $('#clinicalforms-table');

      let settings = {
        "sDom": "<'table-responsive't><'row'<p i>>",
        "sPaginationType": "bootstrap",
        "destroy": true,
        "scrollCollapse": true,
        "oLanguage": {
          "sLengthMenu": "_MENU_ ",
          "sInfo": "Showing <b>_START_ to _END_</b> of _TOTAL_ entries"
        },
        "iDisplayLength": 25
      };

      table.dataTable(settings);
      // search box for table
      $('#clinical-forms-search-table').keyup(function () {
        table.fnFilter($(this).val());
      });
    }

  }

  componentDidUpdate() {
    if (this.props.questionnaires && this.props.questionnaires.questionnaires) {
      let table = $('#clinicalforms-table');

      let settings = {
        "sDom": "<'table-responsive't><'row'<p i>>",
        "sPaginationType": "bootstrap",
        "destroy": true,
        "scrollCollapse": true,
        "oLanguage": {
          "sLengthMenu": "_MENU_ ",
          "sInfo": "Showing <b>_START_ to _END_</b> of _TOTAL_ entries"
        },
        "iDisplayLength": 25
      };

      table.dataTable(settings);
      // search box for table
      $('#clinical-forms-search-table').keyup(function () {
        table.fnFilter($(this).val());
      });
    }

  }
  render() {
    const props = this.props;
    return (
      <div className="card card-transparent">
        <div className="card-header ">
          <div className="card-title">Clinical Forms Table
          </div>
          <div className="pull-right">
            <div className="col-xs-12">
              <input type="text" id="clinical-forms-search-table" className="form-control pull-right" placeholder="Search"/>
            </div>
          </div>
          <div className="clearfix">

          </div>
        </div>
        <div className="card-block">
          <table className="table table-hover demo-table-search table-responsive-block" id="clinicalforms-table">
            <thead>
            <tr>
              <th style={{width: "10%"}}>No</th>
              <th className="v-align-middle semi-bold text-center" style={{width: "30%"}}>Type</th>
              <th className="v-align-middle semi-bold text-center" style={{width: "40%"}}>DueDate</th>
              <th style={{width: "20%"}}>Status</th>
            </tr>
            </thead>
            <tbody>
            {
              props.questionnaires && props.questionnaires.questionnaires ?
                props.questionnaires.questionnaires.map((n, i) =>
                  <tr key={i}>
                    <td className="v-align-middle" style={{width: "10%"}}>
                      <p>{i}</p>
                    </td>
                    <td className="v-align-middle text-center" style={{width: "30%"}}>
                      <a href={'questionnaires/' + n._id}>
                        {n.type}
                      </a>
                    </td>
                    <td className="v-align-middle text-center" style={{width: "40%"}}>
                      {n.dueDate}
                    </td>
                    <td className="v-align-middle" style={{width: "20%"}}>
                      {n.careplan.status}
                    </td>
                  </tr>
                )
                : null
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ClinicalForms.defaultProps = {
  questionnaires: []
};

ClinicalForms.propTypes = {
  questionnaires: PropTypes.object.isRequired
};

export default compose(graphql(questionnaires,
  {
    options: {
      variables: {
        filter: {}
      }
    },
    name: 'questionnaires'}), pure)(ClinicalForms);
