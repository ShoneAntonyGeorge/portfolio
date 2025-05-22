"use client"

import { useState, useEffect } from "react";
import FloatingMenu from "./components/floatingMenu";
import { pageDatas } from "./components/pageDatas";
import { useMediaQuery } from "react-responsive";

export default function Home(){
  const numOfPages = pageDatas.length;
  const [page,setPage] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const isMobileView = useMediaQuery({query:'(max-width:767px)'});

  useEffect(() => {
    if(!isMobileView){
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
    }
  }, [page, scrolling,isMobileView]);

  useEffect(() => {
    if (!scrolling) return;
    const timeout = setTimeout(() => {
      setScrolling(false);
    }, 400); 
    return () => clearTimeout(timeout);
  }, [scrolling]);


  return (
    <div className="overflow-hidden w-screen">
      <div 
        className="flex md:flex-row flex-col md:transition-transform md:duration-700 min-h-screen md:ease-in-out w-screen"
        style={{
          transform:!isMobileView ? `translateX(-${page * 100}vw)` : '0',
          width:!isMobileView ? `${numOfPages * 100}vw` : '100vw'
        }}
      >

        {pageDatas.map((PageData,index) => 
          {
            const Page = PageData[1];
            return  <Page key={index} scrolling={scrolling} page={page} />
          }
        )}

      </div>
      <FloatingMenu {...{page,setPage,setScrolling}}/>
    </div>
  )
}