import React, { PropTypes } from "react";

const Appointments = props => {
  return (
    <div className="ar-2-3">
      <div className="widget-16 card no-border  no-margin widget-loader-bar">
        <div className="card-header  ">
          <div className="card-title">Today's</div>
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
        <div className="p-l-25 p-r-25 p-b-20">
          <div className="pull-left">
            <h2 className="text-success no-margin">Appointments</h2>
          </div>
          <h3 className="pull-right semi-bold">
            {/* need to write a query to take the sum of all appointments for the current day (00:00 to 23:59 )
                and adjust for the user's time zone */}
            15
          </h3>
          <div className="clearfix" />
        </div>
        {/* For each dashboard card, we display the pathway name in one column,
                and the sum of the number of patients who have that pathway status in the 2nd column.
                This means that we need to track these values in the DB.  Ie Each time a form is submitted
                and the pathway status updates we recalculate the totals for each pathway.
                  */}

        <div className="widget-11-table auto-overflow">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>
                  <div className="widget-16-header d-flex">
                    <span className="icon-thumbnail bg-master-light pull-left text-master">
                      <img
                        alt="Avatar"
                        width="33"
                        height="33"
                        data-src-retina="profiles/avatar_small2x.jpg"
                        data-src="profiles/avatar.jpg"
                        src="profiles/avatar_small2x.jpg"
                      />
                    </span>
                    <div className="flex-1 full-width overflow-ellipsis">
                      <p className="hint-text all-caps font-montserrat  small no-margin overflow-ellipsis ">
                        Undiagnosed
                      </p>
                      <h5 className="no-margin overflow-ellipsis ">
                        Patient Name
                      </h5>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <button type="button" className="btn btn-default btn-xs">
                    Check-in
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="widget-16-header d-flex">
                    <span className="icon-thumbnail bg-master-light pull-left text-master">
                      <img
                        alt="Avatar"
                        width="33"
                        height="33"
                        data-src-retina="profiles/avatar_small2x.jpg"
                        data-src="profiles/avatar.jpg"
                        src="profiles/avatar_small2x.jpg"
                      />
                    </span>
                    <div className="flex-1 full-width overflow-ellipsis">
                      <p className="hint-text all-caps font-montserrat  small no-margin overflow-ellipsis ">
                        Undiagnosed
                      </p>
                      <h5 className="no-margin overflow-ellipsis ">
                        Patient Name
                      </h5>
                    </div>
                  </div>
                </td>
                <td className="">
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <button type="button" className="btn btn-default btn-xs">
                    Check-in
                  </button>
                </td>
              </tr>
              <tr>
                <td className="font-montserrat all-caps fs-12">
                  <h5>Patient Name #</h5>
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <span className="hint-text small">Status</span>
                </td>
                <td>
                  <span className="font-montserrat fs-18 text-primary">
                    Admit
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-montserrat all-caps fs-12">
                  <h5>Patient Name #</h5>
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <span className="hint-text small">Status</span>
                </td>
                <td>
                  <button type="button" className="btn btn-default btn-xs">
                    Check-in
                  </button>
                </td>
              </tr>
              <tr>
                <td className="font-montserrat all-caps fs-12">
                  <h5>Patient Name #</h5>
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <span className="hint-text small">Status</span>
                </td>
                <td>
                  <span className="font-montserrat fs-18 text-primary">
                    Admit
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-montserrat all-caps fs-12">
                  <h5>Patient Name #</h5>
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <span className="hint-text small">Status</span>
                </td>
                <td>
                  <span className="font-montserrat fs-18 text-primary">
                    Admit
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-montserrat all-caps fs-12">
                  <h5>Patient Name #</h5>
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <span className="hint-text small">Status</span>
                </td>
                <td>
                  <span className="font-montserrat fs-18 text-primary">
                    Admit
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-montserrat all-caps fs-12">
                  <h5>Patient Name #</h5>
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <span className="hint-text small">Status</span>
                </td>
                <td>
                  <span className="font-montserrat fs-18 text-primary">
                    Admit
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-montserrat all-caps fs-12">
                  <h5>Patient Name #</h5>
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <span className="hint-text small">Status</span>
                </td>
                <td>
                  <span className="font-montserrat fs-18 text-primary">
                    Admit
                  </span>
                </td>
              </tr>
              <tr>
                <td className="font-montserrat all-caps fs-12">
                  Firstname #
                  <span className="hint-text small">00:00</span>
                </td>
                <td>
                  <span className="hint-text small">Status</span>
                </td>
                <td>
                  <span className="font-montserrat fs-18 text-primary">
                    Admit
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="padding-25">
          <p className="small no-margin">
            <a href="#">
              <i className="fa fs-16 fa-arrow-circle-o-down text-success m-r-10" />
            </a>
            <span className="hint-text ">Show more</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Appointments.propTypes = {};

export default Appointments;
