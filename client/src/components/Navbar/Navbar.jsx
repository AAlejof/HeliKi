import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return(
        <>
            <div className={style.navbarDiv}>
                <p className={style.pNavbarDiv}>
                    Helen & Kiki
                </p>
            </div>
        
        </>
    )
}

export default Navbar;