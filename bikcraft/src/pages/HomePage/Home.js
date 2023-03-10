import React from 'react';
import homeBike from '../../img/bicicleta/nimbus1.jpg';
import bike1 from '../../img/bicicletas/nebula-home.jpg';

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
				<h1>Choose yours</h1>

				<div>
					<img src="" alt=""></img>
					<h2>aaaaaa</h2>
					<p>aaaaa</p>
				</div>
				<div>
					<img src="" alt=""></img>
					<h2>bbbbb</h2>
					<p>bbbb</p>
				</div>
				<div>
					<img src="" alt=""></img>
					<h2>cccccc</h2>
					<p>ccccc</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
