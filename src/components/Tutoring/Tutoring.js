import React from 'react';
import { TutoringSection, TutoringWrapper, TutoringContent } from './Tutoring.elements'

const Tutoring = () => {
    return (
        <TutoringSection>
            <TutoringWrapper>
                <hgroup>
                    <h2>Tutoring and mentorship</h2>
                    <h3>Programs</h3>
                </hgroup>

                <TutoringContent>
                    <article>
                        <h4>Elementary level subjects includes</h4>
                        <ul>
                            <li>Mathematics</li>
                            <li>English</li>
                            <li>Science</li>
                            <li>French</li>
                            <li>Social Studies</li>
                        </ul>
                    </article>
                    <article>
                        <h4>Secondary level</h4>
                        <ul>
                            <li>Homework assistance in any subject area</li>
                        </ul>
                    </article>
                    <article>
                        <h4>Cost</h4>
                        <p>$55 per month</p>
                        <p>Subsidy available upon request</p>
                    </article>
                    <article>
                        <h4>When</h4>
                        <p>Saturdays 9:30 am - 12:30 pm</p>
                    </article>
                </TutoringContent>

            </TutoringWrapper>
        </TutoringSection>
    )
}

export default Tutoring;
