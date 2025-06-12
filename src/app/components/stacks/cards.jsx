import React from "react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

function Cards({windowRef}){

    const workingStacks = ["Spring Boot","Java","Python","Angular","Docker","PostgreSQL","Bootstrap","NextJs","Tailwind CSS"];
    const strongStacks = ["React","NodeJs","Javascript","Typescript","Remix","CSS"];

    const handRef = useRef(null);
    const [animated,setAnimated] = useState(false);
    const animatedRef = useRef(false);
    
    const [workingVisible,setWorkingVisible] = useState(false);
    //is a trigger for many conditions, it signifies the point when all the things are in place
    const [labelsVisible,setLabelsVisible] = useState(false);

    const cardStyles1 = 'opacity-0';
    const cardStyles2 = "absolute top-0 -translate-y-[45%] scale-60";
    const cardStyles3 = "transition-transform duration-800 ease-in-out";
    const cardStyles4 = "cardFlipClass transition-transform duration-800 ease-in-out";
    
    const [cardStyles,setCardStyles] = useState(cardStyles1);

    const baseCardDesign = "flex justify-center items-center  rounded-md border-6  border-gray-100 bg-gray-50";
    const baseCardSize = "h-[100px] w-[68px]";

    const handStyles1 = 'translate-y-75 opacity-0';
    const handStyles2 = '-translate-y-[100%] opacity-0';
    const handStyles3 = '';
    const handStyles4 = '-translate-y-[100%]';
    const handStyles5 = 'opacity-0 -translate-y-[100%]';
    const [handStyles,setHandStyles] = useState(handStyles1);

    const [backgroundForCards,setBackgroundForCards] = useState('');

    const cardImageSrc = (stack) => (labelsVisible ? `/stacks/${stack.replace(" ","").toLowerCase()}.png` : "/card.png");
    const cardImage = (stack) => (<Image  
        alt="card" 
        src={cardImageSrc(stack)} 
        width={110} 
        height={110}
    />)

    const delay = async(ms) => {
        return new Promise(res => setTimeout(res,ms));
    }

    const replayAnimation = () => {
        setBackgroundForCards('');
        setCardStyles(cardStyles1);
        setWorkingVisible(false);
        setHandStyles(handStyles1);
        setLabelsVisible(false);
        setAnimated(false);
        animatedRef.current = false;
        windowRef.current?.scrollIntoView({behaviour:'smooth',block:'start'});
    }

    const animate = async() =>{
        if(!animatedRef.current){
            animatedRef.current = true;
            setHandStyles(handStyles2);
            await delay(1200);
            setBackgroundForCards('growGradient');
            await delay(1000);
            setHandStyles(handStyles3);
            await delay(500);
            setCardStyles(cardStyles2)
            await delay(1000);
            setCardStyles(cardStyles3);
            setWorkingVisible(true);
            await delay(600);
            setHandStyles(handStyles4);
            setCardStyles(cardStyles4);
            await delay(400);
            setLabelsVisible(true);
            await delay(500);
            setHandStyles(handStyles5);
            setAnimated(true);
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
        <div className={`${backgroundForCards} min-h-screen md:h-screen h-fit relative w-screen overflow-y-hidden`}>

            <Image
                ref={handRef}
                src="/hands.png"
                width={120}
                height={120}
                alt="hands"
                className={`${handStyles} absolute top-0 left-1/2 -translate-x-1/2 transition-transform duration-500 ease-in-out`}
            />

            <div className={`relative flex flex-col items-center w-screen  ${labelsVisible ? 'top-10' :'top-30'}`}>
                <span className="mb-5 text-2xl">{labelsVisible && "STRONG EXPERIENCE IN"} </span>
                <div className="gap-10  flex relative w-screen flex-wrap justify-center ">
                    {strongStacks.map(stack => 
                        <div key={stack} className={cardStyles+" flex items-center flex-col"}>
                            <div className={`${baseCardDesign} ${baseCardSize}`}>
                                {cardImage(stack)}
                            </div>
                            <span className="mt-1 text-md text-transparent bg-clip-text bg-gradient-to-l from-red-900 to-violet-900">{labelsVisible && stack}</span>
                        </div>
                    )}

                </div>

                <span className="mb-5 relative top-10 text-xl">{labelsVisible && "WORKING KNOWLEDGE OF"} </span>
                <div className="gap-10 top-10 mb-30 flex relative w-screen flex-wrap justify-center">
                    {workingStacks.map((stack) => 
                        <div key={stack} className={cardStyles+" flex items-center flex-col"}>
                            <div className={`${baseCardDesign} ${!workingVisible && "hidden"} ${labelsVisible ? 'h-[88px] w-[60px]' : baseCardSize}`}>
                                {cardImage(stack)}
                            </div>
                            <span className="mt-1 text-xs text-transparent bg-clip-text bg-gradient-to-l from-red-900 to-violet-900">{labelsVisible && stack}</span>
                        </div>
                    )}

                </div>
            </div>
            
            {animated && (
                <button 
                    onClick={replayAnimation}
                    className="mb-10 ml-10 mr-10 relative"
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

export default React.memo(Cards);