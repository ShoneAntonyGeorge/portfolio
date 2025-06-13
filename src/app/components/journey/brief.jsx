import Image from "next/image";
import React from "react";

function Brief({ journey, expand, setExpand }) {
  return (
    <div
      className={`${expand && "journeySlideClass"} relative my-10 flex h-[100px] w-8/10 rounded-xl bg-white shadow-lg outline-10 outline-white/50 md:w-[50%]`}
    >
      <div className="absolute bottom-5 -left-5 h-[50px] w-[50px] rounded-md border-3 border-[white] bg-white shadow-sm shadow-[#c90098] md:h-[130px] md:w-[130px]">
        <Image
          src={`/${journey.image}`}
          height={130}
          width={130}
          alt={journey.title + " image"}
          className="h-full w-full"
        />
      </div>
      <div className="flex h-full w-12/13 flex-col justify-center rounded-l-xl pl-[50px] md:pl-[150px]">
        <div>
          <span className="bg-gradient-to-r from-[#5a045d] to-[#c90098] bg-clip-text font-medium text-transparent md:text-2xl md:font-semibold">
            {journey.title}
          </span>
        </div>
      </div>
      <div
        onClick={() => setExpand(journey)}
        className="flex h-full w-2/13 items-center justify-center rounded-r-xl border-l-1 border-gray-200/60 bg-gray-50/80 hover:shadow-lg md:w-1/13"
      >
        <svg
          className="size-5 -rotate-90 rounded-full border-1 border-gray-200 bg-violet-100 md:size-7"
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
          <title>Show More</title>
        </svg>
      </div>
    </div>
  );
}

export default React.memo(Brief);
