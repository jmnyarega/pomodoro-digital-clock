import PropTypes from "prop-types";
import { formatClock } from "./utils";

const isRunning = (running) => running === "break" || running === "session";

const Clock = ({ secs, begin, stop, reset, running, toggleSetting }) => (
  <div className="clock">
    <div className="clock__screen">
      <p className="clock__status">{running}</p>
      <p className="clock__time">{formatClock(secs)}</p>
    </div>
    <div className="clock__buttons">
      <button onClick={isRunning(running) ? stop : begin}>
        <i className={`fa ${isRunning(running) ? "fa-pause" : "fa-play"}`}></i>
      </button>
      <button onClick={reset}>
        <i className="fa fa-refresh"></i>
      </button>
      <button onClick={toggleSetting}>
        <i className="fa fa-cog"></i>
      </button>
    </div>
  </div>
);

Clock.protoType = {
  secs: PropTypes.number,
  pause: PropTypes.func,
  begin: PropTypes.func,
  reset: PropTypes.func,
  toggleSetting: PropTypes.func,
  running: PropTypes.string,
};

export default Clock;
