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
        <div className="bg-white w-screen relative" >

            <div className="relative md:absolute top-20 md:top-0 right-0  md:translate-x-4/7">
                {/* <Image
                    src="/monitor.png"
                    width={200}
                    height={200}
                    alt="monitor"
                    className="absolute top-40 -left-43"
                /> */}
                <Image
                src="/garden.png"
                alt="garden"
                width={800}
                height={800}
                className="w-screen h-auto md:h-screen md:w-auto "
                />

                {/* <div
                    className="lg:hidden absolute top-0 w-full h-full bg-white/70 z-5"
                /> */}
            </div>

            <div className="w-9/10 md:w-fit md:max-w-[calc(50vw-108px)] mb-60 md:mb-0  ml-3 md:ml-27 lg:ml-40 mt-25 md:mt-5 lg:block flex flex-col items-center">
                <div className="flex items-center md:block">
                    <div className="mb-5 min-w-[100px] max-h-[220px] max-w-[220px] min-h-[100px] w-[30vw] h-[30 vw] rounded-full bg-[#f9bc57] flex justify-center items-center">
                        <Image
                            src="/me3.jpeg"
                            width={300}
                            height={300}
                            alt="me"
                            className="rounded-full w-full h-full shadow-2xl border-4 shadow-[#f9bc57]"
                        />
                    </div>
                    <span className="max-w-1/2 text-2xl md:text-[3vw] font-semibold ml-3 md:ml-0 lg:ml-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ac1115] to-[#f9bc57]">
                        Full Stack Developer
                    </span>
                </div>
                
                <div className="md:text-base lg:text-[1.5vw] lg:ml-20 mt-3 font-light italic text-center lg:text-left">
                    I am Shone Antony George. blaaaah blaah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaaha blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah
                </div>
            </div>

            <Socials/>
        </div>
    )
} 