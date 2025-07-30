import { useState } from "react";
import LightBulbStatus from "./LightBulbStatus";
import LightBulbSwitch from "./LightBulbSwitch";

function LightBulb(){
    const [lightBulbStatus , setLightBulbStatus] = useState(false);

    return (
        <>
            <div style={{
                height : "80px",
                width : "70px",
                backgroundColor : lightBulbStatus ? "Yellow" : "black"}}></div>
            <LightBulbStatus lightBulbStatus={lightBulbStatus}/>
            <LightBulbSwitch lightBulbStatus={lightBulbStatus} setLightBulbStatus={setLightBulbStatus}/>
        </>
    )
}

export default LightBulb;