import React, { useState, useRef } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    const intervalRef = useRef(null);

    const lapInputRef = useRef(null);

    const handleStart = () => {
        if (intervalRef.current !== null) return;
        setIsRunning(true); 
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev + 10);}, 10);
    };

    const handlePause = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    const handleAddLap = () => {
        if (!lapInputRef.current.value.trim()) return;

        setLaps((prev) => [...prev,{   id: Date.now(), name: lapInputRef.current.value, time: time,}, ]);
        lapInputRef.current.value = "";
        lapInputRef.current.focus();
    };

    return (
        <div>
            <h2>Stopwatch</h2>
            <h1>{time} ms</h1> 
            {!isRunning ? (
                <button onClick={handleStart}>Start</button>
            ) : (
                <button onClick={handlePause}>Pause</button>
            )}

            <button onClick={handleReset}>Reset</button>

            <hr />
            <input
                type="text"
                placeholder="Lap name"
                ref={lapInputRef}
            />
            <button onClick={handleAddLap}>Add Lap</button>
            <ul>
                {laps.map((lap) => (
                    <li key={lap.id}>
                        {lap.name} - {lap.time} ms
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Stopwatch;
