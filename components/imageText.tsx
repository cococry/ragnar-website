import Image from "next/image" 

interface imageTextProps {
    
    img : string
    heading : string,
    desc : string
}

const imageTextDiv = (props : imageTextProps) => {
    return (
        <div className="flex flex-col lg:flex-row mt-20 gap-[200px]">
            <div className="flex flex-col w-1/2">
            <Image
                className="w-full"
                src={props.img}
                alt="brading"/>
            </div>
            <div className= "flex flex-col justify-center items-center text-center max-w-md md:items-start w-1/2">
            <h1 className="font-bold text-4xl text-white">{props.heading}</h1>
            <p className="text-2xl text-white">{props.desc}</p> 
            </div>
        </div>
    ) 
}

export default imageTextDiv;
