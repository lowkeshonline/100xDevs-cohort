import { useContext } from "react";
import { BulbContextValues } from "./lightBulb";

function LightBulbSwitch(){

    const {lightBulbStatus , setLightBulbStatus} = useContext(BulbContextValues);

    function turnOffLight(){
        setLightBulbStatus(!lightBulbStatus);
    }
    

    return(
        <>
            <button onClick={turnOffLight}>Toggle Bulb</button>
        </>
    )
}

export default LightBulbSwitch