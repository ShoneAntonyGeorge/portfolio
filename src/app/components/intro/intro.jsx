"use client";
import Image from "next/image";
import IntroCard from "./introcard";
import Socials from "./socials";
import { useEffect, useState } from "react";

export default function Intro(){

    const imageUrl = "/garden.png";
    const [mgImageWidth,setMdImageWidth] = useState('150vw');

    useEffect(() => {
        const image = new window.Image();
        image.src = imageUrl;
        image.onload = () => {
            const width = ((image.width/image.height) * 100)+'vh';
            setMdImageWidth(width);
        }
    },[])
    
    return(
        <div className="bg-white w-screen relative" >

            <div className="flex flex-col-reverse md:block">
                <div className={`w-screen md:w-md_introcard_container_width md:ml-md_socials_width flex justify-center md:h-screen`}>
                    <IntroCard/>
                </div>

                <div style={{'--mg_image_width':mgImageWidth}} className={`relative md:absolute w-screen h-auto md:ml-md_intro_image_margin_left md:h-[100vh] md:w-[var(--mg_image_width)] top-socials-height md:top-0`}>

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