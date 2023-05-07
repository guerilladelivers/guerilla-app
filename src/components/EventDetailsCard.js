import React from "react";
import Card from "react-bootstrap/Card";
import BackGroundImage from "../img/background.png";
import "./EventDetailsCard.css";

const EventDetailsCard = ({ event }) => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={BackGroundImage} alt="Background image" />
      <Card.ImgOverlay>
        <Card.Title>{event.name.text}</Card.Title>
        <Card.Text className="text-time">
          {`${event.start.local}-${event.end.local}`}
        </Card.Text>
        <Card.Text>{event.description.text}</Card.Text>
        <Card.Link href={event.url} className="text-link">
          Joining
        </Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default EventDetailsCard;
