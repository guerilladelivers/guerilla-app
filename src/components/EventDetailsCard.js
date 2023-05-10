import React from "react";
import { Button, Card } from "react-bootstrap";
import BackGroundImage from "../img/background.png";
import { EventType } from "../servers/event-bo";
import "./EventDetailsCard.css";

const EventDetailsCard = ({ event, handlePublish }) => {
  return (
    <Card className="bg-light text-dark" style={{ height: "650px" }}>
      <Card.Img
        src={event.logo?.url ?? BackGroundImage}
        alt="Background image"
        className="card-img-top"
      />
      <Card.Body>
        <Card.Title className="text-truncate">{event.name.text}</Card.Title>
        <Card.Text className="text-time">
          {`${event.start.local}-${event.end.local}`}
        </Card.Text>
        <Card.Text>{event.summary}</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Link href={event.url} className="text-link">
            Preview
          </Card.Link>
          {event.status === EventType.Draft && (
            <Button variant="primary" onClick={() => handlePublish(event.id)}>
              Publish
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventDetailsCard;
