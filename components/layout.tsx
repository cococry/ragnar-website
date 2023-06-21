import { PropsWithChildren } from "react";
import Navbar from "./navbar";

const Layout = ({children} : PropsWithChildren) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default Layout;
