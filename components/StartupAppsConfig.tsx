import CodeBlock from "./CodeBlock";

const StartupAppConfig = () => {
    return ( 
        <div className="bg-black p-10 inline-block rounded-xl border border-[3px] border-rounded border-[#1c1c1c] ">
            <h1 className="text-white text-4xl font-bold">Configuring Autstart Apps</h1>

            <p className="tex-white mt-2">Ragnar has a built in feature for configuring startup commands/apps.</p>

            <h1 className="text-white text-2xl mt-5 font-bold underline">Ragnstart script</h1>
            <p className="text-white mt-2">In the root of the repository, there is a file called ragnarstart.
                This file is basically a shell script that runs as the WM initializes.</p>

            <h1 className="text-white text-2xl mt-5 font-bold underline">Applying the file</h1>
            <p className="text-white mt-2">To make use of your ragnarstart file, use the install make-command:</p>
            <CodeBlock text="sudo make install"/>

        </div>
    )
};

export default StartupAppConfig;
