import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

const LogicBoard = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // The Countdown Loop
  useEffect(() => {
    let interval = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (isActive && secondsLeft === 0) {
      // TIMER HIT ZERO - SHUTDOWN!
      handleTimerEnd();
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const handleTimerEnd = async () => {
    console.log("Timer finished! Sending shutdown command...");
    try {
      await invoke("shutdown_system");
    } catch (error) {
      console.error("Failed to execute shutdown:", error);
    }
  };

  const handleStart = () => {
    const totalSeconds = hours * 3600 + minutes * 60;
    if (totalSeconds > 0) {
      setSecondsLeft(totalSeconds);
      setIsActive(true);
    }
  };

  const handleCancel = () => {
    setIsActive(false);
  };

  // Helper to format 00:00:00
  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="logic-board">
      {!isActive ? (
        <div className="setup-timer">
          <div className="input-group">
            <div className="field">
              <label>HRS</label>
              <input
                type="number"
                min="0"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="field">
              <label>MIN</label>
              <input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
              />
            </div>
          </div>
          <button className="start-btn" onClick={handleStart}>
            START SLEEP
          </button>
        </div>
      ) : (
        <div className="active-timer">
          <h1 className="countdown-display">{formatTime(secondsLeft)}</h1>
          <button className="cancel-btn" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      )}
    </div>
  );
};

export default LogicBoard;
