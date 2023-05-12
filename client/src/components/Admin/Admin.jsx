import style from './Admin.module.css';
import image from '../../assets/heliki.gif';
// import { Link } from 'react-router-dom';
import React from 'react';

const Admin = () => {

    const handleSubmit = () => {

    }

    return(
        <>
            <div className={style.dashboardDiv}>
                <h3 className={style.h3Dashboard}>
                Dashboard
                </h3> 
                <div className={style.guestsDiv}>
                    <div>
                        <h4 className={style.h4Dashboard}>Resumen/Summary</h4>
                        <div className={style.summaryDiv}>
                            <p>Total guests: 2</p>
                            <p>Total vegetarians: 0</p>
                            <p>Total vegans: 1</p>
                            <p>Not attending: 1</p>
                        </div>
                    </div>
                    <h4 className={style.h4Dashboard}>Invitad@s/Guests</h4> 
                    <table>
                        <thead className={style.guestsIcons}>
                            <th><i class="fa-regular fa-user fa-xl"></i></th>
                            <th><i class="fa-regular fa-envelope fa-xl"></i></th>
                            <th><i class="fa-regular fa-calendar-check fa-xl"></i></th>
                            <th><i class="fa-solid fa-utensils fa-xl"></i></th>
                            <th><i class="fa-solid fa-user-plus fa-xl"></i></th>
                        </thead>
                        <tbody >
                            <tr className={style.guestsIcons}>
                                <td>Ale</td>
                                <td><i class="fa-regular fa-eye fa-xl"></i></td>
                                <td><i class="fa-solid fa-check fa-xl"></i></td>
                                <td><i class="fa-solid fa-carrot fa-xl"></i></td>
                                <td><i class="fa-solid fa-check fa-xl"></i></td>
                            </tr>
                            <tr className={style.guestsIcons}>
                                <td>Nati</td>
                                <td><i class="fa-regular fa-eye fa-xl"></i></td>
                                <td><i class="fa-solid fa-check fa-xl"></i></td>
                                <td><i class="fa-solid fa-drumstick-bite fa-xl"></i></td>
                                <td><i class="fa-solid fa-xmark fa-xl"></i></td>
                            </tr>
                            <tr className={style.guestsIcons}>
                                <td>Buch</td>
                                <td><i class="fa-regular fa-eye fa-xl"></i></td>
                                <td><i class="fa-solid fa-xmark fa-xl"></i></td>
                                <td><i class="fa-solid fa-drumstick-bite fa-xl"></i></td>
                                <td><i class="fa-solid fa-xmark fa-xl"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={style.dashboardDiv}>
                    <h4 className={style.h4Dashboard}>Agregar/Add</h4>
            <div>
                <div className={style.rsvpDiv}>
                    <form className={style.rsvpForm} onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <input type="text" Placeholder='Nombre/s' className={style.inputPill}/>
                        </div>
                            <h4  className={style.h4Div}>ASISTENCIA</h4>
                        <div className={style.formDiv}>
                            <span className={style.formSpan}><i class="fa-regular fa-calendar-check fa-xl"></i></span><input type="checkbox" className={style.cbRound}/>
                            <span className={style.formSpan}> <i class="fa-solid fa-user-plus fa-xl"></i></span><input type="checkbox" className={style.cbRound}/> 
                            <br/>
                            <span className={style.formSpan}> <i class="fa-solid fa-xmark fa-xl"></i></span><input type="checkbox" className={style.cbRound}/>
                        </div>
                            <h4  className={style.h4Div}>MENÚ</h4>
                        <div className={style.formDiv}>
                            <input type="checkbox" className={style.cbRound}/> <span className={style.formSpan}> Veganx</span>
                            <br/>
                            <input type="checkbox" className={style.cbRound}/><span className={style.formSpan}> Vegetarianx</span>
                        </div>
                    </form>
                    <button className={style.smallButton}><i class="fa-regular fa-user fa-xl"></i></button>
                   </div>
            </div>
                </div>
            </div>
        
        </>
    )
}

export default Admin;