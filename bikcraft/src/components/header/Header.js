import React from 'react';
import logo from '../../img/bikcraft.svg';

const Header = () => {
	return (
		<div className="header">
			<div className="header-container">
				<img src={logo} alt="title" />

				<ul>
					<li>
						<a href="/">Bikes</a>
					</li>
					<li>
						<a href="/">Secures</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
