import React from 'react'
import NavLinks from './NavLinks'
import { Nav, NavbarContainer } from './Navbar.elements'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <div className="logo">
                    LOGO
                </div>
                <NavLinks />
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
