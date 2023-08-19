const WindowPropsWiki = () => {        
    return (
        <div className="bg-black p-10 rounded-xl border border-[3px] border-rounded border-[#1c1c1c] ">
            <h1 className="font-bold text-white text-4xl font-bold">Configuring Window Properties</h1> 
            <img src="/config6.png" className="mt-5 red_glow rounded-2xl"/>
            <p className="text-white mt-5">This section of the config file handles the properties and behaivour of windows 
                in the window manager. The content of this section ragnes from configuring the color of the window border 
                to specifying the maximum count of windows inside a layout.
            </p>

            <h1 className="text-white underline text-2xl font-bold mt-5">Window colors</h1>
            <p className="text-white mt-2">The 'WINDOW_BG_COLOR' speicifies the background ; buffer color of 
                the windows. The 'WINDOW_BORDER_COLOR' specifies the border color of inactive windows in the window manager. 
                'WINDOW_BORDER_COLOR_ACTIVE' configures the border color of focused (hovered) windows. 'WINDOW_BORDER_COLOR_HARD_SELECTED'
                specifies the border color of hard selected windows. Hard selected windows do not lose focus till they are not hardselected anymore. 
                'WINDOW_BORDER_WIDTH' specifies the width/size of the window border in pixels.</p>
            <h1 className="text-white underline text-2xl font-bold mt-5">Window Properties & Default Layout</h1> 
            <p className="text-white mt-2">The 'WINDOW_MAX_COUNT_LAYOUT' specifies the maximum number of windows that are inside of a layout (with master).
                'WINDOW_MIN_SIZE_LAYOUT_HORIZONTAL' specifies the minimum width of a window in a layout. 'WINDOW_MIN_SIZE_LAYOUT_VERTICAL' speicifies the 
                minmum height of a window on the other hand. 'WINDOW_MAX_GAP' defines the maximum gap in pixels between windows in layouts. 'WINDOW_START_GAP'
                defines the initial gap in pixels between windows in layouts. 'WINDOW_TRANSPARENT_FRAME' defines if a window should have a transparent frame window 
                which enables applications/compositors to request transparent windows. 'WINDOW_SELECT_HOVERED' defines if a window should be focused when the mouse 
                is hovered over it. 'WINDOW_DEFAULT_LAYOUT' specifies the initial windowing layout of the WM. Options are 'WINDOW_LAYOUT_TILED_MASTER', 'WINDOW_LAYOUT_HORIZONTAL_MASTER', 
                'WINDOW_LAYOUT_HORIZONTAL_STRIPES' and 'WINDOW_LAYOUT_VERTICAL_STRIPES'.</p>
            
            <h1 className="text-white underline text-2xl font-bold mt-5">Window decoration</h1>
            <img src="/config7.png" className="mt-5 red_glow rounded-2xl"/>

            
            <h1 className="text-white underline text-2xl font-bold mt-5">Section 1</h1>
            <p className="mt-2 text-white">The 'SHOW_DECORATION' macro defines if decoration for windows should be enabled or not. 
                The 'DECORATION_TITLEBAR_SIZE' defines the height in pixels of the decoration's titlebar. 'DECORATION_COLOR' defines the color 
                of the decoration's titlebar. 'DECORATION_TITLE_COLOR' defines the background color of the application's title in the decoration's titlebar. 
            </p>
            <h1 className="text-white underline text-2xl font-bold mt-5">Section 2</h1>
            <p className="mt-2 text-white">The 'DECORATION_SHOW_CLOSE_ICON' macro defines if 
                the close button should be shown in the decoration's titlebar. The 'DECORATION_CLOSE_ICON' macro 
                defines the text/icon that will be used as the close button in the decoration's titlebar. 'DECORATION_CLOSE_ICON_COLOR' defines 
                the color of the close button in the titlebar. 'DECORATION_CLOSE_ICON_SIZE' defines the width of the close button. 
             </p>

            <h1 className="text-white underline text-2xl font-bold mt-5">Section 3</h1>
            <p className="mt-2 text-white">The 'DECORATION_SHOW_MAXIMIZE_ICON' macro defines if 
                the maximize button should be shown in the decoration's titlebar. The 'DECORATION_MAXIMIZE_ICON' macro 
                defines the text/icon that will be used as the maximize button in the decoration's titlebar. 'DECORATION_CLOSE_MAXIMIZE_COLOR' defines 
                the color of the button button in the titlebar. 'DECORATION_MAXIMIZE_ICON_SIZE' defines the width of the maximize button. 
             </p>
            
            <h1 className="text-white underline text-2xl font-bold mt-5">Section 4</h1>
            <p className="mt-2 text-white">The 'DECORATION_DESIGN_WIDTH' defines the width of the designs that are used 
                in the decoration. 'DECORATION_ICONS_LABEL_DESIGN' specifies the design of the icons label in the titlebar.
                'DECORATION_TITLE_LABEL_DESIGN' specifies the design of the title label in the titlebar.
            </p>
        </div>
    )
}
export default WindowPropsWiki;
