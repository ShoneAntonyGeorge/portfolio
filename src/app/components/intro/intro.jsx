import Image from "next/image";
import IntroCard from "./introcard";
import Socials from "./socials";

export default function Intro() {

  const imageUrl = "/garden.png";
  //height will be 100vh and with the current image resolution width is 1.5 times more
  //not implementing dynamic calculation because in the frontend it takes time to process causing
  //squashed image to display initially and not using server side computing since its overkill
  const imageWidthClass = "md:w-[150vh]";


  return (
    <div className="relative w-screen bg-white">
      <div className="flex flex-col-reverse md:block">
        <div
          className={`md:w-md_introcard_container_width md:ml-md_socials_width flex w-screen justify-center md:h-screen`}
        >
          <IntroCard />
        </div>

        <div
          className={`md:ml-md_intro_image_margin_left top-socials-height relative h-auto w-screen md:absolute md:top-0 md:h-[100vh] ${imageWidthClass}`}
        >
          <Image
            src={imageUrl}
            alt="garden"
            width={1536}
            height={1024}
            className="h-full w-full"
            priority
          />
        </div>
      </div>

      <Socials />
    </div>
  );
}
