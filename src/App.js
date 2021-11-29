import { useEffect, useState } from "react";
import AudioSound from "./audio";

// components
import Clock from "./clock";
import Settings from "./settings";

const App = () => {
  const [timerId, setTimerId] = useState();
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(1200);
  const [running, setRunning] = useState("stop");
  const [time, setTime] = useState(sessionLength);
  const [startSession, setStartSession] = useState(false);

  const [showSettings, setToggleSettings] = useState(false);

  const toggleSetting = () => setToggleSettings(!showSettings);

  const breakIncrement = () => {
    let b = breakLength + 60;
    !start() && setBreakLength(b);
  };

  const breakDecrement = () => {
    let b = breakLength - 60;
    b >= 0 && !start() && setBreakLength(b);
  };

  const sessionIncrement = () => {
    let s = sessionLength + 60;
    !start() && setSessionLength(s);
  };

  const sessionDecrement = () => {
    let s = sessionLength - 60;
    s >= 0 && !start() && setSessionLength(s);
  };

  const begin = () => {
    setStartSession(true);
    setRunning("session");
  };

  const start = () => running === "session";

  const startClock = (secs, session_on) => {
    const id = setInterval(() => {
      secs--;
      setTime(secs);

      if (session_on && secs <= 0) {
        secs = breakLength;
        session_on = false;
        setRunning("break");
      }

      if (!session_on && secs <= 0) {
        secs = sessionLength;
        session_on = true;
        setRunning("session");
      }
    }, 1000);
    setTimerId(id);
  };

  const stop = () => {
    clearInterval(timerId);
    setRunning("stop");
  };

  const reset = () => {
    clearInterval(timerId);

    setRunning("stop");

    setSessionLength(1200);
    setBreakLength(300);
    setRunning("stop");
    setTime(1200);
  };

  useEffect(() => {
    if (running === "session" && startSession) {
      startClock(sessionLength, true);
    }
    return () => clearInterval(timerId);

    // I am only listening to start state variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, startSession]);

  return (
    <main>
      <h1 className="title"> 25 + 5 Clock </h1>
      <AudioSound interSession={time === 1} />
      <div className="container">
        {showSettings ? (
          <Settings
            session={{ sessionDecrement, sessionLength, sessionIncrement }}
            block={{ breakLength, breakDecrement, breakIncrement }}
            toggleSetting={toggleSetting}
            reset={reset}
          />
        ) : (
          <Clock
            running={running}
            begin={begin}
            secs={time}
            stop={stop}
            reset={reset}
            toggleSetting={toggleSetting}
          />
        )}
      </div>
    </main>
  );
};

export default App;
