import FeaturesWiki from "@/components/Features";
import GettingStarted from "@/components/GettingStarted";
import HowToInstall from "@/components/HowToInstall";
import WikiNavigation from "@/components/wikiNavigation";
import ConfigFileWiki from "@/components/ConfigFileWiki";
import KeybindsWiki from "@/components/KeybindsWiki";
import WindowPropsWiki from "@/components/WindowPropsWiki";
import BarWiki from "@/components/BarWiki";
import StartupAppConfig from "@/components/StartupAppsConfig";
import TilingWiki from "@/components/TilingWiki";

const wikiContentPages = [
    {
        slug: "getting-started",
        content: <GettingStarted />
    },
    {
        slug: "features",
        content: <FeaturesWiki/>
    },
    {
        slug: "installation",
        content: <HowToInstall/>
    },
    {
        slug: "config",
        content: <ConfigFileWiki/>
    },
    {
        slug: "config-keybinds", 
        content: <KeybindsWiki/>
    },
    {
        slug: "config-windows", 
        content: <WindowPropsWiki/>
    },
    {
        slug: "config-bar", 
        content: <BarWiki/>
    },
    {
        slug: "config-start-apps", 
        content: <StartupAppConfig/>
    },
    {
        slug: "tiling",
        content: <TilingWiki/>
    }
]             

const WikiPage = ({params} : {params: {
    slug : string
}}) => {
    const page = wikiContentPages.find(page => page.slug===params.slug);
    if(!page) return ( <div className="flex flex-col md:flex-row gap-4 justify-start"><WikiNavigation slug={""} /><h1 className="text-4xl text-center text-white font-bold">Page not found</h1></div> )
    return (
        <div className="flex flex-col md:flex-row gap-4 justify-start">
            <WikiNavigation slug={page?.slug}/>
            {page?.content}
        </div>
    )
}


export const generateStaticParams = async () => {
  return wikiContentPages.map((page) => (
    {
        slug: page.slug
    }
  )) 
}

export default WikiPage;
