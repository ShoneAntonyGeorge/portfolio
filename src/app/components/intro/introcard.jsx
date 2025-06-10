import Image from "next/image";

export default function IntroCard(){

    return(
        <div className="w-9/10 shadow-2xl outline-[#f9bc57] outline-2 rounded-2xl overflow-hidden md:w-fit md:max-w-[calc(50vw-108px)] mb-60 md:mb-0  ml-3 md:ml-27 lg:ml-40 mt-25 md:mt-5 lg:block flex flex-col items-center">
            <div className="bg-gradient-to-br from-red-200 to-[#f9bc57] flex items-center flex-row justify-center">
                <div className="min-w-[100px] h-full w-auto min-h-[100px] rounded-full bg-white/10 flex justify-center items-center">
                    <Image
                        src="/me3.jpeg"
                        width={300}
                        height={300}
                        alt="me"
                        className=" w-full h-full"
                    />
                </div>
                <span className="text-2xl md:text-[3vw] font-semibold ml-3 md:ml-0 lg:ml-10 text-transparent bg-clip-text bg-gradient-to-r from-[white] to-[white]">
                    Full Stack Developer
                </span>
            </div>
            
            <div className="md:text-base text-gray-700  p-10 lg:text-[1.4vw]  lg:ml-20 mt-3 font-extralight text-center lg:text-left">
                I am Shone Antony George. blaaaah blaah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaahah blaa blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaaha blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah blaaaah
            </div>
        </div>
    )
}