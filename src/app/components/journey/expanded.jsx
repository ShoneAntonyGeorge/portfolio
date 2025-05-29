import React from "react";

function Expanded({setExpand,journey}){

    return(
        <div className="h-screen w-screen flex fixed top-0 justify-center items-center z-1000 expandSlideClass">
            <div className="bg-white rounded-3xl shadow-lg w-4/5 h-6/7 z-10 relative flex">
                
                <div onClick={() => setExpand('')} className="absolute flex justify-center items-center right-0 top-0 h-[30px] w-[30px] m-5 hover:bg-gray-200">
                    <svg className="h-full w-full size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>

                
                <div className="h-full w-3/10 rounded-l-3xl border-r-3 border-red-200 flex items-center p-5">
                    <span className="text-6xl w-6/10 font-bold">{journey.title}</span>
                </div>

                <div className="h-full w-7/10 rounded-r-3xl flex flex-col p-15">

                    <span className="font-light font-sans italic text-base/6">"{journey.description}"</span>

                    <div className="flex  h-4/5 items-center p-5">
                        
                        <ul className="list-disc">
                            {journey.points.map((point,index) => <li key={index} className="text-lg">{point}</li>)}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Expanded);