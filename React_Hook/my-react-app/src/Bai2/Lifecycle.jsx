import React, { useEffect, useState } from "react";

function Lifecycle(){
    const [time, SetTime] = useState(new Date());
    useEffect(()=>{
        const interval = setInterval(()=>{
            SetTime(new Date());
        })
        return () => clearInterval(interval);
    },[])
    return(
        <div>
            {time.toLocaleTimeString()}
        </div>
    )
}
export default Lifecycle