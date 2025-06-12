"use client";

import Image from "next/image";
import React from "react";
import { useRef } from "react";
import Cards from "./cards";

function Stacks(){

    const windowRef = useRef(null);

    return(
        <div ref={windowRef} className={`min-h-screen md:h-screen h-fit relative w-screen overflow-y-hidden`} >
            <div className="h-screen z--1 bg-blue-100 w-full md:w-2/3 absolute right-0 flex flex-col justify-center items-center">
                <Image
                    src="/mandala.svg"
                    alt="mandala"
                    height={300}
                    width={300}
                />
                <span className="text-4xl md:text-5xl font-bold w-3/4 text-center bg-gradient-to-br from-blue-500 to-yellow-400 text-transparent bg-clip-text">
                    REVEALING CARDS AND COLORS
                </span>
            </div>

            <Cards windowRef={windowRef}/>
        </div>
    )
} 

export default React.memo(Stacks);