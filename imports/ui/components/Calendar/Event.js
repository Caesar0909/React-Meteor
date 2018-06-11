import React from "react";
import { PropTypes } from "prop-types";
import Moment from "react-moment";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

import {
  CANCELLED,
  COMPLETED,
  SCHEDULED
} from "../../../Constants/AppointmentStatus";
import cancelReasons from "../../../Constants/CancelReasons";
import CancelAppointment from "../../components/CancelAppointment/CancelAppointment";

const Event = ({
  history,
  event,
  show,
  onClose,
  showModal,
  toggleModal,
  onCancelAppointmentClick,
  handleCancelReasonChange,
  cancelReason,
  handleCancelCommentChange,
  comment
}) => {
  return (
    <div
      className={`quickview-wrapper calendar-event ${show ? "open" : ""}`}
      id="calendar-event"
    >
      <div className="view-port clearfix" id="eventFormController">
        <div className="view bg-white">
          <div
            className="scroll-wrapper scrollable"
            style={{ position: "relative" }}
          >
            <div
              className="scrollable scroll-content scroll-scrolly_visible"
              style={{
                height: "auto",
                "margin-bottom": "0px",
                "margin-right": "0px"
              }}
            >
              <div className="p-l-30 p-r-30 p-t-20">
                <h4 id="event-date">
                  {`Created At `}
                  <Moment calendar>{event.createdAt}</Moment>
                </h4>
                <div className="m-b-20">
                  <i className="fa fa-clock-o" />
                  <span id="lblfromTime">
                    <Moment format="DD/MM/YY HH:mm">{event.start}</Moment>
                  </span>{" "}
                  {`to `}
                  <span id="lbltoTime">
                    <Moment format="DD/MM/YY HH:mm">{event.end}</Moment>
                  </span>
                </div>
              </div>
              <div className="p-t-15">
                <input
                  id="eventIndex"
                  name="eventIndex"
                  type="hidden"
                  value="3"
                />
                <div className="form-group-attached">
                  <div className="form-group form-group-default ">
                    <label htmlFor="txtEventName">
                      Title
                      <input
                        type="text"
                        className="form-control"
                        id="txtEventName"
                        value={event.title}
                        placeholder="event name"
                      />
                    </label>
                  </div>
                  <div className="row clearfix cursor">
                    <div className="p-l-30 p-r-30 p-t-30">
                      <Button
                        color="primary"
                        onClick={() =>
                          history.push(`/admissions/new/${event._id}`)
                        }
                        disabled={
                          event.status === CANCELLED ||
                          event.status === COMPLETED
                        }
                      >
                        Admit
                      </Button>
                      <Button
                        color="primary"
                        onClick={() =>
                          history.push(
                            `/patients/${
                              event.patient ? event.patient._id : ""
                            }`
                          )
                        }
                        disabled={event.status === CANCELLED}
                      >
                        View
                      </Button>
                      <Button
                        onClick={toggleModal}
                        color="primary"
                        disabled={event.status === CANCELLED}
                      >
                        Cancel
                      </Button>
                      <Modal isOpen={showModal}>
                        <ModalHeader toggle={() => toggleModal()}>
                          Cancel Appointment
                        </ModalHeader>
                        <Form>
                          <ModalBody>
                            <FormGroup>
                              <hr />
                              <Label>Reason for cancelling appointment</Label>
                              <Input
                                type="select"
                                name="reason"
                                onChange={handleCancelReasonChange}
                              >
                                <option value="">Select one reason</option>;
                                {cancelReasons.map(({ value, label }) => (
                                  <option key={`option-${value}`} value={value}>
                                    {label}
                                  </option>
                                ))}
                              </Input>
                              <Label>Comment</Label>
                              <textarea
                                className="form-control"
                                name="comment"
                                onChange={handleCancelCommentChange}
                              />
                            </FormGroup>
                          </ModalBody>
                          <ModalFooter>
                            <Button onClick={() => toggleModal()}>
                              Cancel
                            </Button>
                            <CancelAppointment
                              _id={event._id}
                              onCancelAppointmentClick={
                                onCancelAppointmentClick
                              }
                              cancelReason={cancelReason}
                              comment={comment}
                              patientName={
                                event.patient ? event.patient.firstName : ""
                              }
                              history={history}
                            />
                          </ModalFooter>
                        </Form>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-l-30 p-r-30 p-t-30">
                <button
                  id="eventDelete"
                  className="btn btn-white"
                  onClick={() => onClose()}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="scroll-element scroll-x scroll-scrolly_visible">
              <div className="scroll-element_outer">
                <div className="scroll-element_size" />
                <div className="scroll-element_track" />
                <div className="scroll-bar" style={{ width: "89px" }} />
              </div>
            </div>
            <div className="scroll-element scroll-y scroll-scrolly_visible">
              <div className="scroll-element_outer">
                <div className="scroll-element_size" />
                <div className="scroll-element_track" />
                <div
                  className="scroll-bar"
                  style={{ height: "340px", top: "0px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  history: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  cancelReason: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onCancelAppointmentClick: PropTypes.func.isRequired,
  handleCancelReasonChange: PropTypes.func.isRequired,
  handleCancelCommentChange: PropTypes.func.isRequired
};

export default Event;
