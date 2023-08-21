
const ReleasesWiki = () => {
    return ( 
        <div className="bg-black p-10 inline-block rounded-xl border border-[3px] border-rounded border-[#1c1c1c] ">
            <h1 className="text-white text-4xl font-bold">Ragnar Releases</h1>

            <h1 className="text-white mt-5 underline text-4xl font-bold">v1.0</h1>
            <h1 className="text-white text-2xl mt-2 fonb-bold underline">Features</h1>
            <div className="text-white mt-2">
            <p>- Full window managing workflow</p> 
            <p>- Tiled Master layout (customizable)</p>
            <p>- Utility keybinds (varying gap size, launching various applications, etc.)</p>            
            <p>- Config file (everything is configurable)</p>
            <p>- Fully featured & customizable bar (output set by bash scripting)</p>
            <p>- Application Dock (add apps ; commands for quick access)</p>
            <p>- Multi monitor setups</p>
            <p>- Multiple desktops to work in</p>
            <p>- Stable for every application</p>
            </div>
            <h1 className="text-white mt-5 underline text-4xl font-bold">v1.1</h1>
            <h1 className="text-white text-2xl mt-2 fonb-bold underline">Features</h1>
            <div className="text-white mt-2">
                <p>- Window decorations (toggle)</p>
                <p>- Bar not showing fix</p>
                <p>- Storing pre-fullscreen position</p>
                <p>- Minor fixes</p>
                <p>- Code readability</p>
                <p>- Shutting down X Server after close</p>
            </div>

            <h1 className="text-white mt-5 underline text-4xl font-bold">v1.1.2</h1>
            <h1 className="text-white text-2xl mt-2 fonb-bold underline">Features</h1>
            <div className="text-white mt-2">
                <p>- Multiple Designs for bar & window decoration</p> 
                <p> - Padding for Bar</p>
                <p>- Better Customization options</p>
                <p>- Bugfixes for various systems</p>
                <p>- Support for transparent windows with compositors</p>
                <p>- Cleaned config file</p>
            </div>
            <h1 className="text-white mt-5 underline text-4xl font-bold">v1.2</h1>
            <h1 className="text-white text-2xl mt-2 fonb-bold underline">Features</h1>
            <div className="text-white mt-2">
                <p>- Vertical Stripes Layout</p>
                <p>- Horizontal Stripes Layout</p>
                <p>- Horizontal Master Layout</p>
                <p>- Improvement on layouts in general</p>
                <p>- Highly customizable bar</p>
                <p>- Bugfixes</p>
                <p>- Usablity improvements</p>
            </div>
            <h1 className="text-white mt-5 underline text-4xl font-bold">v1.3</h1>
            <h1 className="text-white text-2xl mt-2 fonb-bold underline">Features</h1>
            <div className="text-white mt-2">
                <p>- Overhaul of the Info-Label (bar)</p>
                <p>- Bugfixes with various bar items</p>
                <p>- Proper text display for bar buttons</p>
                <p>- Workspace info label added</p>
                <p>- Bar instant-mode on/off switch (instant updates without waiting for events)</p>
                <p> -Hovered windows get selected</p>
                <p>- Bugfixes with layout</p>
                <p>- Proper unicode support for bar</p>
            </div>
            <h1 className="text-white mt-5 underline text-4xl font-bold">v1.3.1</h1>
            <h1 className="text-white text-2xl mt-2 fonb-bold underline">Features</h1>
            <div className="text-white mt-2">
                <p>- Fixed Bar rendering</p>
                <p>- Bar now always "spawns" on startup</p>
                <p>- Bar rendering works without compositor now</p>
                <p>- Added initial gap size for windows</p>
                <p>- Bar unhide on window delete fixed</p>
                <p>- New default config</p>
                <p>- Fullscreening not working when no window gap fixed</p>
            </div>
            <h1 className="text-white mt-5 underline text-4xl font-bold">v1.4</h1>
            <h1 className="text-white text-2xl mt-2 fonb-bold underline">Features</h1>
            <div className="text-white mt-2">
                <p>- UI runs on separate thread</p>
                <p>- Asynchronous UI update ticks</p>
                <p>- Bar elements and text can be colored individually</p>
                <p>- Separators for bar commands</p>
                <p>- Setting name of window manager</p>
                <p>- Unicode characters now completely available for UI</p>
                <p>- Non tiled windows requested by client do not get tiled</p>
                <p>- Window hints from clients get accepted</p>
            </div>
        </div>
    )
};

export default ReleasesWiki;
