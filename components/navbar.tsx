import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-center items-center gap-24 mt-10">
                { [{ link: "/", name: "Home"}, { link: "/wiki", name: "Wiki"}, { link: "/keybinds", name: "Keybinds" }, { link: "https://github.com/cococry/Ragnar", name: "GitHub"} ].map(element => 
                   <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-2xl text-white hover:text-[#ed5583] hover:underline">
                        <Link href={element.link}>{element.name}</Link>
                    </button> 
                )}
            </div>
        </nav>
    )
}

export default Navbar;
