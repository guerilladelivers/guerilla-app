import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import EventCreatingForm from "../components/EventCreatingForm";
import EventDetailsCard from "../components/EventDetailsCard";
import { eventBO } from "../servers";
import "./HomePage.css";

const HomePage = () => {
  const [upcomingEvents, setUpcommingEvents] = useState([]);
  const [draftEvents, setDraftEvents] = useState([]);
  const [showCreatEvent, setShowCreatEvent] = useState(false);
  const [eventInfo, setEventInfo] = useState({
    name: "",
  });

  const handleCloseCreateEventModal = () => setShowCreatEvent(false);
  const handleShowCreateEventModal = () => setShowCreatEvent(true);

  const handleEventChange = (e) => {
    setEventInfo({
      ...eventInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleEventCreate = () => {
    console.log(eventInfo);
    eventBO.copyEvents(eventInfo).then((data) => {
      console.log(data);
      setShowCreatEvent(false);
    });
  };

  useEffect(() => {
    eventBO.getLiveEvents().then((data) => {
      setUpcommingEvents(data);
    });

    eventBO.getDraftEvents().then((data) => {
      setDraftEvents(data);
    });
  }, []);

  return (
    <Container className="p-3 mb-4 bg-light rounded-3">
      <h1>Events</h1>

      <div className="m-1">
        <Row>
          <Col className="title mt-4">
            <p>Upcoming events</p>
          </Col>
          <Col className="mt-4 mb-2 d-flex flex-row-reverse">
            <Button variant="primary" onClick={handleShowCreateEventModal}>
              Create New Event
            </Button>

            <Modal show={showCreatEvent} onHide={handleCloseCreateEventModal}>
              <Modal.Header closeButton>
                <Modal.Title>Create a new event</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EventCreatingForm
                  event={eventInfo}
                  handleChange={handleEventChange}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleCloseCreateEventModal}
                >
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleEventCreate}>
                  Create
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>

        <Row xs={1} md={3} className="g-4">
          {upcomingEvents.map((e, idx) => (
            <Col key={e.url}>
              <EventDetailsCard event={e} status={"live"} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="m-1">
        <Row>
          <Col className="title mt-4">
            <p>Draft events</p>
          </Col>
          <Col className="mt-4 mb-2 d-flex flex-row-reverse"></Col>
        </Row>

        <Row xs={1} md={3} className="g-4">
          {draftEvents.map((e, idx) => (
            <Col key={e.url}>
              <EventDetailsCard event={e} status={"draft"} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default HomePage;
