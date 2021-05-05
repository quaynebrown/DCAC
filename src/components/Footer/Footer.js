import React from 'react';
import { FooterElement, FooterWrapper } from './Footer.elements'

const Footer = () => {
    return (
        <FooterElement>
            <FooterWrapper>
                <p>&copy; Created by <a href="https://www.linkedin.com/in/quaynebrown/">Quayne</a>. All rights reserved</p>
                <p>Header photo by <a href="https://unsplash.com/@epicantus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daria Nepriakhina</a> on <a href="https://unsplash.com/">Unsplash</a>
                </p>
                <p>About us photo by <a href="https://unsplash.com/@heylagostechie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">heylagostechie</a> on <a href="https://unsplash.com/"> Unsplash</a>
                </p>
            </FooterWrapper>
        </FooterElement>
    )
}

export default Footer
