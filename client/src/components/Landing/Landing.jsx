import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Landing = () => {
    return(
        <>
            <div className={style.landingDiv}>
                
                <p className={style.pLandingDiv}>DEUTSCH</p>
                <p className={style.pLandingDiv}><Link to='/home'>ESPAÑOL</Link></p>
                <p className={style.pLandingDiv}>한국어</p>
            </div>
            
        </>
    )
}

export default Landing;