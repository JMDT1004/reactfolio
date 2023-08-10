import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (emailValue && !/\S+@\S+\.\S+/.test(emailValue)) {
            alert('Invalid email address');
        }
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    onBlur={(e) => e.target.value === '' && alert('Name must be entered')}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={(e) => e.target.value === '' && alert('Email must be entered')}
                />
                <textarea
                    placeholder="Feedback and Inquiries are welcomed"
                    required
                    onBlur={(e) => e.target.value === '' && alert('Please enter a message for speedy response')}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;