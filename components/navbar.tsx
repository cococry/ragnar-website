"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav>
            <div className="flex justify-between mb-10 bg-white/5 p-6 rounded-2xl"> 
                <div className="flex flex-row gap-4 justify-center items-center ">
                    <img src="/logo.png" width="64px" height="48px"/>
                    <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2200] to-[#b00000] text-4xl">Ragnar</h1>
                </div>
                <div className="flex gap-24">
                    { [{ link: "/", name: "Home"}, { link: "/wiki/getting-started", name: "Wiki"}, { link: "/keybinds", name: "Keybindings" }].map((element, index) => 
                        <button key={index} className={`transition ease-in-out ${pathname === element.link && "bg-gray-500 p-2 rounded-2xl"} delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-2xl text-white hover:text-[#ed5583] hover:underline`}>
                            <Link href={element.link}>{element.name}</Link>
                        </button> 
                    )}
                </div>
                <div className="flex gap-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src="/github.png" width="50" height="40"/>
                    <button className="text-white hover:text-[#ed5583] text-2xl hover:underline">
                        <Link href={"https://github.com/cococry/Ragnar"}>GitHub</Link>
                    </button> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
