import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Components/Home/Home';
import JavaScriptQuestions from '../../Pages/JavaScriptQuestions/JavaScriptQuestions';

const Header = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/javascript" element={<JavaScriptQuestions />} />
			</Routes>
		</Router>
	);
}

export default Header;