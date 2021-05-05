import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import { HeaderArea, HeaderContent } from './Header.elements';
import LearnMore from '../GlobalComponents/LearnMore';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const Header = () => {

    const [opacity, setOpacity] = useState(0);
    const MainHeading = styled.h1`
        opacity: ${opacity};
        transition: all 9.5s;
    `
    useEffect(() => {
        setOpacity(1)
    });
    
    return (
        <HeaderArea>
            <Navbar />

            <HeaderContent>
                <hgroup>
                    <MainHeading>Diverse Community Achievement Center of Hamilton and Burlington Region Inc.</MainHeading>
                    <h2>
                        <Typewriter
                            options={{
                                strings: ['Dedicated to helping youth achieve their potential'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 5,
                                delay: 75
                            }}
                        />
                    </h2>
                </hgroup>
            </HeaderContent>

            <LearnMore color="#fff">
                <a href="#about-us">Learn More</a>
            </LearnMore>

        </HeaderArea>
    )
}

export default Header;
