import PropTypes from "prop-types";

const Session = ({ decrement, length, increment }) => (
  <div className="session">
    <span> Session: </span>
    <button onClick={decrement}>
      <i className="fa fa-arrow-down"></i>
    </button>
    <span className="session__length">{length}</span>
    <button onClick={increment}>
      <i className="fa fa-arrow-up"></i>
    </button>
  </div>
);

Session.propTypes = {
  decrement: PropTypes.func,
  increment: PropTypes.func,
  length: PropTypes.string,
};

export default Session;
