import React from 'react';

import social1 from '../img/social1.svg';
import social2 from '../img/social2.svg';
import social3 from '../img/social3.svg';

const Contact = () => {
    return (
        <div className="contact">
            <div>
                <a href="mailto:info@kaylenmilliner.com">Contact Me</a>
            </div>
            <div className="social-container">
                <a href="https://github.com/kmilliner888"><img className="social" src={social2} alt="White Github Icon"/></a>
                <a href="https://www.linkedin.com/in/kaylenmilliner/"><img className="social" src={social1} alt="White LinkedIn Icon"/></a>
            </div>
        </div>
    )
};

export default Contact;