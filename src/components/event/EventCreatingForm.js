import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const EventCreatingForm = ({ event, handleChange }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEventName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          value={event.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Row className="mb-3" xs={1} md={3}>
        <Form.Group as={Col} controlId="formEventDate">
          <Form.Label>Event Date:</Form.Label>
          <Form.Control
            name="eventDate"
            type="date"
            value={event.eventDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formStartTime">
          <Form.Label>Start Time:</Form.Label>
          <Form.Control
            name="startTime"
            type="time"
            step="1800"
            value={event.startTime}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formEndTime">
          <Form.Label>End Time:</Form.Label>
          <Form.Control
            name="endTime"
            type="time"
            step="1800"
            value={event.endTime}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location:</Form.Label>
        <Form.Control
          name="location"
          placeholder="1234 Main St"
          value={event.location}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formQuantity">
        <Col>
          <Form.Label className="mt-2">How many:</Form.Label>
        </Col>
        <Col>
          <Form.Control
            name="quantity"
            type="number"
            step="1"
            value={event.quantity}
            onChange={handleChange}
          />
        </Col>
        <Col></Col>
        <Col></Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPrice">
        <Col>
          <Form.Label className="mt-2">Price(CAD):</Form.Label>
        </Col>
        <Col>
          <Form.Control
            name="price"
            type="number"
            step="0.01"
            value={event.price}
            onChange={handleChange}
          />
        </Col>
        <Col></Col>
        <Col></Col>
      </Form.Group>
    </Form>
  );
};

export default EventCreatingForm;
