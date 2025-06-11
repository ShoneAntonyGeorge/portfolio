"use client";

import Image from "next/image";
import { useState } from "react";

export default function IntroCard(){

    const [textExpanded,setTextExpanded] = useState(false);

    const briefStyle = "font-semibold lg:text-[1.7vw] md:text-sm";
    const expandedStyle = "font-semibold lg:text-[1.2vw] md:text-sm";


    const expandedContent = <span className="text-gray-700 font-extralight md:text-xs lg:text-[1.1vw] text-sm">
        I wanted my portfolio to reflect who I am as a person- happy, colorful, able, rooted in culture but still leaves spreading to the future.
        I am trying to showcase the range of my capabilites thus adapting different styles 
        for different pages.The pages are responsive, so feel free to resize your browser
        or to view in mobile or tab or desktop as per your choice. I believe in sharing my knowledge
        thus have kept the repository for the code open and you can view it in my Github profile,
        also will be sharing insights,breakdowns and the journey in my Linkedin so be sure to connect
        with me there.
    </span>

    const introContent = <span className={`${textExpanded ? expandedStyle : briefStyle}  text-gray-700`}>
        Hi, I'm <span className="font-semibold bg-gradient-to-br from-red-600 to-blue-600 bg-clip-text text-transparent">Shone Antony George</span> and I've been working
        as a full stack developer since February 2023, welcome to my portfolio!<br/>
        {textExpanded && expandedContent}
    </span>

    return(
        <div className="w-9/10 h-fit shadow-2xl outline-[#f9bc57] outline-2 rounded-2xl overflow-hidden lg:w-fit lg:max-w-[70%] mb-60 md:mb-0 mt-25 md:mt-5 lg:block flex flex-col items-center">
            <div className="bg-gradient-to-br from-red-200 to-[#f9bc57] w-full flex items-center flex-row justify-start gap-4">
                <div className="min-w-[100px] w-[15vw] aspect-square shrink-0">
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
            
            <div className="p-10 mt-3">
                {introContent}
                <div className="mt-5 flex flex-col items-center-safe w-full">
                    <hr className="h-1 w-3/5"/>
                    <svg onClick={() => setTextExpanded(prev => !prev)} style={{transform:`rotate(${textExpanded ? 180 : 0}deg)`}} className="hover:shadow-lg hover:border-2 size-7 rounded-full border-1 border-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        <title>Show More</title>
                    </svg>
                </div>
            </div>
        </div>
    )
}