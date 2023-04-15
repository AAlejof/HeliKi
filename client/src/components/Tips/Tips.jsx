import style from './Tips.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Tips = () => {
	return (
		<>
			<div className={style.sectionsDiv}>
				<h3 className={style.h3Div}>TIPS GENERALES </h3>
				<h3 className={style.h3Div}>TRANSPORTE</h3>
				<h3 className={style.h3Div}>MAPA DE LA CIUDAD</h3>
				<h3 className={style.h3Div}>VIAJES POR EL CONTINENTE</h3>
			</div>
			<div>
				<Link to="/home">
					<button className={style.smallButton}>
						VOLVER
					</button>
				</Link>
			</div>
		</>
	);
};

export default Tips;
