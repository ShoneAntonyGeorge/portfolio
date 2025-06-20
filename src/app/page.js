"use client"

import { useState, useEffect, useRef} from "react";
import FloatingMenu from "./components/floatingMenu/floatingMenu";
import { pageDatas } from "./data/pageDatas";
import { useMediaQuery } from "react-responsive";
import Expanded from "./components/journey/expanded";

export default function Home(){

  const pageRef = useRef(0);
  const [page,setPage] = useState(pageRef.current);
  const journeyPageRef = useRef(null);

  const updatePage = (page) => {
    pageRef.current = page;
    setPage(page);
  }
  const scrollingRef = useRef(false);
  const prevAbsScrollDelta = useRef(0);
  const isMobileView = useMediaQuery({query:'(max-width:767px)'});
  const numOfPages = pageDatas.length;
  const [domLoaded,setDomLoaded] = useState(false);


  const [expand,setExpand] = useState('');
  

  useEffect(() => {
    //nextjs complains when server serves a dom and browser before mounting component changes it depending on useMediaQuery
    setDomLoaded(true);
  },[])

  useEffect(() => {
    if(!isMobileView && expand === '' && scrollingRef.current === false){

      const handleScroll = (e) => {
        if (scrollingRef.current) return;
        
        const scrollTimeout = 1000;
        const delta = e.deltaY || e.deltaX;
        const absDelta = Math.abs(delta)

        if(absDelta < 5 || (absDelta <= prevAbsScrollDelta.current && absDelta < 25)){
          if(absDelta >= 6)prevAbsScrollDelta.current = absDelta;
          return;
        }
        prevAbsScrollDelta.current = absDelta;

        const newPage = pageRef.current +  (delta/absDelta);
        if (newPage < numOfPages && newPage >= 0) {
          scrollingRef.current = true;
          updatePage(newPage);

          setTimeout(() => {
            scrollingRef.current = false;
          }, scrollTimeout);

        } 
      };

      window.addEventListener("wheel", handleScroll, { passive: false }); 

      return () => window.removeEventListener("wheel", handleScroll);
    }
  }, [isMobileView,expand]);

  useEffect(() => {
    if (!(expand && isMobileView)) return;

    //locking scroll
    const origninalPositon = document.body.style.position;
    const origninalTop = document.body.style.top; 
    const elementTop = journeyPageRef.current?.getBoundingClientRect().top + window.scrollY;

    document.body.style.position = 'fixed';
    if(elementTop !== 0){
      document.body.style.top = `-${elementTop}px`;
    }

    return () => {
      document.body.style.position = origninalPositon;
      document.body.style.top = origninalTop;
      window.scrollTo(0, elementTop);
    };
  }, [expand,isMobileView]);


  useEffect(() => {
    if(isMobileView){
      updatePage(0);
    }
  },[isMobileView])

  const swipeStart = useRef({ x: 0, y: 0 });

  const handleTouchStart = (e) => {
    if(expand) return;

    swipeStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e) => {
    if(expand) return;

    const end = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    const dx = end.x - swipeStart.current.x;
    const dy = end.y - swipeStart.current.y;

    const movement = Math.abs(dx) > Math.abs(dy) ? dx : dy;

    if (movement > 30 && pageRef.current > 0){ 
      updatePage(pageRef.current -1 )
    }
    else if (movement < -30 && pageRef.current < numOfPages-1){ 
      updatePage(pageRef.current + 1 )
    }

  };


  return (
    <div className="overflow-hidden w-screen md:h-screen" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {!expand && <FloatingMenu {...{page,updatePage}} className="z-2"/>}
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
            return  <Page key={index} page={page} expand={expand} setExpand={setExpand} journeyPageRef={journeyPageRef}/>
          }
        )}

      </div>}
      {expand && <Expanded setExpand={setExpand} journey={expand}/>}
    </div>
  )
}