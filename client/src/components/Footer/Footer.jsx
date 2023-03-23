import style from './Footer.module.css';
import { Link } from 'react-router-dom';
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
		</>
	);
};

export default Footer;
