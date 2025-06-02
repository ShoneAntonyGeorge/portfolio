import Image from "next/image";
import React from "react";


function Brief({journey,expand,setExpand}){
    
    return( 
        <div className={`${expand && 'journeySlideClass'} relative w-8/10 md:w-[50%] h-[100px] bg-white/90 rounded-xl shadow-lg my-10 flex`}>
            <div className="h-[50px] w-[50px] md:w-[130px] md:h-[130px] absolute bg-white border-2 border-gray-200 bottom-5 rounded-md shadow-lg -left-5">
                <Image
                    src={`/${journey.image}`}
                    height={130}
                    width={130}
                    alt={journey.title+" image"}
                    className="h-full w-full"
                />
            </div>
            <div className="pl-[50px] md:pl-[150px] w-12/13  h-full rounded-l-xl flex flex-col justify-center">
                <div>
                    <span className="md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700">
                        {journey.title}
                    </span>
                </div>
            </div>
            <div onClick={() =>setExpand(journey)} className="border-l-1 rounded-r-xl border-gray-200/60 hover:shadow-lg bg-gray-50/80 h-full w-2/13 md:w-1/13 flex items-center justify-center">
                <svg className="-rotate-90  bg-violet-100 size-5 md:size-7 rounded-full border-1 border-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    <title>Show More</title>
                </svg>
            </div>
        </div>
    )
}

export default React.memo(Brief);