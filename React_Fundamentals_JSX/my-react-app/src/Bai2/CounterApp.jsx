import React, { useState } from "react";

function CounterApp(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2 style={{color: count > 10 ? "red" : "black"}}>Count: {count}</h2>
            <button onClick={() =>{setCount(count => count+1)}}>+</button>
            <button onClick={() =>{
                setCount(count => (count > 0 ? count - 1 : 0))
                }}
            >-</button>
            <button onClick={() =>{setCount(0)}}>Reset</button>
        </div>
    )
}
export default CounterApp;