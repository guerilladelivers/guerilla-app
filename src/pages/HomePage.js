import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row, Spinner } from "react-bootstrap";
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
  const [isLoading, setIsLoading] = useState(false);
  const [invalidate, setInvalidate] = useState(true);

  const handleCloseCreateEventModal = () => setShowCreatEvent(false);
  const handleShowCreateEventModal = () => setShowCreatEvent(true);

  const handleEventChange = (e) => {
    setEventInfo({
      ...eventInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleEventPublish = (eventId) => {
    eventBO.publishEvent(eventId);
    setInvalidate(true);
  };

  const handleEventCreate = () => {
    eventBO.copyEvent(eventInfo).then((data) => {
      console.log("after copied", data);
      setShowCreatEvent(false);
      setInvalidate(true);
    });
  };

  useEffect(() => {
    if (invalidate) {
      setIsLoading(true);
      eventBO
        .getLiveEvents()
        .then((data) => {
          setUpcommingEvents(data);
        })
        .then(() => eventBO.getDraftEvents())
        .then((data) => {
          setDraftEvents(data);
        })
        .finally(() => {
          setInvalidate(false);
          setIsLoading(false);
        });
    }
  }, [invalidate]);

  return (
    <Container className="p-3 mb-4 bg-light rounded-3">
      <h1>Events</h1>
      {isLoading ? (
        <Spinner
          animation="border"
          role="status"
          className="align-items-center"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <div className="m-1">
            <Row>
              <Col className="title mt-4">
                <p>Upcoming events</p>
              </Col>
              <Col className="mt-4 mb-2 d-flex flex-row-reverse">
                <Button variant="primary" onClick={handleShowCreateEventModal}>
                  Create New Event
                </Button>

                <Modal
                  show={showCreatEvent}
                  onHide={handleCloseCreateEventModal}
                >
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
                  <EventDetailsCard event={e} />
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
                  <EventDetailsCard
                    event={e}
                    handlePublish={handleEventPublish}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </Container>
  );
};

export default HomePage;
