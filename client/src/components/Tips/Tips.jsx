import style from './Tips.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Tips = () => {
	return (
		<>
			<div className={style.sectionsDiv}>
				<div className={style.tipsDiv}>
					<p className={style.h3Div}>TIPS GENERALES</p>
					<p className={style.faDiv}>
						<i class="fa-light fa-plus fa-2xl"></i>
					</p>
				</div>
				<div className={style.tipsDiv}>
					<p className={style.h3Div}>TRANSPORTE</p>
					<p className={style.faDiv}>
						<i class="fa-light fa-plus fa-2xl"></i>
					</p>
				</div>
				<div className={style.tipsDiv}>
					<p className={style.h3Div}>MAPA DE LA CIUDAD</p>
					<p className={style.faDiv}>
						<i class="fa-light fa-plus fa-2xl"></i>
					</p>
				</div>
				<div className={style.tipsDiv}>
					<p className={style.h3Div}>VIAJES POR SUDAMÉRICA</p>
					<p className={style.faDiv}>
						<i class="fa-light fa-plus fa-2xl"></i>
					</p>
				</div>
			</div>
			<div>
				<Link to="/home">
					<button className={style.smallButton}>VOLVER</button>
				</Link>
			</div>
		</>
	);
};

export default Tips;
