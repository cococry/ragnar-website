"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav>
            <div className="flex justify-between mb-10 bg-white/5 p-6 rounded-2xl"> 
                <div className="flex flex-row gap-4">
                    <img src="/logo.png" width="40px"/>
                    <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2200] to-[#b00000] text-4xl">Ragnar</h1>
                </div>
                <div className="flex gap-24">
                    { [{ link: "/", name: "Home"}, { link: "/wiki", name: "Wiki"}, { link: "/keybinds", name: "Keybindings" }].map(element => 
                        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-2xl text-white hover:text-[#ed5583] hover:underline">
                            <Link href={element.link}>{element.name}</Link>
                        </button> 
                    )}
                </div>
                <div className="flex gap-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src="/github.png" width="40" height="40"/>
                    <button className="text-white hover:text-[#ed5583] text-2xl hover:underline">
                        <Link href={"https://github.com/cococry/Ragnar"}>GitHub</Link>
                    </button> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
