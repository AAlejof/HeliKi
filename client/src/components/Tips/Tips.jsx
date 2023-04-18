import style from './Tips.module.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';


const Tips = () => {

	const [showTips, setShowTips] = useState(false);
	const [showMap, setShowMap] = useState(false);

	const toggleTips = () => {
		setShowTips(!showTips);
	};

	const toggleMap = () => {
		setShowMap(!showMap);
	};

	return (
		<>
			<div className={style.sectionsDiv}>
				<div>
				<div className={style.tipsDiv}>
					<p className={style.h3Div}>TIPS GENERALES</p>
					<p className={style.faDiv} onClick={toggleTips}>
						{ (showTips=== false) ? (<i class="fa-light fa-plus fa-2xl"></i>) 
						: (<i class="fa-solid fa-chevron-up fa-xl"></i>) }
					</p>
				</div>
				{(showTips===true) ? 
				<div>
					<ul>
						<li>No se mueran</li>
						<li>Diviertanse</li>
						<li>Posta, no se mueran</li>
					</ul>
				</div> 
				: null }
				</div>
				<div className={style.tipsDiv}>
					<p className={style.h3Div}>TRANSPORTE</p>
					<p className={style.faDiv}>
						<i class="fa-light fa-plus fa-2xl"></i>
					</p>
				</div>
				<div className={style.tipsDiv}>
					<p className={style.h3Div}>MAPA DE LA CIUDAD</p>
					<p className={style.faDiv} onClick={toggleMap}>
					{ (showMap=== false) ? (<i class="fa-light fa-plus fa-2xl"></i>) 
						: (<i class="fa-solid fa-chevron-up fa-xl"></i>) }
					</p>
				</div>
				{(showMap===true) ? 
				<div>
					mapaaaa
				</div> 
				: null }
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
