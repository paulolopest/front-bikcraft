import React from 'react';
import Header from './components/header/Header';
import Home from './pages/HomePage/Home';
import './styles/style.scss';

const App = () => {
	return (
		<div>
			<Header />
			<Home />
		</div>
	);
};

export default App;
