import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    };

    return (
        <div>
            <form className='form'>
                <input
                    className='nameInput'
                    type="text"
                    placeholder="Name"
                    required
                    onBlur={(e) => e.target.value === '' && alert('Name must be entered')}
                />
                <input
                    className='emailInput'
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={(e) => e.target.value === '' && alert('Email must be entered')}
                />
                <textarea
                    className='textArea'
                    placeholder="Feedback and Inquiries are welcomed"
                    required
                    onBlur={(e) => e.target.value === '' && alert('Please enter a message for speedy response')}
                />
                <button
                    className='btn'
                    type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;