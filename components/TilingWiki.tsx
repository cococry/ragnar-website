const TilingWiki = () => {
    return ( 
        <div className="bg-black p-10 inline-block rounded-xl border border-[3px] border-rounded border-[#1c1c1c] "> 
            <h1 className="text-white text-4xl font-bold">Tiling in Ragnar</h1>
            <p className="mt-2 text-white">Ragnar is a tiling window manager which means that the windows are 
                organised in tiling layouts. Ragnar comes out of the box with 4 different layouts that are 
                changable during runtime and each window in the layout can be resized to your liking.</p>

            <h1 className="text-white underline mt-5 text-2xl font-bold">Benefits of Tiling</h1>
            <p className="mt-2 text-white">Tiling window managers offer a range of advantages that cater to efficiency, productivity, and customization. They optimize screen real estate by automatically arranging windows in a non-overlapping grid, enhancing multitasking and work organization. Their keyboard-centric approach accelerates window management tasks, reducing dependency on mouse interactions and streamlining navigation. The tiling layout ensures a clutter-free workspace, benefiting both programmers and power users. With a focus on minimalism, tiling window managers are well-suited for large monitors, offering optimal screen utilization while minimizing distractions and resource consumption.</p>

            <h1 className="text-white underline mt-5 text-2xl font-bold">Tiling Features in Ragnar</h1>
            <p className="mt-2 text-white">Ragnar offers lots of customization and utility options for tiling 
                and layouts: 
            </p>
            
            <h1 className="text-white underline mt-5 text-2xl font-bold">Tiling Features</h1>
            <ul className="text-white">
               <li> - Multple tiling layout</li> 
               <li> - Resizing Windows in layouts</li> 
               <li> - Alterning Gap size between windows</li> 
               <li> - Configuring layout behaivour/apperence</li> 
               <li> - Multiple layouts on different monitors</li> 
            </ul>
                
            <h1 className="text-white font-bold text-4xl mt-10">Layouts</h1>
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


        </div>
    )
}
export default TilingWiki;
