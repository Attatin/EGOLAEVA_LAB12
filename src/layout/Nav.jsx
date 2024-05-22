import React from 'react';
import { Link } from 'react-router-dom';
import navs from './Nav.module.css';
import img1 from '../images/logo.svg';

import img3 from '../images/measering.svg';
import img2 from '../images/calculation.svg';

const Nav = () => {
    return (
        <nav className={navs.nav}>
            <div className={navs.container}>
                <img src={img1} alt='pic'/>
            </div>
            <div className={navs.links}>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/Aboutus">About Us</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
                <li><Link to="/Contacts">Contacts</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                
                
            </div>
            <div className={navs.buttons}>

                <Link to="/MakeRequest" className={`${navs.button1} `}>
                <img src={img3} alt="pic" />Make Request</Link>

                <Link to="/Calculation" className={`${navs.button2} `}>
                <img src={img2} alt="pic" />Calculation</Link>
            </div>
        </nav>
    );
};

export default Nav;