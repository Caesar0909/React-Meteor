import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const CareplanHorizontalCard = ({ careplan }) => {
  let newarr = [];
  let statusarr = ['Completed', 'In_progress', 'Not_started'];

  careplan.questionnaires.forEach(function (item) {
    newarr.push(item);
  });
  let sortfunc = function (a, b) {
    if (a.dueDate == b.dueDate) {
      return statusarr.indexOf(a.status)-statusarr.indexOf(b.status);
    } else {
      return a.dueDate - b.dueDate;
    }
  };
  let i = 0, j = 0, tmp;
  for (; i<newarr.length; i++) {
    for (j = i+1; j < newarr.length; j++) {
      if (sortfunc(newarr[i], newarr[j]) > 0) {
        tmp = newarr[i];
        newarr[i] = newarr[j];
        newarr[j] = tmp;
      }
    }
  }

  return (
    <div className="card-block">
      <ul
        className="nav nav-tabs nav-tabs-simple m-b-20"
        role="tablist"
        data-init-reponsive-tabs="collapse"
      >
        <li className="nav-item">
          <a
            href="#pending"
            className="active"
            data-toggle="tab"
            role="tab"
            aria-expanded="true"
          >
            physician forms
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#completed"
            data-toggle="tab"
            role="tab"
            aria-expanded="false"
            className=""
          >
            patient forms
          </a>
        </li>
      </ul>
      <div className="tab-content no-padding">
        <div className="tab-pane active" id="pending" aria-expanded="true">
          {newarr.map(questionnaire => (
            <Link
              key={questionnaire._id}
              to={`/questionnaires/${questionnaire._id}`}
            >
              <div className="p-t-15">
                <div className="d-flex">
                  {/* <span className="icon-thumbnail bg-master-light pull-left text-master">
                  ws
                </span> */}
                  <div className="flex-1 full-width overflow-ellipsis">
                    <span className="label">{questionnaire.status}</span>
                    <h5 className="no-margin overflow-ellipsis ">
                      {questionnaire.name}
                    </h5>
                    <span className="label success">{questionnaire.dueDate}</span>
                  </div>
                </div>
                {/* <div className="m-t-15">
                <p className="hint-text fade small pull-left">
                  Last <Moment calendar>{questionnaire.createdAt}</Moment>
                </p>
                <i className="pg-more pull-right text-master" />
                <div className="clearfix" />
              </div> */}
                <div className="progress progress-small m-b-15 m-t-10">
                  <div
                    className="progress-bar progress-bar-info"
                    style={ questionnaire.status == 'Completed' ? {width: "100%"}
                      : questionnaire.status == 'Not_started' ? {width: "0%" } : {width: "71%" }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

CareplanHorizontalCard.propTypes = {
  careplan: PropTypes.object.isRequired
};

export default CareplanHorizontalCard;
