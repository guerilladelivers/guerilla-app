import { Button, Modal } from "react-bootstrap";

const CreateEventModal = ({
  isShowModal,
  onHandleClose,
  onHandleSubmit,
  children,
}) => (
  <Modal show={isShowModal} onHide={onHandleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Create a new event</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHandleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={onHandleSubmit}>
        Create
      </Button>
    </Modal.Footer>
  </Modal>
);

export default CreateEventModal;
