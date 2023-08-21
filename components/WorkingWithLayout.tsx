const WorkingWithLayout = () => {
    return (
        <div className="bg-black p-10 rounded-xl border border-[3px] overflow-hidden border-rounded border-[#1c1c1c] "> 
            <h1 className="text-white text-4xl font-bold">Workflow with layouts</h1>
            <p className="mt-2 text-white">The conecpt of tiling is simple, it's main benefit is ordering windows 
                and a better used screen space. But layouts can also be modified and customized. That's also a 
                big part of the Workflow with a tiling window managers.</p>

            <h1 className="text-white mt-5 text-2xl fond-bold underline">Layout Configuration</h1>
            <img className="red_glow rounded-xl mt-2" src="/config16.png"/>
            <p className="text-white mt-2">The above section of the config file deals 
                with window layout configuration. 'WINDOW_MAX_COUNT_LAYOUT' defines the maximum 
                number of windows in a layout (including master window). The 'WINDOW_MIN_SIZE_VERTICAL'
                specifies the minimum height a window can be shrinked to in a layout. 'WINDOW_MIN_SIZE_HORIZONTAL'
                specifies the minium width accordingly. 'WINDOW_MAX_GAP' specifies the maximum amout that the gap between
                windows can be increased to. 'WINDOW_INITIAL_GAP' specifies the initial amount of gap between windows 
                in the layout. 'WINDOW_LAYOUT_DEFAULT' specifies the initial window layout that is applied.</p>

            <h1 className="text-white text-2xl mt-5 fond-bold underline">Changing the layout</h1>
            <p className="text-white mt-2">In Ragnar,the layout can be changed during runtime as you like it. 
                Every window in the layout can change it's width and/or height.</p>

            <p className="text-white mt-3">The master window can only change either it's width or it's height depending 
                on the current layout. Slave windows can change their widths and heights. In layouts without master windows, 
                the size of windows cannot be changed.</p>

            <h1 className="text-white mt-5 font-bold underline text-2xl">Layout Keybindings</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-10 gap-20 border border-solid md:p-8 border-[#ffc9c9] rounded-2xl border-4 red_glow ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl mt-2 text-center font-bold">Increasing Master Width/Height</h1>
                    <div className="inline-block bg-gray-500 p-5 border border-[3px] border-[#333333] rounded-xl">
                        <p className="font-bold text-white">Super + L</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl mt-2 text-center font-bold">Decreasing Master Width/Height</h1>
                    <div className="inline-block bg-gray-500 p-5 border border-[3px] border-[#333333] rounded-xl">
                        <p className="font-bold text-white">Super + H</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl mt-2 text-center font-bold">Increase Slave Width/Height</h1>
                    <div className="inline-block bg-gray-500 p-5 border border-[3px] border-[#333333] rounded-xl">
                        <p className="font-bold text-white">Super + K</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl mt-2 text-center font-bold">Decrease Slave Width/Height</h1>
                    <div className="inline-block bg-gray-500 p-5 border border-[3px] border-[#333333] rounded-xl">
                        <p className="font-bold text-white">Super + J</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl mt-2 text-center font-bold">Decrease Slave Width/Height</h1>
                    <div className="inline-block bg-gray-500 p-5 border border-[3px] border-[#333333] rounded-xl">
                        <p className="font-bold text-white">Super + J</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl mt-2 text-center font-bold">Move Window Up Layout</h1>
                    <div className="inline-block bg-gray-500 p-5 border border-[3px] border-[#333333] rounded-xl">
                        <p className="font-bold text-white">Super + Arrow Up</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl mt-2 text-center font-bold">Move Window Down Layout</h1>
                    <div className="inline-block bg-gray-500 p-5 border border-[3px] border-[#333333] rounded-xl">
                        <p className="font-bold text-white">Super + Arrow Down</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl mt-2 text-center font-bold">Set Window to Master</h1>
                    <div className="inline-block bg-gray-500 p-5 border border-[3px] border-[#333333] rounded-xl">
                        <p className="font-bold text-white">Super + G</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkingWithLayout;

