"use client"
import Image from 'next/image'
import { KeybindsData } from './keybinds'
import { useState } from 'react'

interface KeyDiv {
    desc: string, 
    keyText: string
}

const MapKeybinds = (props : KeyDiv) => {
    return (
        <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <p className="{font-bold text-center text-white whitespace-nowrap">{props.desc}</p>
            <div className=" flex flex-col justify-center items-center font-bold text-center w-[200px] h-[75px] rounded-2xl mt-2 bg-white shadow-lg shadow-red-500/50 bg-gradient-to-b from-[#e8e8e8] to-[#ffbdbd]">
                {props.keyText}
            </div>
        </div>
    )
}

const Keybinds = () => {
    const [search, setSearch] = useState("")
    const filterData = KeybindsData.filter(key => key.desc.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="flex flex-row justify-center items-center gap-8">
                    <img src="/keyboard.svg" alt="keyboard" width={400}/>
                </div>
                <h1 className="text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b pb-2 from-[#fff] to-[#454545] mt-2 text-center font-bold">Ragnar Keybindings</h1>
                <p className="text-2xl text-white mt-5 text-center font-bold w-[50%]">Here you can find and search all of the default Ragnar keybindings. Those keybindings are all set
                    in the config file by default.</p>

            <div className="mt-10 green_glow rounded-full w-1/2">   
                <label className="mb-2 text-sm font-bold sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={e => setSearch(e.target.value)} value={search} type="search" className="block w-full p-4 pl-10 text-sm font-bold text-gray-900 border border-[#cafad9] border-4 rounded-full bg-gray-400 placeholder-gray-900" placeholder="Search Keybinds" required />
                </div>
            </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-10 gap-20 border border-solid md:p-8 border-[#ffc9c9] rounded-lg border-4 red_glow ">
                {filterData.length === 0 && <div><h1 className="text-center font-bold text-6xl text-white">Search Not Found :(</h1><h1 className="text-center font-medium text-2xl text-white mt-5">Try something different</h1></div>}
                { filterData.map((e) => <MapKeybinds desc={e.desc} keyText={e.key}/>)}
            </div>
        </div>
    )
}

export default Keybinds;
