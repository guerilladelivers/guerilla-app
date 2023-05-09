import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const EventCreatingForm = ({ event, handleChange }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={event.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formStartDate">
          <Form.Label>Start Date</Form.Label>
          <Row>
            <Col>
              <Form.Control type="date" />
            </Col>
            <Col>
              <Form.Control type="time" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formEndDate">
          <Form.Label>End Date</Form.Label>
          <Row>
            <Col>
              <Form.Control type="date" />
            </Col>
            <Col>
              <Form.Control type="time" />
            </Col>
          </Row>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
};

export default EventCreatingForm;
