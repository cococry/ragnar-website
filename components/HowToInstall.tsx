import CodeBlock from "./CodeBlock"

const HowToInstall = () => {
    return (
        <div className="bg-black p-10 rounded-xl border border-[3px] border-rounded border-[#1c1c1c]"> 
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

            <h1 className="text-white text-4xl font-bold mt-5">Installing</h1>
            <p className="text-white mt-5">To install Ragnar to your system, there are multiple ways. There is a 
                AUR package, an Arch & Ubuntu install script & the make command to install Ragnar.</p>
            <h1 className="underline mt-5 text-white text-2xl font-bold">The make way</h1> 
            <p className="mt-2 text-white">Use this command to install using the Makefile:</p>
            <CodeBlock text="sudo make ragnar install"/>
            <p className="mt-2 text-white">Thats basically it. This compiles ragnar with gcc and 
                copies all of the important files to where they should be. ragnar & ragnarstart is copied to /usr/bin. 
                ragnar.desktop is copied to /usr/share/applications.</p>
            <h1 className="mt-5 text-white text-2xl font-bold">Important</h1>
            <p className="mt-2 text-white">If you are using a session manager/display manager, copy 
                ragnar.desktop to /usr/share/xsessions</p>
            <h1 className="underline mt-5 text-white text-2xl font-bold">The AUR way</h1>
            <p className="mt-2 text-white">For Arch users, it is very easy to install ragnar as it is 
                available on the AUR. Installing through the Arch package manager is as easy as:</p> 
            <CodeBlock text="yay -S ragnarwm"/>
            <p className="mt-2 text-white">Note that you can also use a different AUR helper like paru or pacman.</p>

            <h1 className="mt-5 text-white text-2xl font-bold underline">Arch Install Script</h1> 
            <p className="mt-2 text-white">You can also use the installation script in the git repo 
                if youre on Arch that automates the installation process. After installing Ragnar and inside the 
                repo folder run:</p>
            <CodeBlock text="./install/arch_installation.sh"/>

            <h1 className="mt-5 text-white text-2xl font-bold underline">Ubuntu Install Script</h1> 
            <p className="mt-2 text-white">If youre on Ubuntu, the Ubuntu install script makes it a lot easier 
            for you to install Ragnar. Inside the repo folder, run:</p> 
            <CodeBlock text="./install/ubuntu_installation.sh"/>
    </div>

    )
}

export default HowToInstall
