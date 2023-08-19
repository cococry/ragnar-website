"use client"
import Image from "next/image"
import Logo from 'public/logo.png'
import Branding1 from 'public/branding1.png'
import Branding2 from 'public/branding2.png'
import Slider from "@/components/slider"
import ImageTextDiv from "@/components/imageText"

export default function Home() {
    return (
        <div>
                <div className="flex items-center w-full flex-col lg:flex-row justify-center md:justify-between "> 
                    <div className="flex flex-col justify-center w-full md:w-1/2 items-center md:items-start">
                        <Image
                            className="pixelart"
                            src={Logo}
                            width={300}
                            alt="logo"/>


                        <div className="max-w-md">
                            <h1 className="text-center xl:text-left text-6xl font-bold mt-10 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#ff2200] to-[#2200ff]">Minimal, flexible & powerful. Ragnar</h1>
                            <div className="flex flex-col items-center md:items-start">
                                <p className="text-center xl:text-left text-2xl mt-5 text-white font-bold">Ragnar is a dynamic & tiling window manager written completly in C & X11.</p>
                                <div>
                                    <div className="relative mt-10 max-w-min p-8 whitespace-nowrap -ml-10">
                                        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black bg-gradient-to-b from-[#ebebeb] to-[#bababa] px-9 py-6 rounded-full text-2xl ring-2 ring-[#e3e3e3]/50"><a href="https://github.com/cococry/Ragnar">Install Ragnar</a></button>
                                        <div className="z-[-1] rounded-full absolute top-0 bottom-0 left-0 right-0 flex justify-center -space-x-14 p-5">
                                            <div className="bg-blue-500 blur-2xl rounded-full h-full w-full opacity-40"></div>
                                            <div className="bg-red-500  blur-2xl rounded-full h-full w-full opacity-40"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider/>
                </div>  
                
                <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#fff] to-[#454545] mt-20 flex justify-center items-center w-full text-center xl:text-left text-6xl md:text-7xl font-bold">Overview</h1>
                <div className="flex flex-col gap-16 md:items-start md:justify-start items-center justify-center">

                            <ImageTextDiv href="/wiki/features" video={"/output.mp4"} desc="Ragnar aims on being minimal. Features & minimalism are treated in a way in that the user will have a great experience but at the same time, the implementation 
                            of the window manager is kept simple and reliable" heading="Features & minimalism" btnText="Feature List" left={true}/>

                    <ImageTextDiv href="/wiki/config" img={Branding1} desc="Ragnar is configured in plain C. This might sound scary, but don't worry the config is written in a way that it is really easy to understand. 
                    Similar to suckless' dwm, ragnar has to be recompiled after configuration to reduce overhead on a config file system." heading="Configuration" btnText="How to configure Ragnar" left={false}/>

                    <ImageTextDiv href="/wiki/tiling" img={Branding2} desc="Dynamic windowing & auto tiling is used in Ragnar. Every part of the layout can be changed whenever you want. There are also 
                    multiple layouts to choose from also containing a floating layout." heading="Tiling in Ragnar" btnText="Tiling explained" left={true}/>
                </div>
 
            </div>
    )
}
