"use client";
import { welcomeHeader, welcomeHeaderExpanded } from "../../contents";
import { useState } from "react";
import Image from "next/image";

export default function IntroCard(){

    const [textExpanded,setTextExpanded] = useState(false);

    return(
        // <div className={`absolute top-28 left-48 bg-white/90 border-rose-600 border-1 rounded-t-4xl p-6 rounded w-3/4`}>
        //     <div className="flex items-center">
                // <Image
                //     src="/me3.jpeg"
                //     width={200}
                //     height={200}
                //     alt="me"
                //     className="rounded-fullm-2.5"
                // />

        //         <p className='text-transparent text-4xl font-extrabold bg-clip-text bg-linear-to-l to-violet-600 from-yellow-600 font-sans '>
        //             {welcomeHeader}
        //         </p>
        //     </div>

        //     {textExpanded && 
        //         <p className="leading-6 mt-9">
        //             {welcomeHeaderExpanded}
        //         </p>
        //     }

        //     <div className="mt-10 flex flex-col items-center-safe w-full">
        //         <hr className="h-1 w-3/5"/>
        //         <svg onClick={() => setTextExpanded(prev => !prev)} style={{transform:`rotate(${textExpanded ? 180 : 0}deg)`}} className="bg-violet-200 hover:shadow-lg hover:border-2 size-7 rounded-full border-1 border-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        //             <title>Show More</title>
        //         </svg>
        //     </div>

        // </div>

        <div className="absolute top-20 w-screen flex justify-center">
            <div className="flex flex-col items-center  w-full md:w-3/5 gap-[3vh]">
                <div className="flex items-center">
                    <div className="min-w-[100px] max-h-[230px] max-w-[230px] min-h-[100px] w-[35vw] h-[35vw] rounded-full bg-gradient-to-l from-violet-200 to bg-yellow-200 flex justify-center items-center">
                        <Image
                            src="/me3.jpeg"
                            width={300}
                            height={300}
                            alt="me"
                            className="rounded-full w-full h-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <span className="text-2xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ac1115] to-[#f9bc57]">
                            Shone Antony George
                        </span>
                    </div>
                </div>
                
                <div className="bg-white h-[55vh] md:h-[25vh] w-[95%] ">

                </div>
                
            </div>
        </div>
    )
}