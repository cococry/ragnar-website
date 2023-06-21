
const Keybinds = () => {
    return (
        <div className="px-6 md:px-40">
            <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#fff] to-[#454545] mt-20 text-center font-bold">Ragnar Keybindings</h1>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1 ,1 ,1 ,1 ,1 ,1].map((e, i) => {
                    return (
                        <div className="h-10 bg-white">
                            {e}
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
