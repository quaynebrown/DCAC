import React from 'react';
import { TutoringSection, TutoringWrapper, TutoringContent } from './Tutoring.elements';
import { EntypoClock, EntypoCredit, EntypoOpenBook, EntypoLaptop } from 'react-entypo-icons';

const Tutoring = () => {
    return (
        <TutoringSection id="tutoring">
            <TutoringWrapper>
                <hgroup>
                    <h2>Tutoring and mentorship</h2>
                    <h3>Programs</h3>
                </hgroup>

                <TutoringContent>
                    <article>
                        <hgroup>
                            <h3><EntypoOpenBook/></h3>
                            <h4>Elementary level</h4>
                        </hgroup>
                        <ul>
                            <li>Mathematics</li>
                            <li>English</li>
                            <li>Science</li>
                            <li>French</li>
                            <li>Social Studies</li>
                        </ul>
                    </article>
                    <article>
                        <hgroup>
                            <h3><EntypoLaptop/></h3>
                            <h4>Secondary level</h4>
                        </hgroup>
                        <ul>
                            <li>Homework assistance in any subject area</li>
                        </ul>
                    </article>
                    <article>
                        <hgroup>
                            <h3><EntypoCredit/></h3>
                            <h4>Cost</h4>
                        </hgroup>
                        <ul>
                            <li>$55 per month</li>
                            <li>Subsidy available upon request</li>
                        </ul>                       
                    </article>
                    <article>
                        <hgroup>
                            <h3><EntypoClock /></h3>
                            <h4>When</h4>
                        </hgroup>
                        <ul>
                            <li>Saturdays 9:30 am - 12:30 pm</li>
                        </ul>                        
                    </article>
                </TutoringContent>

            </TutoringWrapper>
        </TutoringSection>
    )
}

export default Tutoring;
