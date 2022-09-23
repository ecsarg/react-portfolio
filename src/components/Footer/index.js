import React from 'react';
import github from '../../assets/GitHub-Mark-64px.png';
//import linkedin from '../../assets/LI-In-Bug.png';

function Footer() {
    return (
        <div className='footer-div'>
            <footer>
                <a href='https://github.com/ecsarg' target='blank'>
                <img src={github} alt='' />
                </a>
                <a href='https://www.linkedin.com/in/elliesargent'> <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/>
                </a>
            </footer>
        </div>
    );
}

export default Footer;