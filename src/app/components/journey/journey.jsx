import React from "react";
import Brief from "./brief";
import journeyData from "../../data/journeyData";

function Journey({ expand, setExpand,journeyPageRef }) {
  return (
    <div ref={journeyPageRef} className="relative flex h-screen w-screen flex-col items-center justify-center bg-[url(/abstract.png)] bg-cover bg-center">
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
