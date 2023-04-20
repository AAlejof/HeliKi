import style from './Tips.module.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';


const Tips = () => {

	const [showTips, setShowTips] = useState(false);
	const [showTransport, setShowTransport] = useState(false);
	const [showMap, setShowMap] = useState(false);
	const [showSA, setShowSA] = useState(false);

	const toggleTips = () => {
		setShowTips(!showTips);
	};

	const toggleTransport = () => {
		setShowTransport(!showTransport);
	};

	const toggleMap = () => {
		setShowMap(!showMap);
	};

	const toggleSA = () => {
		setShowSA(!showSA);
	};

	return (
		<>
			<div className={style.sectionsDiv}>
				<div>
				<div className={style.tipsDiv}>
					<p className={style.h3Div } onClick={toggleTips}>TIPS GENERALES </p>
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
					<p className={style.h3Div} onClick={toggleTransport}>TRANSPORTE</p>
					<p className={style.faDiv} onClick={toggleTransport}>
					{ (showTransport=== false) ? (<i class="fa-light fa-plus fa-2xl"></i>) 
						: (<i class="fa-solid fa-chevron-up fa-xl"></i>) }
					</p>
				</div>
				{(showTransport===true) ? 
				<div>
					tomate el 60 ramal Massshwih (uds seguro lo pronuncian bien). Pero no te quedés dormido porque sos pollo
				</div> 
				: null }
				<div className={style.tipsDiv}>
					<p className={style.h3Div} onClick={toggleMap}>MAPA DE LA CIUDAD</p>
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
					<p className={style.h3Div} onClick={toggleSA}>VIAJES POR SUDAMÉRICA</p>
					<p className={style.faDiv} onClick={toggleSA}>
					{ (showSA=== false) ? (<i class="fa-light fa-plus fa-2xl"></i>) 
						: (<i class="fa-solid fa-chevron-up fa-xl"></i>) }
					</p>
				</div>
				{(showSA===true) ? 
				<div>
					ganamos 10 mundiales, gatoh!
				</div> 
				: null }
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
