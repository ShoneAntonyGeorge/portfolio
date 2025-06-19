"use client";
import React, {useEffect,useState} from "react";

function Expanded({ setExpand, journey }) {

    const [maxHeight,setMaxHeight] = useState('95%');
  
    useEffect(() => {
      const resize = () => {
        setMaxHeight((window.innerHeight*0.95)+"px");
      }
      resize();
      window.addEventListener('resize',resize);
  
      return () => window.removeEventListener('resize',resize);
  
    },[])
  return (
    <div className="expandSlideClass fixed top-0 z-1000 flex h-screen w-screen items-center justify-center">
      <div style={{maxHeight:maxHeight}} className="relative z-10 flex min-h-7/8 w-95/100 flex-col overflow-hidden rounded-3xl border-3 border-[#5a045d] bg-white shadow-lg lg:h-6/7 lg:w-4/5 lg:flex-row">
        <div
          onClick={() => setExpand("")}
          className="absolute top-0 right-0 m-5 flex h-[30px] w-[30px] items-center justify-center hover:bg-gray-200"
        >
          <svg
            className="size-6 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="flex h-2/10 w-full items-center rounded-t-3xl border-b-3 p-5 lg:h-[110%] lg:w-fit lg:max-w-1/3 lg:rounded-t-none lg:rounded-l-3xl lg:border-r-3 lg:border-r-[#5a045d]">
          <span className="w-fit min-w-6/10 bg-gradient-to-r from-[#5a045d] to-[#c90098] bg-clip-text text-xl font-bold text-transparent lg:text-[2.5rem]">
            {journey.title}
          </span>
        </div>

        <div className="flex h-full flex-1 w-full flex-col overflow-y-auto rounded-r-3xl p-5 lg:w-7/10 lg:p-15">
          <span className="font-serif text-black text-sm font-light italic lg:text-base/6">
            "{journey.description}"
          </span>

          <ul className="flex list-disc flex-col gap-4 p-4 my-8">
            {journey.points.map((point, index) => (
              <li
                key={index}
                className="text-sm text-gray-900 lg:text-lg"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Expanded);
