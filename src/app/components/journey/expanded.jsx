import React from "react";

function Expanded({setExpand,expand}){

    return(
        <div className="h-screen w-screen flex fixed top-0 justify-center items-center z-1000 expandSlideClass">
            <div className="bg-white rounded-3xl shadow-lg w-4/5 h-6/7 z-10 relative flex">
                <span onClick={() => setExpand('')} className="absolute right-0 top-0">Close</span>
                
                <div className="h-full w-3/10 rounded-l-3xl border-r-3 border-red-200 flex items-center p-5">
                    <span className="text-6xl w-6/10 font-bold">{expand}</span>
                </div>

                <div className="h-full w-7/10 rounded-r-3xl">

                
                </div>
            </div>
        </div>
    )
}

export default React.memo(Expanded);