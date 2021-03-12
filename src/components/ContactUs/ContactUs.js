import React from 'react';
import { ContactWrapper } from './Contact.elements'
import ContactForm from './ContactForm'

const ContactUs = () => {
    return (
        <section>
            <ContactWrapper>
                <hgroup>
                    <h2>We would love to hear from you.</h2>
                    <h3>Say Hello!</h3>
                </hgroup>
                <ContactForm />
            </ContactWrapper>
        </section>
    )
}

export default ContactUs
