import React from "react";
import Brief from "./brief";
import journeyData from "./journeyData";

function Journey({expand,setExpand}){

    return(
        <div className="bg-[url(/abstract.png)] relative w-screen h-screen flex flex-col justify-center items-center">

            {journeyData.map((journey) => 
                <Brief key={journey.title} journey={journey} expand={expand===journey} setExpand={setExpand}/>
            )}
            
        </div>
    )
}

export default React.memo(Journey);