import React from "react";
import { Outlet } from "react-router-dom";
import {
    Header,
    Footer,
    Chat
} from "./components";

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Chat/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout