import style from './Tips.module.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import image from '../../assets/map.svg'


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
						<p className={style.h3Div} onClick={toggleTips}>SICHERHEITSHINWEISE</p>
						<p className={style.faDiv} onClick={toggleTips}>
							{(showTips === false) ? (<i class="fa-solid fa-plus fa-xl"></i>)
								: (<i class="fa-solid fa-chevron-up fa-xl"></i>)}
						</p>
					</div>
					{(showTips === true) ?
						<div className={style.secAdvDiv}>
							<ol>
								<li>Lass deine Wertsachen / Rucksack / Handtasche auch in Bars und Restaurants nicht unbeaufsichtigt.</li>
								<li>Nutze dein Handy am besten nicht an Straßenecken oder in der U-Bahn.</li>
								<li>Vermeide es, dich nachts in Seitenstraßen aufzuhalten.</li>
								<li>Verlasse das Taxi immer zur Seite des Bürgersteigs.</li>
							</ol>
						</div>
						: null}
				</div>
				<div className={style.tipsDiv}>
					<p className={style.h3Div} onClick={toggleTransport}>TRANSPORTMITTEL</p>
					<p className={style.faDiv} onClick={toggleTransport}>
						{(showTransport === false) ? (<i class="fa-solid fa-plus fa-xl"></i>)
							: (<i class="fa-solid fa-chevron-up fa-xl"></i>)}
					</p>
				</div>
				{(showTransport === true) ?
					<div className={style.secAdvDiv}>
						<ul>
							<li><b>Uber</b></li>
							<li><b>Taxi</b>: Nur mit Bargeld. Nenne immer die Straßenecke (2 Straßennamen).</li>
							<li><b>SUBE (ÖPNV-Karte):</b> <br />Du erhältst eine SUBE-Karte im Kiosk oder in den U-Bahn Stationen. Mit dieser Karte kannst du alle Busse, sowie die U-Bahn nutzen.</li>
							<li><b>Subte ( U-Bahn):</b> Das U-Bahn Netz ist jedoch etwas begrenzt. Nutze sie am besten nur, wenn sich eine Haltestelle in nächster Nähe befindet.</li>
							<li><b>Bus:</b> Wenn du den Bus mit der richtigen Busnummer siehst, musst du ihn an der Bushaltestelle per Handzeichen zu dir rufen. Manchmal sind dort jedoch auch längere Warteschlangen.</li>
						</ul>
					</div>
					: null}
				<div className={style.tipsDiv}>
					<p className={style.h3Div} onClick={toggleMap}>STADTPLAN VON BUENOS AIRES</p>
					<p className={style.faDiv} onClick={toggleMap}>
						{(showMap === false) ? (<i class="fa-solid fa-plus fa-xl"></i>)
							: (<i class="fa-solid fa-chevron-up fa-xl"></i>)}
					</p>
				</div>
				{(showMap === true) ?
					<div className={style.mapDiv}>
						<p className={style.mapP}>Wir haben ein paar Tipps für dich, was du in den unterschiedlichen Stadtteilen unternehmen kannst.</p>
						<Link to='https://mapa.buenosaires.gob.ar/mapas/?lat=-34.623744&lng=-58.434734&zl=13&modo=transporte' >
							<button className={style.smallButton}><i class="fa-solid fa-map-location-dot fa-xl"></i></button>
						</Link>
						<img className={style.map} src={image} alt="bsasMap" />
						<div className={style.hoodsDiv}>
							<h5>Palermo:</h5>
							<p>Das größte und gleichzeitig auch das modernste Viertel in Buenos Aires. Besonders zum Ausgehen ist Palermo perfekt.</p>
							<h6>UNSERE TIPPS:</h6>
							<ul>
								<li>Restaurants: Chuí (vegetarisch/vegan), Tigre Morado (Fisch/peruanisch), Don Julio (Steak), Fukuro (Ramen), Alchemy (Eiscreme), Rapanui (Eiscreme)...</li>
								<li>Pubs & Bars: Uptown, The Hole Bar, Festival...</li>
								<li>Sehenswertes: <br />- Street Art <br />- La Plaza Serrano - mit einem schönen Markt am Wochenende <br />- Jardín Botánico <br />- Jardín Japonés <br />- Los Bosques de Palermo <br />- El Rosedal <br />- El Planetario</li>
							</ul>
						</div>
						<div className={style.hoodsDiv}>
							<h5>Recoleta:</h5>
							<p>Ein Stadtteil voller Kunst und Kultur</p>
							<h6>UNSERE TIPPS:</h6>
							<ul>
								<li>Cementerio de Recoleta</li>
								<li>Centro Cultural de Recoleta</li>
								<li>El Ateneo Grand Splendid</li>
								<li>Museo de Bellas Artes</li>
								<li>Museo Malba</li>
							</ul>
						</div>
						<div className={style.hoodsDiv}>
							<h5>San Nicolás & Monserrat:</h5>
							<p>Gilt als historisches und politisches Zentrum von Buenos Aires.</p>
							<h6>UNSERE TIPPS:</h6>
							<ul>
								<li>Casa Rosada (Regierungsgebäude)</li>
								<li>Plaza de Mayo</li>
								<li>Obelisco - auf der breitesten Straße der Welt</li>
								<li>Teatro Colón</li>
								<li>Centro Cultural Kirchner (CCK)</li>
							</ul>
						</div>
						<div className={style.hoodsDiv}>
							<h5>San Telmo:</h5>
							<p>Ein alter Stadtteil voller Kunst, Kultur und Antiquitätenläden.</p>
							<h6>UNSERE TIPPS:</h6>
							<ul>
								<li>Feria de San Telmo (am Wochenende)</li>
								<li>Mercado de San Telmo</li>
								<li>Plaza Dorrego</li>
								<li>Museo de Arte Moderno de Buenos Aires</li>
								<li>Museo Histórico Nacional</li>
							</ul>
						</div>
						<div className={style.hoodsDiv}>
							<h5>Puerto Madero:</h5>
							<p>Puerto Madero lädt vor allem zu einem Spaziergang entlang der Flusses oder der großen Fußgängerzone ein. <br />Fun Fact: Puerto Madero ist ein Viertel, das dem weiblichen Geschlecht eine besondere Ehre erweist. Die Straßen sind nach Frauen aus Kunst, Wissenschaft, Politik und Kultur benannt. Außerdem gilt die Brücke ,,Puente de la Mujer” als eine Hommage an die Frauen.</p>
							<h6>UNSERE TIPPS:</h6>
							<ul>
								<li>Puente de la Mujer</li>
								<li>Reserva Ecológica Costanera Sur</li>
								<li>Museo Fortabat</li>
								<li>Fuente de Las Nereidas</li>
								<li>Costanera Sur food trucks</li>
								<li>Casino</li>
							</ul>
						</div>
						<div className={style.hoodsDiv}>
							<h5>La Boca:</h5>
							<p>Fußball und bunte Gassen.</p>
							<h6>UNSERE TIPPS:</h6>
							<ul>
								<li>Caminito (Gasse der bunten Wellblechhütten)</li>
								<li>Estadio Boca Juniors (Fußballstadion)</li>
							</ul>
							<p>Achtung: Nach 16:00 solltet ihr euch nicht mehr in diesem Viertel aufhalten, da es dann zu gefährlich ist.</p>
						</div>
					</div>
					: null}
				<div className={style.tipsDiv}>
					<p className={style.h3Div} onClick={toggleSA}>WOHIN GEHT DIE REISE WEITER?</p>
					<p className={style.faDiv} onClick={toggleSA}>
						{(showSA === false) ? (<i class="fa-solid fa-plus fa-xl"></i>)
							: (<i class="fa-solid fa-chevron-up fa-xl"></i>)}
					</p>
				</div>
				{(showSA === true) ?
					<div className={style.travelAdvDiv}>
						<p>Reisetipps für Argentinien:</p>
						<div className={style.travelDiv}>
							<h5>Süden</h5>
							<ul>
								<li>Bariloche - Berge und Seen</li>
								<li>Calafate - Perito-Moreno-Gletscher - Berge und Seen</li>
								<li>Puerto Madryn - Hier kannst du Wale, Delfine, Pinguine und Robben entdecken</li>
								<li>Tierra del Fuego - Das Ende der Welt</li>
							</ul>
						</div>
						<div className={style.travelDiv}>
							<h5>Norden</h5>
							<ul>
								<li>Quebrada de Humahuaca und Cerro de los Siete Colores (Rainbow Mountains)</li>
								<li>Salinas Grandes (Salzwüste) </li>
								<li>Tren a las Nubes (Wolkenzug)</li>
								<li>Valle de la luna in San Juan (Tal des Mondes)</li>
							</ul>
						</div>
						<div className={style.travelDiv}>
							<h5>Iguazu</h5>
							<p>Wasserfälle und Dschungel<br /> Tag 1. Brasilianische Seite <br /> Tag 2. Argentinische Seite + Bootstour <br />
							Vergiss nicht deinen Reisepass beim Grenzübergang. Am besten in einer wasserdichten Hülle. <br />Dreiländereck: Argentinien, Brasilien, Paraguay</p>
						</div>
						<div className={style.travelDiv}>
							<h5>Mendoza</h5>
							<p> Weingüter am Fuße der Anden.</p>
						</div>
						<div className={style.travelDiv}>
							<h5>Córdoba</h5>
							<p>Die zweitgrößte Stadt Argentiniens, umgeben von einer schönen Berg- und Seenlandschaft.</p>
						</div>
						<br />
						<p><b>Viel Spaß & buen viaje :)</b></p>
					</div>
					: null}
			</div>
			<div>
				<Link to="/home/de">
					<button className={style.smallButton}>ZURÜCK</button>
				</Link>
			</div>
		</>
	);
};

export default Tips;
