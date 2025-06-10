"use client"

import { useState, useEffect, useRef} from "react";
import FloatingMenu from "./components/floatingMenu";
import { pageDatas } from "./components/pageDatas";
import { useMediaQuery } from "react-responsive";
import Expanded from "./components/journey/expanded";

export default function Home(){
  const [page,setPage] = useState(1);
  const pageRef = useRef(1);
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
          pageRef.current = newPage;
          setPage(newPage);

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
    if(isMobileView){
      setPage(0);
      pageRef.current = 0;
    }
  },[isMobileView])


  return (
    <div className="overflow-hidden w-screen md:h-screen">
      <FloatingMenu {...{page,setPage,pageRef}} className="z-2"/>
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
            return  <Page key={index} page={page} expand={expand} setExpand={setExpand}/>
          }
        )}

      </div>}
      {expand && <Expanded setExpand={setExpand} journey={expand}/>}
    </div>
  )
}