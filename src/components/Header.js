import React from 'react';

import social1 from '../img/social1.svg';
import social2 from '../img/social2.svg';
import social3 from '../img/social3.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="title">
                    <h1 id="firstname">Kaylen Milliner</h1>
                    {/* <h1 id="lastname">Milliner</h1> */}
                </div>
                <div className="subtitle">
                    <p>Full Stack Web Developer<br></br><span className="stack-title">HTML {"\u007c"} CSS {"\u007c"} JavaScript {"\u007c"} React {"\u007c"} Backend {"\u007c"} Python</span></p>
                    <div className="social-container">
                        <a href="https://github.com/kmilliner888"><img className="social" src={social2} alt="White Github Icon"/></a>
                        <a href="https://www.linkedin.com/in/kaylenmilliner/"><img className="social" src={social1} alt="White LinkedIn Icon"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;