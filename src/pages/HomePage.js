import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import EventCreatingForm from "../components/event/EventCreatingForm";
import EventDetailsCard from "../components/event/EventDetailsCard";
import CreateEventModal from "../components/home/CreateEventModal";
import NavButtons from "../components/home/NavButtons";
import Loading from "../components/util/Loading";
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

  const navItems = [
    {
      text: "Upcoming",
      active: true,
    },
    {
      text: "Past",
    },
  ];

  return (
    <Container className="p-3 mb-4 bg-light rounded-3">
      <h1>Events</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="m-1">
            <Row>
              <Col className="mt-4 d-flex flex-row">
                <NavButtons items={navItems} />
              </Col>
              <Col className="mt-4 mb-2 d-flex flex-row-reverse">
                <Button variant="primary" onClick={handleShowCreateEventModal}>
                  Create New Event
                </Button>

                <CreateEventModal
                  isShowModal={showCreatEvent}
                  onHandleClose={handleCloseCreateEventModal}
                  onHandleSubmit={handleEventCreate}
                >
                  <EventCreatingForm
                    event={eventInfo}
                    handleChange={handleEventChange}
                  />
                </CreateEventModal>
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
