import React from 'react'
import NavLinks from './NavLinks'
import { Nav, NavbarContainer } from './Navbar.elements'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <p className="logo">
                    DCAC
                </p>
                <NavLinks />
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
