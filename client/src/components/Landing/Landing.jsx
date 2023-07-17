import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Landing = () => {
    return(
        <>
            <div className={style.landingDiv}>
                
                <p className={style.pLandingDiv}><Link to='/home/de'>DEUTSCH</Link></p>
                <p className={style.pLandingDiv}><Link to='/home'>ESPAÑOL</Link></p>
                <p className={style.pLandingDiv}><Link to='/home/ko'>한국어</Link></p>
            </div>
            
        </>
    )
}

export default Landing;