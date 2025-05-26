import React from "react";

function Journey(){

    const Journediv = <div className="relative w-[50%] h-[100px] bg-white/90 rounded-xl shadow-lg my-10 flex">
        <div className=" w-[130px] h-[130px] absolute bg-black bottom-5 rounded-md shadow-lg -left-5"></div>
        <div className="pl-[150px] w-12/13 h-full rounded-l-xl flex flex-col justify-center">
            <span className="text-xl">Designation at that moment</span>
        </div>
        <div className="border-l-1 rounded-r-xl border-gray-200/60 hover:shadow-lg bg-gray-50/80 h-full w-1/13 flex items-center justify-center">
            <svg className="-rotate-90  bg-violet-100 size-7 rounded-full border-1 border-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                <title>Show More</title>
            </svg>
        </div>
    </div>

    return(
        <div className="bg-red-200 w-screen h-screen flex flex-col justify-center items-center">

            {Journediv}
            <div className="w-full relative left-105">{Journediv}</div>
            {Journediv}
            
        </div>
    )
}

export default React.memo(Journey);