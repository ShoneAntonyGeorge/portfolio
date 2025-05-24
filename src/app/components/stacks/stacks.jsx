"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";

function Stacks(){
    const stacks = ["React","NodeJs","Javascript","Typescript"];
    const stackImages = ["/react.png","/node.png","/javascript.png","/typescript.png"]
    const handRef = useRef(null);
    const animated = useRef(false);
    const [imageUrls,setImageUrls] = useState(Array(stacks.length).fill("/card.png"));
    const [labelsVisible,setLabelsVisible] = useState(false);
    const initialCardClass1 = "absolute -translate-y-[150%] scale-50";
    const initialCardClass2 = "";
    const initialCardClass3 = "cardFlipClass ";
    const [cardClasses,setCardClasses] = useState(initialCardClass1);
    const [afterAnimationHand,setAfterAnimationHand] = useState('');

    
    useEffect(() => {
        const animate = () =>{
            // setTimeout(() => setCardClasses(initialCardClass1),100);
            if(!animated.current){
                setTimeout(() => setCardClasses(initialCardClass2),600);
                setTimeout(() => setCardClasses(initialCardClass3),1200);
                setTimeout(() => {setImageUrls(stackImages);setLabelsVisible(true)},2050);
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

            <div className="flex absolute w-screen flex-wrap justify-center top-2/5 gap-10 -translate-y-1/2">
                {stacks.map((stack,index) => 
                    <div key={stack} className={cardClasses+" flex items-center flex-col transition-transform duration-600 ease-in-out"}>
                        <div className={" flex justify-center items-center  rounded-md border-6  border-gray-100 bg-gray-50 h-[132px] w-[90px]"}>
                            <Image  
                                alt="card" 
                                src={imageUrls[index]} 
                                width={110} 
                                height={110}
                                className=""
                            />
                            
                        </div>
                        <span className="mt-1 text-xl text-transparent bg-clip-text bg-gradient-to-l from-red-900 to-violet-900">{labelsVisible && stack}</span>
                    </div>
                )}

                {/* <div  className="rounded-md border-6  border-gray-100 bg-gray-50 h-[132px] w-[90px]">
                </div> */}

            </div>
        </div>
    )
} 

export default React.memo(Stacks);