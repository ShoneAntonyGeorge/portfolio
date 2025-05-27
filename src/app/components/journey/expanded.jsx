import React from "react";

function Expanded({setExpand}){

    return(
        <div className="h-screen w-screen flex fixed top-0 justify-center items-center z-1000 expandSlideClass">
            <div className="bg-white rounded-3xl shadow-lg w-4/5 h-6/7 z-10 relative">
                <span onClick={() => setExpand('')}>Close</span>
            </div>
        </div>
    )
}

export default React.memo(Expanded);