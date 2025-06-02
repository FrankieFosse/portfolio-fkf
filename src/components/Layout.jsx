import { Outlet, useLocation } from "react-router";
import Background from "./Background";

function Layout() {


    return (
        <div className="flex flex-col min-h-screen">
            <Background />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;