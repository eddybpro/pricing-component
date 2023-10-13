import PropTypes from "prop-types";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <h1 className="Title">our pricing</h1>
      <label htmlFor="annual">
        annually
        <input
          type="checkbox"
          name="annual"
          id="annual"
          className="check"
          value={props.annual}
          onChange={() =>
            props.setAnnually((prev) => ({ ...prev, isAnnual: !prev.isAnnual }))
          }
        />
        monthly
      </label>
    </header>
  );
}

Header.propTypes = {
  setAnnually: PropTypes.func,
  annual: PropTypes.bool,
};

export default Header;
