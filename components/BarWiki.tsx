const BarWiki = () => {
   return (
        <div className="bg-black p-10 rounded-xl border border-[3px] border-rounded border-[#1c1c1c] ">
            <h1 className="font-bold text-white text-4xl font-bold">Configuring the Bar</h1>
            <p className="text-white mt-2">The bar is a really important part of a good window manager setup. It should look 
                aestethic and be functional. In Ragnar, the bar that comes out of the box is very configurable and you can adjust it 
                to your theme and setup.</p>

            <h1 className="text-white mt-5 font-bold underline text-2xl">An example of a themed bar</h1>
            <img className="red_glow mt-2" src="/bar2.png" width="1500px"/>

             
            <h1 className="text-white mt-5 font-bold underline text-4xl">Labels</h1>
            <p className="mt-2 text-white">The first label of the bar is the main/command label to which 
                seperated commands can be mapped. 
            </p>
            <img className="mt-2" src="/bar_command_label.png"/>
            <p className="mt-2 text-white">The second label of the bar is the desktop label which 
                displays the setup of desktops and the currently selected desktop. (togglable)
            </p>
            <img className="mt-2" src="/bar_desktop_label.png"/>
            <p className="mt-2 text-white">The third label of the bar is the button label which 
                consits of buttons that execute shell commands when pressed. (togglable)
            </p>
            <img className="mt-2" src="/bar_button_label.png"/>
            <p className="mt-2 text-white">The fourth and last label of the bar is the version label which 
                displays the version of Ragnar (togglable)
            </p>
            <img className="mt-2" src="/bar_version_label.png"/>

            <h1 className="text-white mt-5 font-bold underline text-4xl">Config of the bar</h1>
            <img className="red_glow mt-2 rounded-2xl" src="/config8.png"/>
            <h1 className="text-white mt-5 font-bold underline text-2xl">1. Gernal Properties</h1>
            <p className="text-white mt-2">The SHOW_BAR macro defines if the bar should be enabled 
                in the window manager. BAR_INSTANT_UPDATE is deprecated since v1.4. BAR_SHOW_DESKTOP_LABEL
                defines the visiblity of the desktop label. BAR_SHOW_VERSION_LABEL controls the if the version 
                label should be displayed on the bar.</p>

            
            <h1 className="text-white mt-5 font-bold underline text-2xl">2. Apperence</h1>
            <p className="text-white mt-2">The BAR_SIZE macro defines the height of the bar. BAR_PADDING_X
                defines the X padding of the bar (left and right). BAR_PADDING_Y defines the Y padding of the bar (top).
                The BAR_START_MONITOR macro sets the initial monitor of the bar (0 is most left). BAR_REFRESH_SPEED is 
                deprecated since v1.4. BAR_COLOR defines the background color of the bar. BAR_BORDER_COLOR sets the 
                color of the bars border. BAR_BORDER_WIDTH defines the with/size 
                of the bars border. </p> 

            <img className="mt-5 rounded-2xl red_glow" src="/config9.png"/>
            <h1 className="text-white mt-5 font-bold underline text-2xl">3. Designs</h1>
            <p className="text-white mt-2">This section of the bars config configures the designs of the bar. BAR_LABEL_DESIGN_WIDTH defines the width of the designs. BAR_MAIN_LABEL_DESIGN
                defines the design of the main/command label (right). BAR_DESKTOP_LABEL_DESIGN_FRONT specifies the design of the left side of 
                the desktop label. BAR_DESKTOP_LABEL_DESIGN_BACK specifies the design of the right side of the desktop label. BAR_VERSION_LABEL_DESIGN 
                specifies the design of the version label (left).</p> 
            <h1 className="text-white mt-5 font-bold underline text-2xl">4. Label Colors</h1>
            <p className="text-white mt-2">The next sub-section defines the colors of the bars labels. BAR_MAIN_LABEL_COLOR specifies the background color 
                of the main/command label. BAR_DESKTOP_LABEL_COLOR specifies the background color of the destkop label. BAR_DESKTOP_LABEL_SELECTED_COLOR specifies the 
                background color of a selected desktop in the desktop label. BAR_VERSION_LABEL_COLOR specifies the background color of the version label.</p>

            <img className="red_glow mt-5 rounded-2xl" src="/config10.png"/>
            <h1 className="text-white mt-5 font-bold underline text-2xl">5. Desktop LabeDesktop Label</h1>
            <p className="text-white mt-2">This section configures the desktop label of the bar. BAR_DESKTOP_LABEL_ICON_SIZE specifies the size 
                of each desktop in the desktop label in pixels. The DesktopIcons array is of type BarDesktopIcon which has the properties icon 
                and color. icon specifies the text/icon of the desktop and color specifies the icons color. The BarDesktopLabelPos array defines 
                the position of the desktop label for each monitor. (ordered like Monitors array)</p>

            <h1 className="text-white mt-5 font-bold underline text-2xl">6. Command/Main Label</h1>
            <img className="red_glow mt-5 rounded-2xl" src="/config11.png"/>
            <p className="text-white mt-2">This section configures the command/main label of the bar. BAR_COMMAND_SEPERATOR is 
                the text/icon that is used to seperate each command (for no seperator pass in a space). BAR_COMMANDS_COUNT specifies the number of commands 
                that are mapped to the bar. The BarCommands array is of type BarCommand which has the proerties cmd, color and bg_color. 
                The cmd property is the commmand that will be mapped to the bar. The color property color is the font color of the command output. 
                bg_color is the background color of the command in the command label (-1 for no color).</p>

            <img className="red_glow mt-5 rounded-2xl" src="/config12.png"/>
            <h1 className="text-white mt-5 font-bold underline text-2xl">7. Button Label</h1>
            <p className="text-white mt-2">This section configures the buttons of the button label. BAR_BUTTON_PADDING specfies the 
                padding/space between the buttons. BAR_BUTTON_SIZE specifies the width of the buttons. BAR_BUTTON_COUNT specifies how many 
                buttons should be on the bar. The BarButtonLabelPos array specifies the positions of the buttons on each monitor (same order as Monitors array).
                The BarButtons array is of type BarButton which has the properties cmd, icon and color. The cmd property specifies the command 
                that will be exucted when the button is pressed. The icon property specifies the icon/text of the button. The color property specifies the 
                background color of the button.</p>
        </div>
   ) 
}
export default BarWiki;
