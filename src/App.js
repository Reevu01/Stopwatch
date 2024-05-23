import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex justify-center items-center h-screen text-center bg-gray-900">
      <div className="max-w-md flex-col py-8 ">
        <h1 className="text-6xl font-semibold text-gray-200">STOPWATCH</h1>
        <div className="text-3xl font-semibold py-6 text-gray-200">
          <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
          <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
          <span> {("0" + Math.floor((time / 10) % 100)).slice(-2)} </span>
        </div>

        <div className="text-2xl justify-evenly flex">
          {running ? (
            <button
              className="border border-transparent py-1 px-3 bg-blue-900 hover:bg-indigo-600 rounded-md text-gray-100"
              onClick={() => {
                setRunning(false);
              }}
            >
              Stop
            </button>
          ) : (
            <button
              className="border border-transparent py-1 px-3 bg-blue-900 hover:bg-indigo-600 rounded-md text-gray-100"
              onClick={() => {
                setRunning(true);
              }}
            >
              Start
            </button>
          )}
          <button
            className="border border-transparent py-1 px-3 bg-blue-900 hover:bg-indigo-600 rounded-md text-gray-100"
            onClick={() => {
              setTime(0);
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
