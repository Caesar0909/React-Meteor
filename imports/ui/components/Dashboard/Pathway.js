import React, { PropTypes } from "react";

const Pathway = props => {
  return (
    <div className="widget-15 card no-border bg-info-dark no-margin">
      <div className="card-header top-left top-right ">
        <div className="card-title text-white hint-text">
          <span className="font-montserrat fs-11 all-caps">
            Followup Pathway
          </span>
        </div>
      </div>
      <div className="card-block p-t-40 text-white">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="pull-left semi-bold text-white">Total</h4>
                <h4 className="pull-right text-white bold">21</h4>
              </div>
            </div>
            <div className="widget-17-weather">
              <div className="row">
                <div className="col-12">
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
                      <p className="pull-left">Withdrew/Cancelled</p>
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

Pathway.propTypes = {};

export default Pathway;
