import WikiNavigation from "./wikiNavigation";

const GettingStarted = () => {
    return (
        <div>
            <h1 className="text-4xl text-white font-bold">Welcome to the Ragnar Wiki</h1>

            <p className="text-white text-xl font-bold mt-5">Here you will learn everything you need to know about the Ragnar Window Manager. </p>
            <p className="text-white mt-5">The installation chapter will guide you through your first journey with Ragnar which is installing it.
                The wiki is kept simple and easy to understand. If you still have any questions relating to any subjects, then feel free 
                to write a issue on GitHub or send me an Email (githubluca@gmail.com). So now, have a look around the wiki and explore all of 
                the different parts of Ragnar. Have fun!</p>

            <h1 className="text-4xl text-white font-bold mt-5">Information</h1>
            <p className="text-white mt-2">Ragnar is a window manager written in C and for the Xorg display server. The goal of Ragnar is being 
                a flexible, stable & aestetic X window manager. Ragnar aims on being very minimal to minimize bugs and performance issues. But the 
                code-wise minimalism of Ragnar does not impact on the aestetics and user exprience. Ragnar is kept clean and aestetic while being very 
                configurable.</p>

            <h1 className="text-4xl text-white font-bold mt-5">Why Xorg?</h1>
            <p className="text-white mt-2">Ragnar uses xorg as a display server. This has two main reasons, first is that Xorg is still to this date 
                the most used and supported display server. Second is because Xorg is, from a developer perspective a better choice because Wayland is just 
                not yet mature to be reliable and easy to work with. Also Wayland is not running stable on all systems as of this date. If you are worried that 
                the aestetics of X are terrible, i myself use Ragnar with picom on a daily basic. I use the picom fork picom-pijulius which has super smooth animations,
                window transparency, blurring & more. You can find my picom config in my dotfiles.</p>

            <h1 className="text-4xl text-white mt-5 font-bold">Why Ragnar?</h1>
            <p className="text-white mt-2">{`You may ask yourself you should even use Ragnar over something like dwm. And well, if you are a dwm 
                user especially, Ragnar would be a great choice for you. Ragnar is as minimal as suckless' dwm but also very configurable and 
                polished out of the box. If you are a Wayland user, Ragnar can be a very good Xorg alternative. You could use Ragnar as an alternative 
                for Hyprland as, especially when using a compositor like Picom you get those juicy animations, a nice bar from Ragnar and a stable WM.`}</p> 

            <h1 className="text-xl text-white mt-10 font-bold">Fun Fact</h1>
            <div className="flex flex-row justify-start gap-4">
                <p className="w-[300px] text-white text-md">{`Did you know that the Ragnar logo as actually made up of the letters R.A.G.N.A.R ?
                    Have a look at the logo yourself and maybe you'll spot them!`}</p>
                <img src="/logo.png" className="mt-4" width="200px" alt="logo"/>
            </div>
        </div>
    )
}

export default GettingStarted;
