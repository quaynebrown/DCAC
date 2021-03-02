import React from 'react';
import Navbar from './navbar/Navbar';
import { HeaderArea, HeaderContent, LearnMore } from './Header.elements'

const Header = () => {
    
    return (
        <HeaderArea>
            <Navbar />

            <HeaderContent>
                <h1>We create websites</h1>
                <h2>That works!</h2>
            </HeaderContent>

            <LearnMore>
                <a href="#">Learn More</a>
            </LearnMore>

        </HeaderArea>
    )
}

export default Header;
