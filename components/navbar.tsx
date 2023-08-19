"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav>
            <div className="flex justify-center -ml-10 xl:ml-0 xl:items-left xl:justify-between mb-10"> 
                <div className="flex flex-row gap-4 justify-center items-center invisible xl:visible">
                    <img src="/logo.png" width="64px" height="48px"/>
                    <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2200] to-[#b00000] text-4xl">Ragnar</h1>
                </div>
                <div className="flex gap-8 xl:gap-24">
                    { [{ link: "/", name: "Home", site: ""}, { link: "/wiki/getting-started", name: "Wiki ", site: "wiki"}, { link: "/keybinds", name: "Keybindings", site: "" }].map((element, index) => 
                        <button key={index} className={`transition ease-in-out ${((element.site != "") ? (pathname.includes(element.site)) : (element.link == pathname)) && "text-[#ed5583] underline `text-[#ed5583] hover:underline`"} whitespace-nowrap delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-sm xl:text-2xl text-white hover:text-[#ed5583] hover:underline `}>
                            <Link href={element.link}>{element.name}</Link>
                        </button> 
                    )}
                </div>
                <div className="flex gap-4 invisible xl:visible transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src="/github.png" width="50px"/>
                    <button className="text-white hover:text-[#ed5583] text-2xl hover:underline">
                        <Link  href={"https://github.com/cococry/Ragnar"}>GitHub</Link>
                    </button> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
