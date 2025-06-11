import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  const iconSize = 70;

  const iconData = [
    {
      name: "instagram",
      href: "https://www.instagram.com/shoneantonygeorge/",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/shone-antony-george-b17922299/",
    },
    {
      name: "github",
      href: "https://github.com/ShoneAntonyGeorge/portfolio",
    },
  ];
  return (
    <div
      className={`md:w-md_socials_width h-socials-height absolute top-0 flex w-full items-center justify-between bg-[#f9bc57] pr-25 md:h-full md:flex-col md:pt-10 md:pr-0 md:pb-[30vh]`}
    >
      {iconData.map((icon) => (
        <Link href={icon.href} key={icon.name} target="_blank">
          <Image
            className="hover:drop-shadow-lg"
            src={`/${icon.name}.png`}
            width={iconSize}
            height={iconSize}
            alt={icon.name}
          />
        </Link>
      ))}
    </div>
  );
}
