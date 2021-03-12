import React, { useState } from 'react';
import { Form } from './Contact.elements'


const ContactForm = () => {
    return (
        <Form>
            <div>
                <label className="visuallyhidden" htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="Name: "/>

                <label className="visuallyhidden" htmlFor="email">Email: </label>
                <input type="text" id="email" placeholder="Email: "/>

                <label className="visuallyhidden" htmlFor="phone">Phone: </label>
                <input type="text" id="phone" placeholder="Phone: "/>
            </div>
            <div>
                <label className="visuallyhidden" htmlFor="message">Message: </label>
                <textarea name="message" id="message" placeholder="Message:"></textarea>
            </div>
        </Form>
    )
}

export default ContactForm;
