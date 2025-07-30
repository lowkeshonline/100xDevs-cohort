import { useState , useContext, createContext} from "react";
import LightBulbStatus from "./LightBulbStatus";
import LightBulbSwitch from "./LightBulbSwitch";

export const BulbContextValues = createContext();

    function BulbContext({children}) {
        const [lightBulbStatus , setLightBulbStatus] = useState(false);

        return (
                <BulbContextValues.Provider value={{lightBulbStatus , setLightBulbStatus}}>
                    {children}
                </BulbContextValues.Provider>
        )

    }


function LightBulb(){

    return (
        <>
            <BulbContext>
                <LightBulbBody/>
                <LightBulbStatus/>
                <LightBulbSwitch/>
            </BulbContext>
        </>
    )
}

function LightBulbBody () {

    const {lightBulbStatus} = useContext(BulbContextValues);

    return (
        <>
            <div style={{
                height : "80px",
                width : "70px",
                backgroundColor : lightBulbStatus ? "Yellow" : "black"}}></div>
        </>
    )
}

export default LightBulb;