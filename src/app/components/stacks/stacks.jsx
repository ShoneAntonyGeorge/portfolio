"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";

function Stacks(){

    const workingStacks = ["Spring Boot","Java","Python","Ruby","Angular","Rails","Docker","PostgreSQL","Bootstrap","NextJs","Tailwind CSS"];
    const strongStacks = ["React","NodeJs","Javascript","Typescript","Remix","CSS"];

    const handRef = useRef(null);
    const [animated,setAnimated] = useState(false);
    const animatedRef = useRef(false);

    const [workingVisible,setWorkingVisible] = useState(false);
    const [labelsVisible,setLabelsVisible] = useState(false);

    const initialCardClass1 = "absolute top-0 -translate-y-[45%] scale-60";
    const initialCardClass2 = "";
    const initialCardClass3 = "cardFlipClass ";
    
    const [cardClasses,setCardClasses] = useState(initialCardClass1);
    const [afterAnimationHand,setAfterAnimationHand] = useState('');

    const [growGradient,setGrowGradient] = useState('');

    const delay = async(ms) => {
        return new Promise(res => setTimeout(res,ms));
    }

    const replayAnimation = () => {
        setGrowGradient('');
        setCardClasses(initialCardClass1);
        setWorkingVisible(false);
        setAfterAnimationHand('');
        setLabelsVisible(false);
        setAnimated(false);
        animatedRef.current = false;
        handRef.current?.scrollIntoView({behaviour:'smooth',block:'nearest'});
    }

    const animate = async() =>{
        if(!animatedRef.current){
            await delay(1100);
            setGrowGradient('growGradient');
            await delay(1000);
            setCardClasses(initialCardClass2);
            setWorkingVisible(true);
            await delay(600);
            setAfterAnimationHand('-translate-y-[100%]');
            setCardClasses(initialCardClass3);
            await delay(100);
            setLabelsVisible(true);
            await delay(500);
            setAfterAnimationHand('opacity-0 -translate-y-[100%]');
            setAnimated(true);
            animatedRef.current = true;
        }
    }

    useEffect(() => {
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
        <div className={`${growGradient} min-h-screen h-fit relative w-screen`} >
            <Image
                ref={handRef}
                src="/hands.png"
                width={120}
                height={120}
                alt="hands"
                className={`${afterAnimationHand} absolute top-0 left-1/2 -translate-x-1/2 transition-transform duration-500 ease-in-out`}
            />

            <div className={`relative flex flex-col items-center w-screen  ${labelsVisible ? 'top-10' :'top-30'}`}>
                <span className="mb-5 text-2xl">{labelsVisible && "STRONG EXPERIENCE IN"} </span>
                <div className="gap-10  flex relative w-screen flex-wrap justify-center ">
                    {strongStacks.map(stack => 
                        <div key={stack} className={cardClasses+" flex items-center flex-col transition-transform duration-800 ease-in-out"}>
                            <div className={" flex justify-center items-center  rounded-md border-6  border-gray-100 bg-gray-50 h-[100px] w-[68px]"}>
                                <Image  
                                    alt="card" 
                                    src={labelsVisible ? `/stacks/${stack.replace(" ","").toLowerCase()}.png` : "/card.png"} 
                                    width={110} 
                                    height={110}
                                    className=""
                                />
                                
                            </div>
                            <span className="mt-1 text-md text-transparent bg-clip-text bg-gradient-to-l from-red-900 to-violet-900">{labelsVisible && stack}</span>
                        </div>
                    )}

                </div>

                <span className="mb-5 relative top-10 text-xl">{labelsVisible && "WORKING KNOWLEDGE OF"} </span>
                <div className="gap-10 top-10 mb-30 flex relative w-screen flex-wrap justify-center">
                    {workingStacks.map((stack,index) => 
                        <div key={stack} className={cardClasses+" flex items-center flex-col transition-transform duration-600 ease-in-out"}>
                            <div className={` flex justify-center items-center  rounded-md border-6  border-gray-100 bg-gray-50 ${!workingVisible && "hidden"} ${labelsVisible ? 'h-[88px] w-[60px]' : 'h-[100px] w-[68px]'}`}>
                                <Image  
                                    alt="card" 
                                    src={labelsVisible ? `/stacks/${stack.replace(" ","").toLowerCase()}.png` : "/card.png"} 
                                    width={110} 
                                    height={110}
                                    className=""
                                />
                                
                            </div>
                            <span className="mt-1 text-xs text-transparent bg-clip-text bg-gradient-to-l from-red-900 to-violet-900">{labelsVisible && stack}</span>
                        </div>
                    )}

                </div>
            </div>
            
            {animated && (
                <button 
                    onClick={replayAnimation}
                    className="m-5 relative"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                    <span className="text-xs">Replay</span>
                </button>
            )}
        </div>
    )
} 

export default React.memo(Stacks);