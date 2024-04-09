import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
    return (
        <div className="bg-black">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Layout