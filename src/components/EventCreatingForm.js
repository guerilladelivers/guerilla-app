import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const EventCreatingForm = ({ event, handleChange }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          value={event.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formStartDate">
          <Form.Label>Start Date</Form.Label>
          <Row>
            <Col>
              <Form.Control
                name="startDate"
                type="date"
                value={event.startDate}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                name="startTime"
                type="time"
                value={event.startTime}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formEndDate">
          <Form.Label>End Date</Form.Label>
          <Row>
            <Col>
              <Form.Control
                name="endDate"
                type="date"
                value={event.endDate}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                name="endTime"
                type="time"
                value={event.endTime}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          name="location"
          placeholder="1234 Main St"
          value={event.location}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          rows={3}
          value={event.description}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default EventCreatingForm;
