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
            <Wrapper>
                <StatsContainer />
                <CountriesContainer />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`