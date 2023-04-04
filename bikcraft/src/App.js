import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import './styles/style.scss';
import Footer from './components/footer/Footer';
import Products from './pages/Products';

const App = () => {
	return (
		<>
			<Header />
			{/* <Products /> */}
			<Home />
			<Footer />
		</>
	);
};

export default App;
