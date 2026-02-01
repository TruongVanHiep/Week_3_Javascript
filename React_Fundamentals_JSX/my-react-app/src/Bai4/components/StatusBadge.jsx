import React from "react";

function StatusBadge({status}){
    return(
        <div style={{background:status}}>
            <p>Status clients</p>
        </div>
    )
}
export default StatusBadge;