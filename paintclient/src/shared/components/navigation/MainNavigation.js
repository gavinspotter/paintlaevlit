import React, { useState } from "react"
import NavLinks from "./NavLinks"
import SideDrawer from "./SideDrawer"


const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawerHandler = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment>
            <SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                    </nav> 
            </SideDrawer>
        </React.Fragment>
    )
}

export default MainNavigation