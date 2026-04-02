import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {return(
    <>
    <Navbar />
<div className="min-h-[80vh]">
    <Outlet />
    </div>         

    </>
)}

export default Layout;