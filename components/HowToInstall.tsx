import CodeBlock from "./CodeBlock"

const HowToInstall = () => {
    return (
        <div> 
            <h1 className="text-white text-4xl font-bold">Installation</h1>

            <p className="text-white mt-5">Installing Ragnar, is, in it of itself a very simple task but 
                there is some pre-setup you have to do before installing. First, you obviously need an operating system 
                that supports xorg as a display server. Best would be a linux distribution. Second of all, Ragnar needs 
                a few dependencies to be compiled. Those are: </p>

            <h1 className="underline mt-5 text-white text-2xl font-bold">Dependencies</h1>
            <ul className="ml-5 mt-1 text-white text-lg">
                <li>- xorg</li>
                <li>- xorg-xinit</li>
                <li>- make</li>
                <li>- gcc</li>
                <li>- git</li>
            </ul>

            <p className="text-white text-lg font-bold mt-2">Install those dependencies with the package manager of your distribution.</p>

            <h1 className="underline mt-5 text-white text-2xl font-bold">On Arch</h1>
            <CodeBlock text="sudo pacman -S xorg xorg-xinit make gcc git
sudo make clean install"/>

            <h1 className="underline mt-5 text-white text-2xl font-bold">On Debian</h1>
            <CodeBlock text="sudo apt-get install xorg xorg-xinit make gcc git
sudo make clean install"/>

            <p className="text-white mt-5">On other distributions, look up how to install packages to your system and 
                install all of the given dependencies.</p>
        </div>

    )
}

export default HowToInstall
