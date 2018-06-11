import React, { PropTypes } from "react";

const SurgeryPathway = props => {
  return (
    <div className="widget-15 card no-border bg-primary no-margin">
      <div className="card-header  top-left top-right ">
        <div className="card-title text-white hint-text">
          <span className="font-montserrat fs-11 all-caps">
            Surgery Pathway
          </span>
        </div>
        <div className="card-controls">
          <ul>
            <li>
              <a
                data-toggle="refresh"
                className="card-refresh text-black"
                href="#"
              >
                <i className="card-icon card-icon-refresh" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-block p-t-40">
        <div className="row">
          <div className="col-sm-12 text-white">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="pull-left semi-bold text-warning">Total</h4>
                <h4 className="pull-right bold text-warning">51</h4>
              </div>
            </div>
            <div className="widget-17-weather">
              <div className="row">
                <div className="col-12 p-r-10">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pull-left">Surgery Waitlist</p>
                      <p className="pull-right bold">5</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pull-left">Surgery Planned</p>
                      <p className="pull-right bold">10</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pull-left">Recovery/ICU</p>
                      <p className="pull-right bold">15</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pull-left">3M F/P</p>
                      <p className="pull-right bold">15</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pull-left">12M F/P</p>
                      <p className="pull-right bold">1</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pull-left">Completed</p>
                      <p className="pull-right bold">1</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pull-left">Withdrew</p>
                      <p className="pull-right bold">0</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="pull-left">Cancelled</p>
                      <p className="pull-right bold">0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
};

SurgeryPathway.propTypes = {};

export default SurgeryPathway;
