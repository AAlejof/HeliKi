import style from './Form.module.css';
import image from '../../assets/spinningWorld.gif';
import React, { useEffect, useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import {} from '../../redux/actions/actions';
//import Validate from './Validations';
//import swal from 'sweetalert';
//import { useNavigate, Link } from 'react-router-dom';


export default function Form() {

    const handleSubmit = () => {

    }

    return(
        <>
            <div>
                <div className={style.rsvpDiv}>
                    <h3 className={style.h3Div}>RSVP</h3>
                    <form className={style.rsvpForm} onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <input type="text" Placeholder='Nombre/s' className={style.inputPill}/>
                        </div>
                            <h4  className={style.h4Div}>ASISTENCIA</h4>
                        <div className={style.formDiv}>
                            <input type="checkbox" className={style.cbRound}/><span className={style.formSpan}> Sí, obvio! </span>
                            <input type="checkbox" className={style.cbRound}/> <span className={style.formSpan}> Plus 1</span>
                            <br/>
                            <input type="checkbox" className={style.cbRound}/><span className={style.formSpan}> No, perdón! </span>
                        </div>
                            <h4  className={style.h4Div}>MENÚ</h4>
                        <div className={style.formDiv}>
                            <input type="checkbox" className={style.cbRound}/> <span className={style.formSpan}> Veganx</span>
                            <br/>
                            <input type="checkbox" className={style.cbRound}/><span className={style.formSpan}> Vegetarianx</span>
                        </div>
                    </form>
                    <button className={style.smallButton}>ENVIAR</button>
                    <img src={image} alt="spinningWorld" className={style.imgWorld}/>
                </div>
            </div>
        </>
    )

};