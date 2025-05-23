"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import IntroCard from "./introcard";
import Socials from "./socials";

export default function Intro({scrolling,page}){

    const [degree,setDegree] = useState(0);

    useEffect(() => {
        if(scrolling){
            setDegree(prev => (prev%360)+90)
        }
    },[scrolling,page])
    
    return(
        <div className="bg-linear-to-r to-violet-200 from-yellow-200 h-screen w-screen relative" >
            <Image 
                src="/mandala3.png" 
                width={600} 
                height={600} 
                alt="mandala" 
                className="absolute min-w-[300px] min-h-[300px] w-[45vw] h-[45vw] top-0 right-0 translate-x-1/2 -translate-y-1/2 transition-transform duration-700"
                style={{transform:`rotate(${degree}deg)`}}
            />
            <IntroCard/>
            <div className="max-h-[500px] max-w-[500px] h-[40vw] w-[40vw] absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
                <Image 
                    src="/mandala3.png" 
                    width={500} 
                    height={500} 
                    alt="mandala" 
                    className="h-full w-full "
                />
            </div>
            <Socials/>
        </div>
    )
} 