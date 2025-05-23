"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";

function Stacks(){
    const stacks = [1,2,3,4];
    const handRef = useRef(null);
    const animated = useRef(false);
    const initialCardClass1 = "absolute -translate-y-[150%] scale-50 rounded-md border-6  border-white bg-white h-[132px] w-[90px]";
    const initialCardClass2 = "absolute rounded-md border-6  border-white bg-white h-[132px] w-[90px]";
    const initialCardClass3 = "rounded-md border-6  border-white bg-white h-[132px] w-[90px]";
    const [cardClasses,setCardClasses] = useState(initialCardClass1);

    
    useEffect(() => {
        const animate = () =>{
            // setTimeout(() => setCardClasses(initialCardClass1),100);
            if(!animated.current){
                setTimeout(() => setCardClasses(initialCardClass2),600);
                setTimeout(() => setCardClasses(initialCardClass3),1000);
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
        <div className="bg-linear-to-r relative from-violet-200 to-red-200  h-screen w-screen" >
            <Image
                ref={handRef}
                src="/hands.png"
                width={120}
                height={120}
                alt="hands"
                className="absolute top-0 left-1/2 -translate-x-1/2 rotate-180 "
            />

            <div className="flex absolute w-full justify-center top-2/5 gap-10 -translate-y-1/2">
                {stacks.map(stack => 
                    <div key={stack} className={cardClasses+"transition-transform duration-300 ease-in-out"}>
                        <Image  
                            alt="card" 
                            src="/card.png" 
                            width={110} 
                            height={110}
                            className="h-full w-full"
                        />
                    </div>
                )}

                {/* <div  className="rounded-md border-6  border-gray-100 bg-gray-50 h-[132px] w-[90px]">
                </div> */}

            </div>
        </div>
    )
} 

export default React.memo(Stacks);