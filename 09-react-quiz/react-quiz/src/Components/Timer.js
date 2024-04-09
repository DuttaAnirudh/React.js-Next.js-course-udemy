import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const min = Math.trunc(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return function () {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {min.toString().padStart(2, "0")}:{secs.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
