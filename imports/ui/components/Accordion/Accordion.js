import React from "react";
import PropTypes from "prop-types";
import AccordionCard from "./AccordionCard";

const Accordion = ({ children }) => (
  <div className="sm-m-l-5 sm-m-r-5">
    <div
      className="card-group horizontal"
      id="accordion"
      role="tablist"
      aria-multiselectable="true"
    >
      {children.map((item, i) => (
        <AccordionCard key={item._id} data={item} open={i === 0} />
      ))}
    </div>
  </div>
);

Accordion.propTypes = {
  children: PropTypes.object.isRequired
};

export default Accordion;
