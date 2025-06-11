"use client";
import Image from "next/image";
import IntroCard from "./introcard";
import Socials from "./socials";
import style from "../../data/styleData";
import { useEffect, useState } from "react";

export default function Intro(){

    const imageUrl = "/garden.png";
    const [aspectRatio,setAspectRatio] = useState(1.5);

    useEffect(() => {
        const image = new window.Image();
        image.src = imageUrl;
        image.onload = () => {
            setAspectRatio(image.width/image.height,image.height,image.width);
        }
    },[])
    
    return(
        <div className="bg-white w-screen relative" >

            <div className="flex flex-col-reverse md:block">
                <div className={`w-screen md:w-[${style.md_introCardContainerWidth}] md:ml-[${style.md_socialsWidth}] flex justify-center md:h-screen`}>
                    <IntroCard/>
                </div>

                <div className={`relative md:absolute w-screen h-auto md:ml-[calc(${style.md_socialsWidth}+${style.md_introCardContainerWidth})] md:h-[100vh] md:w-[calc(100vh*${aspectRatio})] top-20 md:top-0`}>

                    <Image
                        src={imageUrl}
                        alt="garden"
                        width={1800}
                        height={1800}
                        className="h-full w-full"
                    />

                </div>
            </div>


            <Socials/>
        </div>
    )
} 