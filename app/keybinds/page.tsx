
const Keybinds = () => {
    return (
        <div className="px-6 md:px-40">
            <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#fff] to-[#454545] mt-20 mb-10 text-center font-bold">Ragnar Keybindings</h1>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                { [{desc: "Move Window", key: "Super + Left-click"},
                    {desc: "Resize Window", key: "Super + Right-click"},
                    {desc: "Hard-select Window", key: "Super + Middle-click"},
                    {desc: "Move Window", key: "Super + Enter"},
                    {desc: "Move Window", key: "Super + Enter"},
                    {desc: "Move Window", key: "Super + Enter"},
                    {desc: "Move Window", key: "Super + Enter"},
      ].map((e) => {
                    return (
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-2xl text-center text-white">{e.desc}</p>
                            <div className="flex flex-col justify-center items-center font-bold text-center w-[200px] h-[75px] mt-2 bg-white shadow-lg shadow-pink-500/50 bg-gradient-to-b from-[#e8e8e8] to-[#f2c6f5]">
                                {e.key}
                            </div>
                        </div>
                    )
                })}
                <div>
                </div>
            </div>
        </div>
    )
}

export default Keybinds;
