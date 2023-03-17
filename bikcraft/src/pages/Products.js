import React from 'react';
import bike1 from '../img/bicicletas/nimbus.jpg';
import bike2 from '../img/bicicletas/magic.jpg';
import bike3 from '../img/bicicletas/nebula.jpg';
import tracker from '../img/icones/rastreador.svg';
import carbon from '../img/icones/carbono.svg';
import speed from '../img/icones/velocidade.svg';
import engine from '../img/icones/eletrica.svg';

const Products = () => {
	return (
		<div className="product-page">
			<div className="pp-intro-container">
				<div className="pp-intro">
					<p>Choose the best for you</p>
					<h1>our bikes</h1>
				</div>
			</div>

			<div className="products-container">
				<div className="product-card">
					<img src={bike1} alt="Bike"></img>

					<div>
						<h2>Nimbus Stark</h2>
						<p>
							Nimbus Stark is the best Bikcraft ever created by our team.
							It comes equipped with the best accessories, which
							guarantees greater speed.
						</p>

						<div>
							<ul>
								<li>
									<div>
										<img src={engine} alt="icon"></img>
										<p>Electric Engine</p>
									</div>
								</li>
								<li>
									<div>
										<img src={carbon} alt="icon"></img>
										<p>Carbon fiber</p>
									</div>
								</li>
								<li>
									<div>
										<img src={speed} alt="icon"></img>
										<p>50 Km/h</p>
									</div>
								</li>
								<li>
									<div>
										<img src={tracker} alt="icon"></img>
										<p>Tracker</p>
									</div>
								</li>
							</ul>

							<button>More -{'>'}</button>
						</div>
					</div>
				</div>
				<div className="product-card">
					<img src={bike2} alt="Bike"></img>

					<div>
						<h2>Magic Might</h2>
						<p>
							Magic Might is the best Bikcraft ever created by our team.
							It comes equipped with the best accessories, which
							guarantees greater speed.
						</p>

						<div>
							<ul>
								<li>
									<div>
										<img src={engine} alt="icon"></img>
										<p>Electric Engine</p>
									</div>
								</li>
								<li>
									<div>
										<img src={carbon} alt="icon"></img>
										<p>Carbon fiber</p>
									</div>
								</li>
								<li>
									<div>
										<img src={speed} alt="icon"></img>
										<p>40 Km/h</p>
									</div>
								</li>
								<li>
									<div>
										<img src={tracker} alt="icon"></img>
										<p>Tracker</p>
									</div>
								</li>
							</ul>

							<button>More -{'>'}</button>
						</div>
					</div>
				</div>
				<div className="product-card">
					<img src={bike3} alt="Bike"></img>

					<div>
						<h2>Nebula Cosmic</h2>
						<p>
							Nebula Cosmic is the best Bikcraft ever created by our
							team. It comes equipped with the best accessories, which
							guarantees greater speed.
						</p>

						<div>
							<ul>
								<li>
									<div>
										<img src={engine} alt="icon"></img>
										<p>Electric Engine</p>
									</div>
								</li>
								<li>
									<div>
										<img src={carbon} alt="icon"></img>
										<p>Carbon fiber</p>
									</div>
								</li>
								<li>
									<div>
										<img src={speed} alt="icon"></img>
										<p>50 Km/h</p>
									</div>
								</li>
								<li>
									<div>
										<img src={tracker} alt="icon"></img>
										<p>Tracker</p>
									</div>
								</li>
							</ul>

							<button>More -{'>'}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
