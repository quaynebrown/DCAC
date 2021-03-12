import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const LearnMore = (props) => {

    const [colour, setColor] = useState('white');

    useEffect(() => {
        setColor(props.color)
    }, []);

    const LearnMoreStyled = styled.div`
    display: flex;
    justify-content: center;

    a{
        color:${colour};
        font-weight:700;
        font-size: 1.4rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        position: relative;

        &:visited{
             color:${colour};
        }

        &::before{
            content: '';
            border-bottom: 2px solid #b89840;
            width: 40px;
            position: absolute;
            top: 30px;
            left: calc(50% - 20px);
        }
    }
`
    return (
        <LearnMoreStyled>
            {props.children}
        </LearnMoreStyled>
    )
}

export default LearnMore
