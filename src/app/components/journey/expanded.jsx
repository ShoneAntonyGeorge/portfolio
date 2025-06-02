import React from "react";

function Expanded({setExpand,journey}){

    return(
        <div className="h-screen w-screen flex fixed top-0 justify-center items-center z-1000 expandSlideClass">
            <div className="bg-white rounded-3xl max-h-95/100 min-h-6/7 shadow-lg  w-95/100 lg:w-4/5 lg:h-6/7 z-10 relative flex lg:flex-row flex-col">
                
                <div onClick={() => setExpand('')} className="absolute flex justify-center items-center right-0 top-0 h-[30px] w-[30px] m-5 hover:bg-gray-200">
                    <svg className="h-full w-full size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>

                
                <div className="h-2/10 lg:h-full w-full lg:w-fit lg:max-w-1/3 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl border-b-3 lg:border-r-3 border-red-200 flex items-center p-5">
                    <span className="text-xl lg:text-5xl w-6/10 font-bold">{journey.title}</span>
                </div>

                <div className="h-full w-full lg:w-7/10 rounded-r-3xl flex flex-col p-5 lg:p-15 overflow-y-auto">

                    <span className=" font-light font-sans italic lg:text-base/6 text-sm">"{journey.description}"</span>

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