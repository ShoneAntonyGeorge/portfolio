import React from "react";

function Expanded({setExpand,journey}){

    return(
        <div className="h-screen w-screen flex fixed top-0 justify-center items-center z-1000 expandSlideClass">
            <div className="bg-white border-3 overflow-hidden border-[#5a045d] rounded-3xl max-h-95/100 min-h-6/7 shadow-lg  w-95/100 lg:w-4/5 lg:h-6/7 z-10 relative flex lg:flex-row flex-col">
                
                <div onClick={() => setExpand('')} className="absolute flex justify-center items-center right-0 top-0 h-[30px] w-[30px] m-5 hover:bg-gray-200">
                    <svg className="h-full w-full size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>

                
                <div className="h-2/10 lg:h-[110%] w-full lg:w-fit lg:max-w-1/3 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl border-b-3 lg:border-r-3 lg:border-r-[#5a045d] flex items-center p-5">
                    <span className="text-xl lg:text-5xl min-w-6/10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5a045d] to-[#c90098] w-fit">{journey.title}</span>
                </div>

                <div className="h-full w-full lg:w-7/10 rounded-r-3xl flex flex-col p-5 lg:p-15 overflow-y-auto">

                    <span className=" font-light font-serif italic lg:text-base/6 text-sm">"{journey.description}"</span>

                    <ul className="list-disc p-5 flex flex-col gap-4">
                        {journey.points.map((point,index) => <li key={index} className="text-sm font-semibold lg:text-lg">{point}</li>)}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default React.memo(Expanded);