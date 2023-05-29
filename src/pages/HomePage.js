import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import EventCreatingForm from "../components/event/EventCreatingForm";
import EventDetailsList from "../components/event/EventDetailsList";
import CreateEventModal from "../components/home/CreateEventModal";
import NavButtons from "../components/home/NavButtons";
import Loading from "../components/util/Loading";
import { eventBO } from "../servers";
import { EventType } from "../servers/event-bo";
import "./HomePage.css";

const initalNavItems = [
  {
    id: EventType.Live,
    text: "Upcomming",
    active: false,
  },
  {
    id: EventType.Past,
    text: "Past",
    active: false,
  },
  {
    id: EventType.Draft,
    text: "Draft",
    active: false,
  },
];

const HomePage = () => {
  const [eventList, setEventList] = useState([]);
  const [navItems, setNavItems] = useState(initalNavItems);
  const [showCreatEvent, setShowCreatEvent] = useState(false);
  const [eventInfo, setEventInfo] = useState({
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
  };

  const handleEventCreate = () => {
    eventBO.copyEvent(eventInfo).then((data) => {
      setShowCreatEvent(false);
    });
  };

  const fetchEvents = (item) => {
    setIsLoading(true);
    eventBO
      .getEvents(item.id)
      .then((data) => {
        setEventList(data);
      })
      .finally(() => {
        setIsLoading(false);
        setNavItems(
          navItems.map((nav) => {
            if (nav.id === item.id) {
              return { ...nav, active: true };
            } else {
              return { ...nav, active: false };
            }
          })
        );
        console.log(navItems);
      });
  };

  useEffect(() => {
    setNavItems(initalNavItems);
    fetchEvents(navItems[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <NavButtons items={navItems} handleClick={fetchEvents} />
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

            <EventDetailsList
              eventList={eventList}
              handlePublish={handleEventPublish}
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default HomePage;
