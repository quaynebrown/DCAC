import React from 'react';
import { ContactWrapper, ContactInformation, ContactLink } from './Contact.elements'
import ContactForm from './ContactForm';
import { EntypoClock } from 'react-entypo-icons';

const ContactUs = () => {
    return (
        <section id="contact">
            <ContactWrapper>
                <hgroup>
                    <h2>We would love to hear from you.</h2>
                    <h3>Say Hello!</h3>
                </hgroup>

                {/* <ContactInformation>
                    <ContactLink href="tel:000-000-0000" icon={EntypoClock}>000-000-0000</ContactLink>
                    <a href="dcactutoring@gmail.com">dcactutoring@gmail.com</a>
                </ContactInformation> */}
                <ContactForm />
            </ContactWrapper>
        </section>
    )
}

export default ContactUs
