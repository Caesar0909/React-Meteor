import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Container, Table } from "reactstrap";

const Summary = ({ model, schema }) => (
  <Container>
    <h3>Summary</h3>
    <Table striped bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(model).map(
          item =>
            /* eslint-disable no-nested-ternary */
            model[item] ? (
              typeof model[item] === "object" ? (
                Object.keys(model[item]).map((key, i) => {
                  return model[item][key] ? (
                    <tr
                      key={item + i}
                      style={
                        item === "_id" || item === "__typename"
                          ? { display: "none" }
                          : {}
                      }
                    >
                      <td>{schema.label()[`${item}.${key}`]}</td>
                      <td>
                        {/\bdate|\bDate|\bcreated/.test(item) ? (
                          <Moment calendar>{key[1]}</Moment>
                        ) : (
                          model[item][key].toString() || ""
                        )}
                      </td>
                    </tr>
                  ) : (
                    ""
                  );
                })
              ) : (
                <tr
                  key={item}
                  style={
                    item === "_id" || item === "__typename"
                      ? { display: "none" }
                      : {}
                  }
                >
                  <td>{schema.label()[item]}</td>
                  <td>{model[item].toString()}</td>
                </tr>
              )
            ) : null
        )}
      </tbody>
    </Table>
  </Container>
);

Summary.propTypes = {
  model: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired
};

export default Summary;
