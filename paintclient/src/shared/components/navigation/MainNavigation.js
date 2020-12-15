import React, { useState } from "react"
import MainHeader from "./MainHeader"
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

            <MainHeader>
                <button className="main-navigation__menu-btn" onclick={openDrawerHandler}>
                    
                
                </button>
                <nav className="main-navigation__header-nav">
                        <NavLinks/>
                    </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation