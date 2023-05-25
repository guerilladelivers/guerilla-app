import { Button } from "react-bootstrap";

const NavButtons = ({ items }) => (
  <>
    {items.map((item) => (
      <div className="m-1">
        <Button variant={item.active ? "outline-primary" : "outline-secondary"}>
          {item.text}
        </Button>
      </div>
    ))}
  </>
);

export default NavButtons;
