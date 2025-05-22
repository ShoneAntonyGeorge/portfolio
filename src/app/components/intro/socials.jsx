import Image from "next/image"

export default function Socials(){
    return(
        <div className="bg-violet-200/80 pb-50 pt-10 w-25 h-full hidden md:flex flex-col justify-between items-center">
            <Image src="/instagram.png" width={70} height={70} alt="instagram"/>
            <Image src="/linkedin.png" width={70} height={70} alt="linkedin"/>
            <Image src="/github.png" width={70} height={70} alt="github"/>
        </div>
    )
}