import React from "react";
import Card from "react-bootstrap/Card";
import BackGroundImage from "../img/background.png";
import "./EventDetailsCard.css";

const EventDetailsCard = ({ event, status }) => {
  return (
    <Card className="bg-light text-dark" style={{ height: "650px" }}>
      <Card.Header className="text-truncate">{event.name.text}</Card.Header>
      <Card.Img
        src={event.logo?.url ?? BackGroundImage}
        alt="Background image"
        className="card-img-top"
      />
      <Card.Body>
        <Card.Title className="text-truncate">{event.summary}</Card.Title>
        <Card.Text className="text-time">
          {`${event.start.local}-${event.end.local}`}
        </Card.Text>
        <Card.Text>{event.description.text}</Card.Text>
        <Card.Link href={event.url} className="text-link">
          {status === "live" ? "Joining" : "Publish"}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default EventDetailsCard;
