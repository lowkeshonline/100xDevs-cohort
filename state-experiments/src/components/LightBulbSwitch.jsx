
function LightBulbSwitch({lightBulbStatus , setLightBulbStatus}){

    function turnOffLight(){
        setLightBulbStatus(prev => !prev);
    }
    

    return(
        <>
            <button onClick={turnOffLight}>Turn {lightBulbStatus ? "Off" : "On"}</button>
        </>
    )
}

export default LightBulbSwitch