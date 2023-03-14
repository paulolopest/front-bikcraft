import React from 'react';
import Header from './components/header/Header';
import Home from './pages/HomePage/Home';
import './styles/style.scss';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<Footer />
		</>
	);
};

export default App;
