"use client"

import { useState, useEffect } from "react";
import Intro from "./components/intro";
import Second from "./components/second";

const pages = [Intro,Second];
const numOfPages = pages.length;

export default function Home(){
  const [page,setPage] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (scrolling) return;

      const delta = e.deltaY || e.deltaX;
      if (delta > 0 && page < numOfPages - 1) {
        setPage((prev) => prev + 1);
        setScrolling(true);
      } else if (delta < 0 && page > 0) {
        setPage((prev) => prev - 1);
        setScrolling(true);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [page, scrolling]);

  useEffect(() => {
    if (!scrolling) return;
    const timeout = setTimeout(() => {
      setScrolling(false);
    }, 400); 
    return () => clearTimeout(timeout);
  }, [scrolling]);


  return (
    <div className="overflow-hidden w-screen h-screen">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform:`translateX(-${page * 100}vw)`,
          width:`${numOfPages * 100}vw`
        }}
      >

        {pages.map((Page,index) => (
          <Page key={index} scrolling={scrolling}/>
        ))}

      </div>
    </div>
  )
}