import { PropTypes } from "prop-types";

import Break from "./break";
import Session from "./session";
import { formatMins } from "./utils";

const Settings = ({ block, session, toggleSetting, reset }) => (
  <div className="settings">
    <Break
      length={formatMins(block.breakLength)}
      increment={block.breakIncrement}
      decrement={block.breakDecrement}
    />
    <Session
      length={formatMins(session.sessionLength)}
      increment={session.sessionIncrement}
      decrement={session.sessionDecrement}
    />
    <div className="settings__buttons">
      <button onClick={reset}>
        <i className="fa fa-refresh"></i>
      </button>
      <button onClick={toggleSetting}>
        <i className="fa fa-close"></i>
      </button>
    </div>
  </div>
);

Settings.protoType = {
  toggleSetting: PropTypes.func,
  block: PropTypes.Object,
  session: PropTypes.Object,
};

export default Settings;
