import Image from "next/image"

export default function Socials(){
    return(
        <div className="bg-violet-200/80 md:pb-50 md:pt-10 w-full md:pr-0 pr-40 md:w-25 md:h-full absolute top-0 flex md:flex-col justify-between items-center">
            <Image src="/instagram.png" width={70} height={70} alt="instagram"/>
            <Image src="/linkedin.png" width={70} height={70} alt="linkedin"/>
            <Image src="/github.png" width={70} height={70} alt="github"/>
        </div>
    )
}