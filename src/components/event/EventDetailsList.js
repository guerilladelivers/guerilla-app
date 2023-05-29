import React from "react";
import { Col, Row } from "react-bootstrap";
import EventDetailsCard from "./EventDetailsCard";
import "./EventDetailsCard.css";

const EventDetailsList = ({ eventList, handlePublish }) => {
  return (
    <Row xs={1} md={3} className="g-4">
      {eventList.map((e) => (
        <Col key={e.url}>
          <EventDetailsCard event={e} handlePublish={handlePublish} />
        </Col>
      ))}
    </Row>
  );
};

export default EventDetailsList;
