
const FeaturesWiki = () => {
    return (
        <div>
            <h1 className="text-white font-bold text-4xl">Feature List</h1>
            <p className="text-white mt-5">Ragnar has lots of nice features built in out of the box. Allthough Ragnar contains 
                only about 2k lines of code, there are not less features in Ragnar then in other window managers. </p>

            <h1 className="text-white font-bold text-4xl mt-10">Tiling Layouts</h1>
            <p className="text-white mt-5">{`Ragnar, as it is a tiling window manager has full-fledged tiling support built in. 
                There are multiple layouts you can choose from and they are dynamically changable. Every layout can be changed to 
                your hearts content, every window can be sized differently inside the layout. Gaps between the windows in the layouts 
                are also built in and they're even dynamically changable. You can increase and decrease the gap size as much as you want.
                There is also a maximum window capacity for layouts, so they don't get overly full. The maximum number of windows in a layout 
                can be configured.`}</p>

            <h1 className="text-white font-bold text-4xl mt-10">Default Layouts</h1>
            <div className="flex flex-col xl:flex-row justify-start items-left mt-5 gap-8">
                <div className="flex flex-col justify-center items-center">
                    <img className="shadow-xl shadow-gray-750 mb-3" src="/screenshot3.png" width="350px" />
                    <h1 className="text-white text-center font-bold text-xl">Tiled Master</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="shadow-xl shadow-gray-750 mb-3" src="/layout2.png" width="350px" />
                    <h1 className="text-white text-center font-bold text-xl">Vertical Master</h1>
                </div>
            </div>

            <div className="mt-8 flex flex-col xl:flex-row justify-start items-left mt-3 gap-8">
                <div className="flex flex-col justify-center items-center">
                    <img className="shadow-xl shadow-gray-750 mb-3" src="/layout3.png" width="350px" />
                    <h1 className="text-white text-center font-bold text-xl">Vertical Stripes</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="shadow-xl shadow-gray-750 mb-3" src="/layout4.png" width="350px" />
                    <h1 className="text-white text-center font-bold text-xl">Horizontal Stripes</h1>
                </div>
            </div>
            <h1 className="text-white font-bold text-4xl mt-10">Multiple Desktops</h1>
            <p className="text-white mt-5">Ragnar has a system of multiple workspaces directly built in. There is no 
                maximum number of workspaces you can specify in the config. Windows can be moved through workspaces and layouts 
                can be changed in every workspace. The approach of iterating through workspaces is different to other window managers, 
                as in Ragnar, you can cycle desktops and windows up and down instead of having a hotkey for a certain desktop. This allows 
                to have infite desktops.</p>

            <h1 className="text-white font-bold text-4xl mt-10">Built-in Status Bar</h1>
            <p className="text-white mt-5">{`A fully featured status bar is also built in to Ragnar. The bar is extremely configurable 
                and aestetic. Colors, Font, Labels, Padding and more can be configured. Mapping commands to the bar is built in and very easy. 
                The bar can always be toggled during runtime with a keybind or completely disabled in the config. The bar can also be moved 
                to other monitors during runtime. The bar also supports unicode characters. There is a so called 'Main Label' which is label to 
                which the bar commands are being mapped, a 'Info Label' which is a representation of your deskstop setup showing your desktop and 
                the one you've currently selected. There is also a 'Button Label' to which you can add an infinite amount of buttons, which are mapped to commands.
                Last but not least there is a 'Version Label' which displays the current version of ragnar. 
                All of these labels can be turned off.`}</p>

            <h1 className="text-white font-bold text-4xl mt-10">My personal bar configuration</h1>
            <img src="/bar.png" width="100%" className="mt-5 shadow-lg shadow-grey-500"/>

            <h1 className="text-white font-bold text-4xl mt-10">Compositor Support</h1>
            <p className="text-white mt-5">Ragnar has full support for compositors like picom. Transparent windows can be 
                achieved, blurring, animations & more. Ragnar is built to work with compositors</p>

            <h1 className="text-white font-bold text-4xl mt-10">Highly Configurable</h1>
            <p className="text-white mt-5">The config file in Ragnar allows the user to configure pretty much anything from 
                window border colors to the default window layout. The bar is especially very configurable which allows for nearly 
                infite looks and themes. All keybinds can be changed to your liking in the config as well. Allthough the config file is 
                written as a C header file, configuration is really straight forward and simple. Configuring, for the most part is as easy 
                as changing macro defines.</p>

            <h1 className="text-white font-bold text-4xl mt-10">Minimalism & Performance</h1>
            <p className="text-white mt-5">Ragnar is very minimal on a code perspective. The window manager contains only about 
                2k lines code. The focus is on clean and performant code. The handling of layouts, the bar & the general workflow in the 
                window manager is very lightweight on your hardware. </p>
        </div>
    )
}

export default FeaturesWiki;
