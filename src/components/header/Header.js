import React from 'react';
import Navbar from './navbar/Navbar';
import { HeaderArea, HeaderContent } from './Header.elements';
import LearnMore from '../GlobalComponents/LearnMore'

const Header = () => {
    
    return (
        <HeaderArea>
            <Navbar />

            <HeaderContent>
                <hgroup>
                    <h1>We create websites</h1>
                    <h2>That works!</h2>
                </hgroup>
            </HeaderContent>

            <LearnMore color="#fff">
                <a href="#">Learn More</a>
            </LearnMore>

        </HeaderArea>
    )
}

export default Header;
