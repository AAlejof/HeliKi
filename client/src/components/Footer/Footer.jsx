import style from './Footer.module.css';
import React from 'react';

const Footer = () => {
	return (
		<>
			<div className={style.footerDiv}>
				<div>

					<p className={style.pFooterDiv}>Wedding invitation</p>
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
