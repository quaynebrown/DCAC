import React from 'react'
import { AboutWrapper, AboutContent } from './AboutUs.elements';
import LearnMore from '../GlobalComponents/LearnMore';
import aboutImage from '../../assets/misionImg.jpg';

const AboutUs = () => {
    return (
        <section>
            <AboutWrapper>
                <hgroup>
                    <h2>About Us</h2>
                    <h3>Welcome to DCAC</h3>
                </hgroup>
                <AboutContent>
                    <figure>
                        <img src={aboutImage} alt="A tutor helping a black youth on the computer"/>
                    </figure>
                    <p>Diverse Community Achievement Center (DCAC) originally as Black Youth Achievement Center found in 1992 is an incorporated charitable, non profit organization. DCAC serves residents of the Hamilton and Burlinton region.</p>
                </AboutContent>

                <LearnMore color="#000">
                    <a href="#">Learn more about us</a>
                </LearnMore>
            </AboutWrapper>
        </section>
    )
}

export default AboutUs;
