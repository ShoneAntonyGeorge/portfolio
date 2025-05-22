"use client";
import { welcomeHeader, welcomeHeaderExpanded } from "../../contents";
import { useState } from "react";
import Image from "next/image";

export default function IntroCard(){

    const [textExpanded,setTextExpanded] = useState(false);

    return(
        <div className={`absolute top-28 left-48 bg-white/60 shadow-lg p-6 rounded w-3/4`}>
            <div className={textExpanded ? 'flex items-center' : ''}>
                <Image
                    src="/me3.jpeg"
                    width={200}
                    height={200}
                    alt="me"
                    className="rounded-full border-6 border-violet-200 m-2.5"
                />

                <p className={`font-sans text-xl font-medium`}>
                    {welcomeHeader}
                </p>
            </div>

            {textExpanded && 
                <p className="leading-6 mt-9">
                    {welcomeHeaderExpanded}
                </p>
            }

            <div className="mt-10 flex flex-col items-center-safe w-full">
                <hr className="h-1 w-3/5"/>
                <svg onClick={() => setTextExpanded(prev => !prev)} style={{transform:`rotate(${textExpanded ? 180 : 0}deg)`}} className="bg-violet-200 hover:shadow-lg hover:border-2 size-7 rounded-full border-1 border-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    <title>Show More</title>
                </svg>
            </div>

        </div>
    )
}