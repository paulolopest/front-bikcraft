import React from 'react';
import homeBike from '../img/bicicleta/nimbus1.jpg';
import bike1 from '../img/bicicletas/nimbus-home.jpg';
import bike2 from '../img/bicicletas/nebula-home.jpg';
import bike3 from '../img/bicicletas/magic-home.jpg';
import tracker from '../img/icones/rastreador.svg';
import electricEngine from '../img/icones/eletrica.svg';
import customTools from '../img/fotos/tecnologia.jpg';
import partner1 from '../img/parceiros/caravan.svg';
import partner2 from '../img/parceiros/dogs.svg';
import partner3 from '../img/parceiros/flexblog.svg';
import partner4 from '../img/parceiros/handel.svg';
import partner5 from '../img/parceiros/lescone.svg';
import partner6 from '../img/parceiros/ranek.svg';
import partner7 from '../img/parceiros/surfbot.svg';
import partner8 from '../img/parceiros/wildbeast.svg';
import testimony from '../img/fotos/depoimento.jpg';
import teste from '../';

const Home = () => {
	return (
		<div className="home">
			<div className="home-container">
				<div>
					<h1>
						Custom made bikes<span>.</span>
					</h1>
					<p>
						Electric bicycles of high precision and quality, tailor-made
						for the customer. Explore the world at your own speed with
						Bikcraft.
					</p>
					<button href="/">SELECT YOURS</button>
				</div>
				<img src={homeBike} alt="bike"></img>
			</div>

			<div className="bike-example">
				<h1>
					Choose yours<span>.</span>
				</h1>

				<div className="ex-card-container">
					<div className="bike-card">
						<img src={bike1} alt=""></img>
						<h2>Nimbus Stark</h2>
						<p>R$ 4999</p>
					</div>
					<div className="bike-card">
						<img src={bike2} alt=""></img>
						<h2>Nebula Cosmic</h2>
						<p>R$ 3999</p>
					</div>
					<div className="bike-card">
						<img src={bike3} alt=""></img>
						<h2>Magic Might</h2>
						<p>R$ 2499</p>
					</div>
				</div>
			</div>

			<div className="bike-custom-components">
				<div className="b-cc-container">
					<div>
						<h2 id="bcc-title">Advanced Technology</h2>
						<h1>you choose the colors and components</h1>
						<p>
							Each Bikcraft is unique and has its own identity. The
							measurements will be exact for your body and height,
							ensuring greater comfort and ergonomics in your pedaling.
							You can also completely customize its colors.
						</p>
						<h2 id="choose-bike">CHOOSE A MODEL</h2>

						<div className="mini-card-bcc-container">
							<div>
								<img src={electricEngine} alt=""></img>
								<h3>Electric Engine</h3>
								<p>
									Every Bikcraft is equipped with an electric motor
									that lasts up to 120 hours. The battery is recharged
									with your energy expended when pedaling.
								</p>
							</div>
							<div>
								<img src={tracker} alt=""></img>
								<h3>Tracker</h3>
								<p>
									We know how precious your Bikcraft is, so we've added
									tracking and anti-theft systems to ensure your peace
									of mind.
								</p>
							</div>
						</div>
					</div>
				</div>

				<img className="tools-photo" src={customTools} alt="tools"></img>
			</div>

			<div className="partner-container">
				<h1>
					Our partners<span>.</span>
				</h1>
				<ul>
					<li>
						<img src={partner1} alt=""></img>
					</li>
					<li>
						<img src={partner2} alt=""></img>
					</li>
					<li>
						<img src={partner3} alt=""></img>
					</li>
					<li>
						<img src={partner4} alt=""></img>
					</li>
					<li>
						<img src={partner5} alt=""></img>
					</li>
					<li>
						<img src={partner6} alt=""></img>
					</li>
					<li>
						<img src={partner7} alt=""></img>
					</li>
					<li>
						<img src={partner8} alt=""></img>
					</li>
				</ul>
			</div>

			<div className="testimony-container">
				<div className="tc-photo">
					<img src={testimony} alt="bike"></img>
				</div>

				<div className="tc-info">
					<p>
						"Cycling has always been my passion, what the people at
						Bikcraft have done is intensify my love for this activity. I
						recommend it to everyone I love."
					</p>
					<span>- Ana Júlia</span>
				</div>
			</div>

			<div className="secures">
				<div className="secures-container">
					<h1>
						Secures<span>.</span>
					</h1>

					<div className="scc-container">
						<div className="secures-card">
							<div>
								<h1 className="silver">Silver</h1>
								<h1>R$ 199</h1>
							</div>

							<ul>
								<li>Two Exchanges per year</li>
								<li>Technical assistance</li>
								<li>Support 08:00 to 18:00</li>
								<li>State coverage</li>
							</ul>

							<button className="btn-silver">Subscribe</button>
						</div>

						<div className="secures-card">
							<div>
								<h1 className="gold">Gold</h1>
								<h1>R$ 299</h1>
							</div>

							<ul>
								<li>Five Exchanges per year</li>
								<li>Especial assistance</li>
								<li>24h Support</li>
								<li>National coverage</li>
								<li>Partner discount</li>
								<li>Bikcraft Club Access</li>
							</ul>

							<button className="btn-gold">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
