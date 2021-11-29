import PropTypes from "prop-types";

const Break = ({ decrement, length, increment }) => (
  <div className="break">
    <span> Break: </span>
    <button onClick={decrement}>
      <i className="fa fa-arrow-down"></i>
    </button>
    <span className="break__length">{length}</span>
    <button onClick={increment}>
      <i className="fa fa-arrow-up"></i>
    </button>
  </div>
);

Break.propTypes = {
  decrement: PropTypes.func,
  length: PropTypes.string,
  increment: PropTypes.func,
};

export default Break;
