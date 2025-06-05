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
        <div className="bg-white h-screen w-screen relative" >

            <div className="absolute top-0 right-0  translate-x-1/2">
                <Image
                    src="/monitor.png"
                    width={200}
                    height={200}
                    alt="monitor"
                    className="absolute top-40 -left-43"
                />
                <Image
                src="/holi4.png"
                alt="holi"
                width={800}
                height={800}
                className="h-screen w-auto "
                />

                {/* <div
                    className="absolute top-0 w-full h-full bg-black/0 z-5"
                /> */}
            </div>

            <div className="w-fit max-w-2/4 ml-45 mt-25">
                <div className="mb-5 min-w-[100px] max-h-[230px] max-w-[230px] min-h-[100px] w-[35vw] h-[35vw] rounded-full bg-[#f9bc57] flex justify-center items-center">
                    <Image
                        src="/me3.jpeg"
                        width={300}
                        height={300}
                        alt="me"
                        className="rounded-full w-full h-full shadow-2xl border-4 shadow-[#f9bc57]"
                    />
                </div>
                <span className="text-5xl font-semibold ml-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ac1115] to-[#f9bc57]">Full Stack Developer</span>
                <br/>
                <div className="text-xl ml-20 mt-3 font-light italic">
                    I am Shone Antony George. blaaaah blaah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaaha blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah
                </div>
            </div>

            <Socials/>
        </div>
    )
} 