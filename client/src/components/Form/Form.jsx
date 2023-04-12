import style from './Form.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import {} from '../../redux/actions/actions';
import Validate from './Validations';
import swal from 'sweetalert';
import { useNavigate, Link } from 'react-router-dom';


export default function Form() {
    return(
        <>
            <div>
                <div className={style.rsvpDiv}>
                    <h3 className={style.h3Div}>RSVP</h3>
                    <p  className={style.pRsvpDiv}>ASISTENCIA</p>
                    
                    <button className={style.smallButton}>ENVIAR</button>
                </div>
            </div>
        </>
    )

};