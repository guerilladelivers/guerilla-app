import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const EventCreatingForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
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

      <Form.Group className="mb-3" controlId="formAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EventCreatingForm;
