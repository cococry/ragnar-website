"use client"
import Image from "next/image"
import Logo from 'public/logo.png'
import Branding1 from 'public/branding1.png'
import Branding2 from 'public/branding2.png'
import Slider from "@/components/slider"
import imageTextDiv from "@/components/imageText"

export default function Home() {
    const handleClick = () => {
        window.location.href = 'https://github.com/cococry/ragnar'
    }
    return (
        <>
                <div className="flex items-center w-full flex-col lg:flex-row justify-center md:justify-between gap-[200px] min-h-screen p-6 md:p-40">        
                    <div className="flex flex-col justify-center mt-10 w-full md:w-1/2 items-center md:items-start">
                        <Image
                            className="pixelart"
                            src={Logo}
                            width={300}
                            alt="logo"/>


                        <div className="max-w-md">
                            <h1 className="text-center md:text-left text-6xl font-bold mt-10 pb-2 bg-clip-text  text-transparent bg-gradient-to-r from-[#ff2200] to-[#2200ff]">Minimal, flexible & powerful. Ragnar</h1>
                            <p className="text-center md:text-left text-2xl mt-5 text-white font-bold">Ragnar is a dynamic & tiling window manager written completly in C & X11.</p>
                            <div>
                                <div className="relative mt-10 max-w-min p-8 whitespace-nowrap -ml-10">
                                    <button onClick={handleClick} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black  bg-gradient-to-b from-[#ebebeb] to-[#bababa] px-9 py-6 rounded-full flex flex-row items-center text-2xl ring-2 ring-[#e3e3e3]/50"><p >Install RagnarWM</p></button>
                                    <div className="z-[-1] rounded-full absolute top-0 bottom-0 left-0 right-0 flex justify-center -space-x-14 p-5">
                                        <div className="bg-blue-500 blur-2xl rounded-full h-full w-full opacity-40"></div>
                                        <div className="bg-red-500  blur-2xl rounded-full h-full w-full opacity-40"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider/>
                    <imageTextDiv/>
                </div>  
                
                <div className="px-6 md:px-40">
                    <h1 className="text-center md:text-left text-white text-6xl font-bold">Overview</h1>

                </div>
                
            </>
    )
}
