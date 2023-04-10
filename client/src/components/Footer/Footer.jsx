import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
	return (
		<>
			<div className={style.footerDiv}>
				<div>
					<Link>
						<p className={style.pFooterDiv}>Wedding invitation</p>
					</Link>
				</div>
				<div>
					<p className={style.pFooterDiv}>18.11.2023</p>
				</div>
			</div>
				<div className={style.devDiv}>
					<p> <a href="https://github.com/AAlejof">Developed by Aalejof</a> </p>
				</div>
		</>
	);
};

export default Footer;
