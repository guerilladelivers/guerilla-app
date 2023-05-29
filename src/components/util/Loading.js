import { Spinner } from "react-bootstrap";

const Loading = () => (
  <Spinner animation="border" role="status" className="align-items-center">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

export default Loading;
