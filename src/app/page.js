"use client"

import { useState, useEffect} from "react";
import FloatingMenu from "./components/floatingMenu";
import { pageDatas } from "./components/pageDatas";
import { useMediaQuery } from "react-responsive";

export default function Home(){
  const [page,setPage] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const isMobileView = useMediaQuery({query:'(max-width:767px)'});
  const numOfPages = pageDatas.length;
  const [domLoaded,setDomLoaded] = useState(false);
  

  useEffect(() => {
    //nextjs complains when server serves a dom and browser before mounting component changes it depending on useMediaQuery
    setDomLoaded(true);
  },[])

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
    }, 800); 
    return () => clearTimeout(timeout);
  }, [scrolling]);

  useEffect(() => {
    if(isMobileView){
      setPage(0);
    }
  },[isMobileView])


  return (
    <div className="overflow-hidden w-screen">
      {domLoaded && <div 
        className="flex md:flex-row flex-col md:transition-transform md:duration-700 min-h-screen md:ease-in-out"
        style={{
          transform:isMobileView ? 'translateX(0vw)' : `translateX(-${page * 100}vw)`,
          width:isMobileView ? '100vw' : `${numOfPages * 100}vw`
        }}
      >

        {pageDatas.map((PageData,index) => 
          {
            const Page = PageData[1];
            return  <Page key={index} scrolling={scrolling} page={page} />
          }
        )}

      </div>}
      <FloatingMenu {...{page,setPage,setScrolling}}/>
    </div>
  )
}