import React, { useState } from 'react'

import NavBar from '../components/NavBar'

export default function HomePage() {
    const [navBarView, setNavBarView] = useState(false)

    const handleNavBar = () => setNavBarView(!navBarView)

    return (
        <>
            <NavBar 
                navBarView={navBarView}
                handleNavBar={handleNavBar}
            />
        </>
    )
}