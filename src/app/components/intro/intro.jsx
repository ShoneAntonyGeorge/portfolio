"use client";
import Image from "next/image";
import IntroCard from "./introcard";
import Socials from "./socials";
import { useEffect, useState } from "react";

export default function Intro() {
  const imageUrl = "/garden.png";
  const [mgImageWidth, setMdImageWidth] = useState("");

  useEffect(() => {
    const image = new window.Image();
    image.src = imageUrl;
    image.onload = () => {
      const width = (image.width / image.height) * 100 + "vh";
      setMdImageWidth(width);
    };
  }, []);

  return (
    <div className="relative w-screen bg-white">
      <div className="flex flex-col-reverse md:block">
        <div
          className={`md:w-md_introcard_container_width md:ml-md_socials_width flex w-screen justify-center md:h-screen`}
        >
          <IntroCard />
        </div>

        <div
          style={{ "--mg_image_width": mgImageWidth ?? "150vw" }}
          className={`md:ml-md_intro_image_margin_left top-socials-height relative h-auto w-screen md:absolute md:top-0 md:h-[100vh] md:w-[var(--mg_image_width)]`}
        >
          <Image
            src={imageUrl}
            alt="garden"
            fill
            sizes="auto"
            className="h-full w-full"
            priority
          />
        </div>
      </div>

      <Socials />
    </div>
  );
}
