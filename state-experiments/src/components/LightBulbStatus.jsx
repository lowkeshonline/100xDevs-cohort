import React from "react";


function LightBulbStatus({lightBulbStatus}) {
    return (
        <h3>The lightBulb is {lightBulbStatus ? "On" : "Off"}</h3>
    )
}


export default LightBulbStatus;