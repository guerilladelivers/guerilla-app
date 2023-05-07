import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EventDetailsCard from "../components/EventDetailsCard";
import EventApi from "../servers/event-api";
import "./HomePage.css";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let eventApi = new EventApi();
    eventApi.getMyEvents().then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1>Events</h1>

      <div className="m-1">
        <div className="title mt-4">
          <h3>Upcoming events</h3>
        </div>
        <Row xs={1} md={2} className="g-4">
          {events.map((e, idx) => (
            <Col key={e.url}>
              <EventDetailsCard event={e} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default HomePage;
