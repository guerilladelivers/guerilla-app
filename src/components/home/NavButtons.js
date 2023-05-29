import { Button } from "react-bootstrap";

const NavButtons = ({ items, handleClick }) => (
  <>
    {items.map((item, idx) => (
      <div className="m-1 mb-2" key={idx}>
        <Button
          variant={item.active ? "outline-primary" : "outline-secondary"}
          active={item.active}
          onClick={() => handleClick(item)}
        >
          {item.text}
        </Button>
      </div>
    ))}
  </>
);

export default NavButtons;
