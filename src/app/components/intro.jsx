"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import IntroCard from "./introcard";

export default function Intro({scrolling}){

    const [degree,setDegree] = useState(0);

    useEffect(() => {
        if(scrolling){
            setDegree(prev => (prev%360)+90)
        }
    },[scrolling])
    
    return(
        <div className="bg-linear-to-r to-violet-200 from-yellow-200 h-screen w-screen relative" >
            <Image 
                src="/mandala3.png" 
                width={600} 
                height={600} 
                alt="mandala" 
                className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 transition-transform duration-700"
                style={{transform:`rotate(${degree}deg)`}}
            />
            <IntroCard/>
        </div>
    )
} 