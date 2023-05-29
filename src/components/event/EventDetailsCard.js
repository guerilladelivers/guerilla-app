import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import BackGroundImage from "../../img/background.png";
import { EventType } from "../../servers/event-bo";
import "./EventDetailsCard.css";

const EventDetailsCard = ({ event, handlePublish }) => {
  const day = new Date(event.start.local).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const startTime = new Date(event.start.local).toLocaleTimeString("en-us", {
    timeStyle: "short",
    hour12: false,
  });

  const endTime = new Date(event.end.local).toLocaleTimeString("en-us", {
    timeStyle: "short",
    hour12: false,
  });

  return (
    <Card className="bg-light text-dark" style={{ height: "600px" }}>
      <Card.Img
        src={event.logo?.url ?? BackGroundImage}
        alt="Background image"
        className="card-img-top"
      />
      <Card.Body>
        <Card.Title className="text-truncate">{event.name.text}</Card.Title>
        <Card.Text className="text-time">
          {`${day} at ${startTime} - ${endTime}`}
        </Card.Text>
        <Card.Text>{event.summary}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Link href={event.url} className="text-link">
            Preview
          </Card.Link>
          {event.status === EventType.Draft && (
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => handlePublish(event.id)}
            >
              Publish
            </Button>
          )}
        </div>
        {event.status === EventType.Live && (
          <div className="d-flex justify-content-center mt-4">
            <FacebookShareButton
              url={event.url}
              quote={"Guerilla Delivers"}
              hashtag="#guerilla"
            >
              <FacebookIcon size={48} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={event.url}
              quote={"Guerilla Delivers"}
              hashtag="#guerilla"
            >
              <TwitterIcon size={48} round />
            </TwitterShareButton>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default EventDetailsCard;
