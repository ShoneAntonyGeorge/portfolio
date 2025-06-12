"use client";

import Image from "next/image";
import { useState } from "react";

export default function IntroCard(){

    const [textExpanded,setTextExpanded] = useState(false);

    const briefStyle = "lg:text-[1.7vw] ";
    const expandedStyle = "lg:text-[1.2vw] ";


    const expandedContent = <div className="text-gray-700 font-light space-y-3 md:font-extralight md:text-xs leading-normal lg:text-[1.1vw] text-sm mt-5">
        <p>I wanted this portfolio to reflect who I am as a person: happy, colorful, capable, rooted in culture, yet always reaching toward the future. To showcase the range of my capabilities, I've adapted different design styles for different pages.</p>
        <p>The site is fully responsive, so feel free to resize your browser or view it on mobile, tablet, or desktop — whatever works best for you.</p>
        <p>I believe in sharing knowledge, so the code repository is open and available on my GitHub profile. I'll also be posting insights, breakdowns, and the journey behind this project on LinkedIn — be sure to connect with me there!</p>
    </div>

    const introContent = <span className={`${textExpanded ? expandedStyle : briefStyle}  text-gray-700 md:text-sm font-semibold`}>
        Hi, I'm <span className="font-semibold bg-gradient-to-br from-red-600 to-blue-600 bg-clip-text text-transparent">Shone Antony George</span>.<br/>
        I've been working as a full-stack developer since February 2023 — welcome to my portfolio!<br/>
        {textExpanded && expandedContent}
    </span>

    return(
        <div className="w-9/10 h-fit shadow-2xl outline-[#f9bc57] outline-2 rounded-2xl overflow-hidden lg:w-fit lg:max-w-[70%] mb-60 md:mb-0 mt-25 md:mt-5 flex flex-col items-center">
            <div className="bg-gradient-to-br from-red-200 to-[#f9bc57] w-full flex items-center flex-row justify-start gap-4">
                <div className="min-w-[110px] md:min-w-[150px] w-[12vw] aspect-square shrink-0">
                    <Image
                        src="/me3.jpeg"
                        width={300}
                        height={300}
                        alt="me"
                        className="h-full w-full object-cover"
                    />
                </div>
                <span className="text-2xl md:text-[3vw] font-semibold text-transparent bg-clip-text bg-white">
                    Full Stack Developer
                </span>
            </div>
            
            <div className="p-5 md:p-10 mt-3">
                {introContent}
                <div className="mt-5 flex flex-col items-center-safe w-full">
                    <hr className="h-1 w-3/5"/>
                    <svg onClick={() => setTextExpanded(prev => !prev)} style={{transform:`rotate(${textExpanded ? 180 : 0}deg)`}} className="hover:outline-2 size-7 rounded-full outline-1 outline-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        <title>Toggle text expansion</title>
                    </svg>
                </div>
            </div>
        </div>
    )
}