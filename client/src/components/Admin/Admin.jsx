import style from './Admin.module.css';
import image from '../../assets/heliki.gif';
// import { Link } from 'react-router-dom';
import React from 'react';

const Admin = () => {
    return(
        <>
            <div className={style.dashboardDiv}>
                <h3 className={style.h3Dashboard}>
                Dashboard
                </h3> 
                <div>
                    Invitad@s/Guests
                </div>
            </div>
        
        </>
    )
}

export default Admin;