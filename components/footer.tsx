"use client"
import Image from "next/image"
import GitLogo from 'public/github.png'
import YTLogo from 'public/youtube.svg'
import RedditLogo from 'public/reddit.svg'

const Footer = () => {
    const openInNewTab = (url : string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <footer className="mt-20 m-2">
            <div className="h-[3px] w-full bg-gray-400 rounded-full"/>
            <div className="flex flex-row justify-between items-start">
                <div className="text-gray-400 mt-5">
                    <p>Ragnar is developed me, @cococry and other contributers on GitHub.</p>
                    <p>The window manager is entirely open source and licensed under the GPL-3.0 License.</p>
                    <p>For questions aobut the window manager, contact me over Email: githubluca@gmail.com or write an issue on GitHub.</p>
                </div>
                <div className="text-white flex flex-col md:flex-row justify-center items-center mt-5"> 
                    <Image className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" src={GitLogo} alt="GitHub" width={50} onClick={() => { openInNewTab("https://github.com/cococry")}}/>
                    <Image src={YTLogo} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" alt="YouTube" width={90}
                        onClick={() => { openInNewTab("https://youtube.com/@cococry")}}/>

                    <Image src={RedditLogo} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" alt="Reddit" width={50}
                        onClick={() => { openInNewTab("https://reddit.com/u/cococry")}}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
