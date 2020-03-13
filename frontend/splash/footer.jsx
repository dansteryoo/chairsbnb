import React from 'react';

const Footer = () => {
    return (
        <nav className='footer-container' >
            <ul className='footer-links'>
                <li className='footer-li-1'>
                    <a href='https://github.com/dansteryoo' target='_blank'>
                        <img src={window.github} />
                    </a>
                </li>
                <li className='footer-li-2'>
                    <a href='https://www.linkedin.com/in/dansteryoo/' target='_blank'>
                        <img src={window.linkedin} />
                    </a>
                </li>
                <li className='footer-li-3'>
                    <a href='https://angel.co/dansteryoo' target='_blank'>
                        <img src={window.angellist} />
                    </a>
                </li>
                <li className='footer-li-4'>
                    </li>
            </ul>
        </nav>
    )
}

export default Footer;


