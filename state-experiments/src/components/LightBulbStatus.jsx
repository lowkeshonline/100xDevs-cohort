import { useContext } from "react";
import { BulbContextValues } from "./lightBulb";


function LightBulbStatus() {

    const {lightBulbStatus} = useContext(BulbContextValues);

    return (
        <h3>The lightBulb is {lightBulbStatus ? "On" : "Off"}</h3>
    )
}


export default LightBulbStatus;