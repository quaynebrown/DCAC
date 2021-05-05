import React from 'react'
import NavLinks from './NavLinks'
import { Nav, NavbarContainer, HamburgerBtn } from './Navbar.elements'

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <p className="logo">
                    DCAC
                </p>
                <NavLinks />
            </NavbarContainer>
            <HamburgerBtn /> 
        </Nav>
    )
}

export default Navbar
