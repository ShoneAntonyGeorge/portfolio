"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";

function Stacks(){

    const workingStacks = ["Spring Boot","Java","Python","Ruby","Angular","Rails","Docker","PostgreSQL","Bootstrap","NextJs","Tailwind CSS"];
    const strongStacks = ["React","NodeJs","Javascript","Typescript","Remix","CSS"];

    const handRef = useRef(null);
    const animated = useRef(false);
    const [workingVisible,setWorkingVisible] = useState(false);
    const [labelsVisible,setLabelsVisible] = useState(false);

    const initialCardClass1 = "absolute -translate-y-[100%] scale-50";
    const initialCardClass2 = "";
    const initialCardClass3 = "cardFlipClass ";
    
    const [cardClasses,setCardClasses] = useState(initialCardClass1);
    const [afterAnimationHand,setAfterAnimationHand] = useState('');

    
    useEffect(() => {
        const animate = () =>{
            if(!animated.current){
                setTimeout(() => {setCardClasses(initialCardClass2);setWorkingVisible(true)},600);
                setTimeout(() => {setLabelsVisible(true);},1700);
                setTimeout(() => setCardClasses(initialCardClass3),1200);
                setTimeout(() => setAfterAnimationHand('-translate-y-[100%]'),1200);
                setTimeout(() => setAfterAnimationHand('hidden -translate-y-[50%]'),1700);
                animated.current = true;
            }
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    animate();
                }
            },
            {
                threshold:0.1,
            }
        );
        if(handRef.current){
            observer.observe(handRef.current);
        }

        return () => {
            if(handRef.current){
                observer.unobserve(handRef.current);
            }
        }
    },[])

    return(
        <div className="overflow-y-hidden bg-linear-to-r relative from-violet-200 to-red-200  h-screen w-screen" >
            <Image
                ref={handRef}
                src="/hands.png"
                width={120}
                height={120}
                alt="hands"
                className={`${afterAnimationHand} absolute top-0 left-1/2 -translate-x-1/2 rotate-180 transition-transform duration-500 ease-in-out`}
            />

            <div className="relative flex flex-col items-center w-screen  top-2/8 -translate-y-1/2">
                <span className="mb-10 text-2xl">{labelsVisible && "STRONG EXPERIENCE IN"} </span>
                <div className="gap-10 top-10 flex absolute w-screen flex-wrap justify-center">
                    {strongStacks.map(stack => 
                        <div key={stack} className={cardClasses+" flex items-center flex-col transition-transform duration-600 ease-in-out"}>
                            <div className={" flex justify-center items-center  rounded-md border-6  border-gray-100 bg-gray-50 h-[132px] w-[90px]"}>
                                <Image  
                                    alt="card" 
                                    src={labelsVisible ? `/stacks/${stack.replace(" ","").toLowerCase()}.png` : "/card.png"} 
                                    width={110} 
                                    height={110}
                                    className=""
                                />
                                
                            </div>
                            <span className="mt-1 text-xl text-transparent bg-clip-text bg-gradient-to-l from-red-900 to-violet-900">{labelsVisible && stack}</span>
                        </div>
                    )}

                </div>

                <span className="mb-10 absolute top-60 text-xl">{labelsVisible && "WORKING KNOWLEDGE OF"} </span>
                <div className="gap-10 top-70 flex absolute w-screen flex-wrap justify-center">
                    {workingStacks.map((stack,index) => 
                        <div key={stack} className={cardClasses+" flex items-center flex-col transition-transform duration-600 ease-in-out"}>
                            <div className={` flex justify-center items-center  rounded-md border-6  border-gray-100 bg-gray-50 ${!workingVisible && "hidden"} ${labelsVisible ? 'h-[88px] w-[60px]' : 'h-[132px] w-[90px]'}`}>
                                <Image  
                                    alt="card" 
                                    src={labelsVisible ? `/stacks/${stack.replace(" ","").toLowerCase()}.png` : "/card.png"} 
                                    width={110} 
                                    height={110}
                                    className=""
                                />
                                
                            </div>
                            <span className="mt-1 text-lg text-transparent bg-clip-text bg-gradient-to-l from-red-900 to-violet-900">{labelsVisible && stack}</span>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
} 

export default React.memo(Stacks);