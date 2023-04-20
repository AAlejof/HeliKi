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
                <div className={style.guestsDiv}>
                    <h4 className={style.h4Dashboard}>Invitad@s/Guests</h4> 
                    <table>
                        <thead className={style.guestsIcons}>
                            <th><i class="fa-regular fa-user fa-xl"></i></th>
                            <th><i class="fa-regular fa-envelope fa-xl"></i></th>
                            <th><i class="fa-regular fa-calendar-check fa-xl"></i></th>
                            <th><i class="fa-solid fa-utensils fa-xl"></i></th>
                            <th><i class="fa-solid fa-user-plus fa-xl"></i></th>
                        </thead>
                    </table>
                </div>
            </div>
        
        </>
    )
}

export default Admin;