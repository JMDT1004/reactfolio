import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/JMDT1004"
                    target="_blank"
                    rel="noopener noreferrer">GitHub</a>
            </div>
            <p>&copy; {new Date().getFullYear()} JMDT1004. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
