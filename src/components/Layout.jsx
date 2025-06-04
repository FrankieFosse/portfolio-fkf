import { Outlet, useLocation } from "react-router";
import Background from "./Background";
import Footer from "./Footer";

function Layout() {


    return (
        <div className="flex flex-col min-h-screen">
            <Background />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;