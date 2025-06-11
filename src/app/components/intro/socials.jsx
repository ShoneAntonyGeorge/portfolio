import Image from "next/image";
import Link from "next/link";

export default function Socials(){
    const iconSize = 70;

    const iconData = [
        {
            name: "instagram",
            href: "https://www.instagram.com/shoneantonygeorge/"
        },
        {
            name: "linkedin",
            href: "https://www.linkedin.com/in/shone-antony-george-b17922299/"
        },
        {
            name: "github",
            href: "https://github.com/ShoneAntonyGeorge/portfolio"
        }
    ]
    return(
        <div className={`bg-[#f9bc57] md:pb-[30vh] md:pt-10 w-full md:pr-0 pr-25 md:w-md_socials_width md:h-full h-socials-height absolute top-0 flex md:flex-col justify-between items-center`}>

            {iconData.map(icon => (
                <Link href={icon.href} target="_blank">
                    <Image className="hover:drop-shadow-lg" src={`/${icon.name}.png`} width={iconSize} height={iconSize} alt={icon.name}/>
                </Link>
            ))}

        </div>
    )
}