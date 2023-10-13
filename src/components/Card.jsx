import { useContext } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { MyContext } from "../App";

function Card(props) {
  const { isAnnual } = useContext(MyContext);
  return (
    <div className="CardWrapper">
      <h2 className="CardWrapper-Title">{props.type}</h2>
      <strong className="CardWrapper-Price">
        ${isAnnual ? props.price.monthly : props.price.annually}
      </strong>
      <ul className="CardWrapper-Features">
        <li>{props.storage} storage</li>
        <li>{props.users} users allowed</li>
        <li>send up to {props.upload}</li>
      </ul>
      <button className="CardWrapper-Btn">learn more</button>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.string,
  storage: PropTypes.string,
  upload: PropTypes.string,
  users: PropTypes.number,
  price: PropTypes.object,
  annual: PropTypes.bool,
};

export default Card;
