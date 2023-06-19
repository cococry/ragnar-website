"use client"
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Screenshot1 from 'public/screenshot1.png'
import Screenshot2 from 'public/screenshot2.png'
import Screenshot3 from 'public/screenshot3.png'
import Screenshot4 from 'public/screenshot4.png'
import Image from "next/image"

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <div className="w-[700px] h-[400px]">
        <AutoplaySlider play={true} cancleOnIteraction={false} interval={2000}>
            <div>
                <Image src={Screenshot1} width={700} alt="screen1"/>
            </div>
            <div>
                <Image src={Screenshot2} width={700} alt="screen2"/>
            </div>
            <div>
                <Image src={Screenshot3} width={700} alt="screen3"/>
            </div>
            <div>
                <Image src={Screenshot4} width={700} alt="screen4"/>
            </div>  
        </AutoplaySlider>
        </div>
    )
}

export default Slider;
