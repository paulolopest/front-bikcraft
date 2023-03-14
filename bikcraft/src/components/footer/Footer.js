import React from 'react';
import logo from '../../img/bikcraft.svg';
import facebook from '../../img/redes/facebook.svg';
import instagram from '../../img/redes/instagram.svg';
import youtube from '../../img/redes/youtube.svg';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-content">
					<div>
						<img src={logo} alt="Logo"></img>
					</div>

					<div className="footer-card">
						<p>Contact</p>

						<ul>
							<li>+55 21 9999-9999</li>
							<li>contato@bikcraft.com</li>
							<li>Street Ali Perto, 42 - Botafogo</li>
							<li>Rio de Janeiro - RJ</li>
						</ul>

						<div className="footer-sm">
							<img src={facebook} alt="Logo"></img>
							<img src={instagram} alt="Logo"></img>
							<img src={youtube} alt="Logo"></img>
						</div>
					</div>
					<div className="footer-card">
						<p>Information</p>

						<ul>
							<li>Bikes</li>
							<li>Secures</li>
							<li>Contact</li>
							<li>Terms and conditions</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
