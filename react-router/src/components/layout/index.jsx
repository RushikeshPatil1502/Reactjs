import { Outlet } from "react-router-dom"
import Home from "../Homepage/Home"

function Layout() {
  return (
    <div>
        <Home />
        <Outlet />
    </div>
  )
}

export default Layout