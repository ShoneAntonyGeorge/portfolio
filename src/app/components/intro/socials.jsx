import Image from "next/image";
import Link from "next/link";

export default function Socials(){
    return(
        <div className={`bg-[#f9bc57] md:pb-[30vh] md:pt-10 w-full md:pr-0 pr-25 md:w-md_socials_width md:h-full h-socials-height absolute top-0 flex md:flex-col justify-between items-center`}>
            <Link href="https://www.instagram.com/shoneantonygeorge/" target="_blank">
                <Image className="hover:drop-shadow-lg" src="/instagram.png" width={70} height={70} alt="instagram"/>
            </Link>

            <Link href="https://www.linkedin.com/in/shone-antony-george-b17922299/" target="_blank">
                <Image className="hover:drop-shadow-lg" src="/linkedin.png" width={70} height={70} alt="linkedin"/>
            </Link>

            <Link href="https://github.com/ShoneAntonyGeorge/portfolio" target="_blank">
                <Image className="hover:drop-shadow-lg" src="/github.png" width={70} height={70} alt="github"/>
            </Link>
        </div>
    )
}