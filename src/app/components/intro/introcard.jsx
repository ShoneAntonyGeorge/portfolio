"use client";

import Image from "next/image";
import { useState,useRef } from "react";

export default function IntroCard() {
  const [textExpanded, setTextExpanded] = useState(false);

  const briefStyle = "lg:text-[1.7vw] ";
  const expandedStyle = "lg:text-[1.2vw] ";
  const introCardRef = useRef(null);

  const toggleExpansion = () =>{
    if(!textExpanded){
      setTextExpanded(true);
    }else{
      introCardRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
      setTextExpanded(false);
    }
  }

  const expandedContent = (
    <div className="mt-4 space-y-3 text-sm leading-normal font-light text-gray-700 md:text-xs md:font-extralight lg:text-[1.1vw]">
      <p>
        I wanted this portfolio to reflect who I am as a person: happy,
        colorful, capable — rooted in culture, yet always reaching towards the
        future. To showcase the range of my capabilities, I've adapted different
        design styles for different pages.
      </p>
      <p>
        The site is fully responsive, so feel free to
        view it on your mobile, tablet, or desktop — whatever works best for you.
      </p>
      <p>
        I built this using React.js, Next.js, and Tailwind CSS. 
        The code is open-source and available on my GitHub profile. I'll be posting insights,
        breakdowns, and the journey behind this project on LinkedIn — be sure to
        connect with me there!
      </p>
    </div>
  );

  const introContent = (
    <span
      className={`${textExpanded ? expandedStyle : briefStyle} font-semibold text-gray-700 md:text-sm`}
    >
      Hi, I'm{" "}
      <span className="bg-gradient-to-br from-red-600 to-blue-600 bg-clip-text font-semibold text-transparent">
        Shone Antony George
      </span>
      .<br />
      I've been working as a full-stack developer since February 2023 — welcome
      to my portfolio!
      <br />
      {textExpanded && expandedContent}
    </span>
  );

  return (
    <div ref={introCardRef} className="mt-25 scroll-m-15 mb-50 flex h-fit w-9/10 flex-col items-center rounded-2xl shadow-2xl outline-2 outline-[#f9bc57] md:mt-5 md:mb-0 lg:w-fit lg:max-w-[70%]">
      <div className="flex w-full flex-row items-center justify-start gap-4 bg-gradient-to-br rounded-t-2xl from-red-200 to-[#f9bc57]">
        <div className="aspect-square w-[12vw] min-w-[110px] shrink-0 md:min-w-[150px]">
          <Image
            src="/me.jpeg"
            width={300}
            height={300}
            alt="me"
            className="h-full w-full object-cover rounded-tl-2xl"
          />
        </div>
        <span className="bg-white bg-clip-text text-2xl font-semibold text-transparent md:text-[3vw]">
          Full Stack Developer
        </span>
      </div>

      <div className="p-4 md:mt-0 md:p-4">
        {introContent}
        <div className="mt-4 flex w-full flex-col items-center-safe">
          <hr className="h-1 w-3/5" />
          <svg
            onClick={toggleExpansion}
            style={{
              transform: `rotate(${textExpanded ? 180 : 0}deg)`,
            }}
            className="size-7 mt-2 rounded-full overflow-hidden inline-block border-1 border-gray-500 hover:border-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
            <title>Toggle text expansion</title>
          </svg>
        </div>
      </div>
    </div>
  );
}
