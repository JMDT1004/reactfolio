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
                    onBlur={(e) => e.target.value === '' && alert('This field is required')}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={(e) => e.target.value === '' && alert('This field is required')}
                />
                <textarea
                    placeholder="Message"
                    required
                    onBlur={(e) => e.target.value === '' && alert('This field is required')}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;