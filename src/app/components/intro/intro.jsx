import Image from "next/image";
import IntroCard from "./introcard";
import Socials from "./socials";

export default function Intro(){
    
    return(
        <div className="bg-white w-screen relative" >

            <div className="relative md:absolute top-20 md:top-0 right-0  md:translate-x-4/7">

                <Image
                src="/garden.png"
                alt="garden"
                width={800}
                height={800}
                className="w-screen h-auto md:h-screen md:w-auto "
                />

            </div>

            <IntroCard/>

            <Socials/>
        </div>
    )
} 