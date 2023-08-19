
const ConfigFileWiki = () => {
    return ( 
        <div className="bg-black p-10 rounded-xl border border-[3px] border-rounded border-[#1c1c1c] ">
            <h1 className="text-white text-4xl font-bold">Config File</h1>
            
            <p className="text-white mt-5">Ragnar uses a C header file as a config. 
                It is kept as simple as possible and configuration, for the most part is as easy as 
                changing macro values. So even if you don't know C, configuring won't be a problem at all.</p>
            
            <h1 className="text-white text-4xl font-bold mt-5">Structure</h1>
            

            <h1 className="underline mt-5 text-white text-2xl font-bold">What are 'Designs'?</h1> 
            <p className="text-white mt-5">You will find frequently the word 'DESIGN' in Ragnar's config file.
                Design, in the context of Ragnar means the start/end part of a label. For example if you want 
                smooth bar label's you can set 'DESIGN_ROUND' to your label which will round off the label.
                Valid designs are: 'DESIGN_STRAIGHT', 'DESIGN_SHARP_LEFT_UP', 'DESIGN_SHARP_RIGHT_UP',
                'DESIGN_SHARP_LEFT_DOWN', 'DESIGN_SHARP_RIGHT_DOWN', 'DESIGN_ARROW_LEFT', 'DESIGN_ARROW_RIGHT', 'DESIGN_ROUND_LEFT' and 
                'DESIGN_ROUND_RIGHT'</p>
            
            <div className="flex flex-row gap-5 mt-5 bg-gray-500 p-5 rounded-2xl border border-[3px] border-rounded border-[#333333]">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white font-bold">SHARP_LEFT_UP:</p>
                    <div className="triangle-left-up mt-2"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white font-bold">SHARP_RIGHT_UP</p>
                    <div className="triangle-right-up mt-2"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white font-bold">SHARP_LEFT_DOWN</p>
                    <div className="triangle-left-down mt-2"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white font-bold">SHARP_RIGHT_DDOWN</p>
                    <div className="triangle-right-down mt-2"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white font-bold">ARROW_LEFT</p>
                    <div className="arrow-left mt-2"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white font-bold">ARROW_RIGHT</p>
                    <div className="arrow-right mt-2"></div>
                </div>
            </div>
            <div className="flex flex-row gap-5 mt-5 bg-gray-500 p-5 rounded-2xl border border-[3px] border-rounded border-[#333333] max-w-md">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white font-bold">ROUND_LEFT:</p>
                    <div className="half-circle-left mt-2"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white font-bold">ROUND_RIGHT:</p>
                    <div className="half-circle-right mt-2"></div>
                </div>
            </div>

            <p className="text-white mt-5">The config.h file is structed and split into different sections.
                All of those sections handle different parts of the window manager.</p>

            <h1 className="underline mt-5 text-white text-2xl font-bold">1. Monitors</h1> 
            <img src="/config1.png" className="mt-5 red_glow rounded-2xl"/>
            <p className="text-white mt-5">The first section handles the configurating of the monitor setup.
                Adjust the 'MONITOR_COUNT' variable to the the amount of monitor in your setup. After that you 
                can adjust the 'Monitors' array to your setup. The first monitor in the array is the most left in 
                your setup.</p>

            <h1 className="underline mt-5 text-white text-2xl font-bold">2. App Commands</h1> 
            <img src="/config2.png" className="mt-5 red_glow rounded-2xl"/>
            <p className="text-white mt-5">This section configures the default app commands of the window manager. 
                Those are the apps that have keybinds bound to them (Terminal, Browser, App Launcher). Adjust their string 
                values to the the command you want to execute when pressing their keybind. And don't forget to add a '&' to 
                the end of the command to run it asyncronously.</p>
            
            <h1 className="underline mt-5 text-white text-2xl font-bold">3. WM-Updating</h1> 
            <img src="/config3.png" className="mt-5 red_glow rounded-2xl"/>
            <p className="text-white mt-5">This small section configures the speed in which the non-static GUI parts of 
                the WM refresh (WM_REFRESH_SPEED) and the lag of event polling (WM_UPDATE_LAG). Note that the 'WM_UPDATE_LAG'
                will only be used if 'BAR_INSTANT_UPDATE' is true.</p>

            <h1 className="underline mt-5 text-white text-2xl font-bold">4. Font</h1> 
            <img src="/config4.png" className="mt-5 red_glow rounded-2xl"/>
            <p className="text-white mt-5">This section configures the font that is used in the window manager. The 
                'FONT' macro configures the font that is used, the style of it, size and more. The 'FONT_SIZE' marco 
                has to be the same value as the size of the font in the string descriptor ('FONT' marco). The 'FONT_COLOR'
                macro is used to specify the color of the font of the bar as a HEX value. The 'DECORATION_FONT_COLOR' macro 
                is used to specify the font color of the window decoration.</p>

            <h1 className="underline mt-5 text-white text-2xl font-bold">5. Scratchpads</h1>
            <p className="text-white mt-5">This section configures Scratchpads. You can add as many Scratchpads as you want 
                to Ragnar. 'SCRATCH_PAD_COUNT' defines the number of scratchpads. The 'ScratchpadDef' struct contains the properties 
                'cmd' and 'key'. 'cmd' is the command for the scratchpad and 'key' is the keybind to use that scratchpad.</p>
            <img src="/config14.png" className="mt-5 red_glow rounded-2xl"/>
        </div>
    )
}

export default ConfigFileWiki;
