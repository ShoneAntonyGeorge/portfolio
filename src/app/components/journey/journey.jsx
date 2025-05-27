import React from "react";
import Brief from "./brief";
import journeyData from "./journeyData";

function Journey(){

    return(
        <div className="bg-red-200 w-screen h-screen flex flex-col justify-center items-center">

            {journeyData.map((journey) => 
                <Brief key={journey.title} title={journey.title} image={journey.image}/>
            )}
            
        </div>
    )
}

export default React.memo(Journey);