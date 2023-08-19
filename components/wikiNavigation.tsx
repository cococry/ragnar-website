const WikiNavigationData = [
    { text: "Welcome", heading: true,},
    { text: "Getting started", heading: false, link: "/wiki/getting-started"},
    { text: "Features", heading: true },
    { text: "Feature preview", heading: false, link: "/wiki/features" },
    { text: "Installation", heading: true },
    { text: "How to install Ragnar", heading: false, link: "/wiki/installation" },
    { text: "Configuration", heading: true },
    { text: "Config file", heading: false , link: "/wiki/config"},
    { text: "Configuring keybinds", heading: false, link: "/wiki/config-keybinds" },
    { text: "Configuring window properties", heading: false, link: "/wiki/config-windows" },
    { text: "Configuring the bar", heading: false , link: "/wiki/config-bar"},
    { text: "Configuring startup apps", heading: false, link: "/wiki/config-start-apps" },
    { text: "Tiling", heading: true},
    { text: "Tiling in Ragnar", heading: false, link: "/wiki/tiling"},
    { text: "Working with the layout", heading: false, link: "/wiki/layouts" },
    { text: "Changing layouts", heading: false, link: "/wiki/changing-layouts" },
    { text: "Configuring layouts", heading: false, link: "/wiki/config-layouts" },
]

interface WikiProps {
    slug : string 
}
const WikiNavigation = (props : WikiProps) => {
    return (
        <div className="xl:whitespace-nowrap mr-10 bg-gray-700/20 p-5 rounded-2xl black_glow border border-[3px] border-rounded border-[#333333] ">
            <ul className="flex flex-col gap-2 justify-start">
                {WikiNavigationData.map((navItem, index) => 
                navItem.heading ?  
                <div key={index}>
                    <h1 className="text-white text-2xl font-bold ">{navItem.text}</h1>
                </div>   
                :
                <div key={index}>
                    <button className={`${props.slug === navItem.link?.split("/").pop() ? "text-blue-500" : "text-white"} text-xl ml-5 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300`}>
                        <a href={navItem.link}>
                            {navItem.text}
                        </a>
                    </button>
                </div> 
            )}
            </ul> 
        </div>
    )
}

export default WikiNavigation
