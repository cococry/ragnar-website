const KeybindsWiki = () => {
    return (
        <div className="bg-black p-10 rounded-xl border border-[3px] border-rounded border-[#1c1c1c] ">
            <h1 className="font-bold text-white text-4xl font-bold">Configuring Keybindings</h1> 
            <img src="/config5.png" className="mt-5 red_glow rounded-2xl"/>
            <p className="text-white mt-5">This big section defines all of the keybindings in the window manager. From changing the layout 
                to toggling the bar, every keybind is specified here. The keys for the keybindings are always prefixed with 'XK_' because 
                Ragnar uses the Xlib keycodes.</p>

            <h1 className="text-xl text-white mt-5 font-bold underline">Master key</h1>
            <p className="text-white">First, the master key. The master key is used in combination with the key of every keybind. 
                For example if the close keybind is Q, the action for closing windows would be MASTER_KEY + Q. By default the master key 
                is the super key (Mod4Mask). You cannot assing a specific key to the masker key, you can only assign masks. So possible example values would 
                be: Mod1Mask (Alt key), ShiftMask, Mod3Mask (Control key)</p>

            <h1 className="text-xl text-white mt-5 font-bold underline">Command/App keys</h1>
            <p className="text-white">Those are the keybinds that are used to execute commands to open your terminal, webbrowser and app launcher. 
                The section also specifies the 'WM_TERMINATE_KEY' which refers to the key that is used to terminate the window manager. </p>

            <h1 className="text-xl text-white mt-5 font-bold underline">General Window Keybindings</h1>
            <p className="text-white">This section speicifies the keybindings for general window actions like closing and fullscreening. 
                The 'WINDOW_CLOSE_KEY' speicifes the key to close windows, the 'WINDOW_FULLSCREEN_KEY' speicifies the key to fullscreen windows.
                The 'WINDOW_CYCLE_KEY' refers to the that is used to cycle the current window focus.</p>

            <h1 className="text-xl text-white mt-5 font-bold underline">Bar & Decoration Keybindings</h1>
            <p className="text-white">This section speicifies the keybindings for interacting with the bar. You can toggle the visiblity of the bar 
                with the 'BAR_TOGGLE_KEY' and move the bar one monitor to the left with 'BAR_CYCLE_MONITOR_DOWN_KEY' and to the right with 'BAR_CYCLE_MONITOR_UP_KEY'.
                The 'DECORATION_TOGGLE_KEY' toggles the visibily of the decorations of every client window if it is 'SHOW_DECORATION' is enable.</p>
            
            <h1 className="text-xl text-white mt-5 font-bold underline">Desktop Keybindings</h1>
            <p className="text-white">This section speicifes keybindings for operating desktops and the count of desktops in the current session. 
                Desktops in Ragnar work by cycling through them. 'DESKTOP_CYCLE_UP_KEY' & 'DESKTOP_CYCLE_DOWN_KEY' specify the keys that are used 
                to move one desktop to the right and to the left accordingly. On the other hand, 'DESKTOP_CLIENT_CYCLE_DOWN_KEY' & 'DESKTOP_CLIENT_CYCLE_UP_KEY' specify the 
                keys that are used to cycle a focused window one desktop to the left and to the right accordingly. 'DESKTOP_COUNT' speicifes the number of desktops.</p>

            <h1 className="text-xl text-white mt-5 font-bold underline">Custom Keybindings</h1>
            <p className="text-white">This section speicifes your custom keybindings. You can add as many custom keybinds as you want to Ragnar.
                The 'Keybind' structs speicifies the properties 'cmd' and 'key'. The command in the 'cmd' property will be executed if the key 
                of the 'key' property was pressed.</p>

            <img src="/config15.png" className="mt-5 red_glow rounded-2xl"/>
        </div>
    )
}
export default KeybindsWiki;
