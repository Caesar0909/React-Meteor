import React from "react";
import PropTypes from "prop-types";

const WizardFooter = ({
  changeStep,
  step,
  submitPage,
  disabled,
  nextButton
}) => (
  <div className="padding-20 sm-padding-5 sm-m-b-20 sm-m-t-20 bg-white clearfix fixed">
    <ul className="pager wizard no-style">
      {submitPage ? (
        <li className="next finish">
          <button
            className="btn btn-success btn-cons btn-animated from-left fa pull-right fa-save"
            type="submit"
            disabled={disabled}
          >
            <span>Finish</span>
          </button>
        </li>
      ) : (
        ""
      )}
      {!submitPage ? (
        <li className="next">
          <button
            className="btn btn-primary btn-cons btn-animated from-left fa pull-right fa-arrow-right"
            type="button"
            disabled={!nextButton}
            onClick={() => changeStep(1)}
          >
            <span>Next</span>
          </button>
        </li>
      ) : (
        ""
      )}
      {step > 0 ? (
        <li>
          <button
            onClick={() => changeStep(-1)}
            className="btn btn-default btn-cons pull-right"
            type="button"
          >
            <span>Previous</span>
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
    <style jsx="true">
      {`
        .fixed {
          position: fixed;
          top: auto;
          bottom: 0;
          width: 100%;
          left: 0;
          right: 0;
        }
      `}
    </style>
  </div>
);

WizardFooter.defaultProps = {
  disabled: false
};

WizardFooter.propTypes = {
  changeStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  submitPage: PropTypes.bool.isRequired,
  nextButton: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

export default WizardFooter;
