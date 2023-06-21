"use client"
import Image, { StaticImageData } from "next/image" 

interface ImageTextDivProps {
    
    img? : StaticImageData
    heading : string,
    desc : string
    btnText : string
    left : boolean
    /**
    * Filepath 
    */
    video? : string
}

const ImageTextDiv = ({video, img, heading, desc, btnText, left} : ImageTextDivProps) => {
    return (
        <div className={`flex flex-col justify-center items-center ${left ? "lg:flex-row" : "lg:flex-row-reverse"}  mt-20 gap-[200px]`}>
            <div className="flex flex-col w-1/2">
            {img ? 
            <Image
                className="w-full shadow-lg shadow-pink-500/50"
                src={img}
                alt="brading"/>
            :
                <video className="w-full shadow-lg shadow-pink-500/50" autoPlay muted loop>
                    <source src={video} />
                </video>
            }
            </div>
            <div className= "flex flex-col text-center max-w-md">
                <h1 className="font-bold text-4xl text-white">{heading}</h1>
                <p className="text-2xl text-white">{desc}</p> 
                <button className="font-bold text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black bg-gradient-to-b mt-10 from-[#1fed94] py-6 to-[#0aa662] rounded-2xl">{btnText}</button>
            </div>
        </div>
               
    ) 
}

export default ImageTextDiv; 
