import Image from "next/image"
import Logo from 'public/logo.png'
import Screenshot1 from 'public/screenshot1.png'
import Slider from 'components/slider.tsx'

export default function Home() {
  return (
        <>
        <div className="flex items-center gap-[70px]">        
            <div className="ml-[70px] mt-10 max-w-[300px] inline-block">
                <Image
                    className="pixelart"
                    src={Logo}
                    width={300}
                    alt="logo"/>

                <h1 className="text-6xl font-bold mt-10 pb-2 gradient">Minimal, flexible & powerful. Ragnar</h1>
            </div>
            
            <Slider/>
        </div>

        
        </>
    )
}
