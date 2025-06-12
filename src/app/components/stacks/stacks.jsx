"use client";

import Image from "next/image";
import React from "react";
import { useRef } from "react";
import Cards from "./cards";

function Stacks() {
  const windowRef = useRef(null);

  return (
    <div
      ref={windowRef}
      className={`relative h-fit min-h-screen w-screen overflow-y-hidden md:h-screen`}
    >
      <div className="z--1 absolute right-0 flex h-screen w-full flex-col items-center justify-center bg-blue-100 md:w-2/3">
        <Image src="/mandala.svg" alt="mandala" height={300} width={300} />
        <span className="w-3/4 bg-gradient-to-br from-blue-500 to-yellow-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
          REVEALING CARDS AND COLORS
        </span>
      </div>

      <Cards windowRef={windowRef} />
    </div>
  );
}

export default React.memo(Stacks);
