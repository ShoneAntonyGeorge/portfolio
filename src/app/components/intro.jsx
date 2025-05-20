import Image from "next/image"

export default function Intro(){
    
    return(
        <div className="bg-linear-to-r to-violet-200 from-yellow-200 h-screen w-screen relative" >
            <Image 
                src="/mandala3.png" 
                width={600} 
                height={600} 
                alt="mandala" 
                className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute top-48 left-48 bg-white shadow-lg p-6 rounded">
                <Image
                    src="/me3.jpeg"
                    width={150}
                    height={150}
                    alt="me"
                    className="rounded-full border-4 border-red-50"
                />
                <p>
                    Hi! My name is Shone Antony George and I'm a Full Stack Web Developer.
                </p>
            </div>
        </div>
    )
} 