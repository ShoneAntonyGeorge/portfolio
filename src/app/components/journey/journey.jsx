"use client";
import React, { useEffect, useState } from "react";
import Brief from "./brief";
import journeyData from "../../data/journeyData";


function Journey({ expand, setExpand,journeyPageRef }) {

  const [height,setHeight] = useState("100vh");

  useEffect(() => {
    const resize = () => {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize',resize);

    return () => window.removeEventListener('resize',resize);

  },[])

  return (
    <div ref={journeyPageRef} style={{height:height}} className="relative min-h-[400px] flex w-screen flex-col items-center justify-center bg-[url(/abstract.png)] bg-cover bg-center">
      {journeyData.map((journey) => (
        <Brief
          key={journey.title}
          journey={journey}
          expand={expand === journey}
          setExpand={setExpand}
        />
      ))}
    </div>
  );
}

export default React.memo(Journey);
