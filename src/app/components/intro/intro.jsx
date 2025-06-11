import Image from "next/image";
import IntroCard from "./introcard";
import Socials from "./socials";

export default function Intro(){
    
    return(
        <div className="bg-white w-screen relative" >

            <div className="flex flex-col-reverse md:block">
                <div className=" w-screen md:w-[58vw] md:ml-25 flex justify-center md:h-screen">
                    <IntroCard/>
                </div>

                <div className="relative md:absolute w-screen h-auto md:ml-[calc(100px+58vw)] md:h-[100vh] md:w-[150vh] top-20 md:top-0">

                    <Image
                        src="/garden.png"
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