import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Components/Home/Home';

import QuestionsPage from '../../Pages/QuestionsPage/QuestionsPage';


const Header = () => {
	const javaScriptSources = ['https://interviewbit.com/javascript-interview-questions'];
	const reactSources = ['https://www.interviewbit.com/react-interview-questions/', 'https://www.geeksforgeeks.org/reactjs-virtual-dom/'];
	const nodeSources = ['https://www.interviewbit.com/node-js-interview-questions/', 'https://www.geeksforgeeks.org/node-interview-questions-and-answers/'];
	const dsaSources = ['https://leetcode.com'];

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/react-cards" element={<Home />} />
				<Route path="/javascript" element={<QuestionsPage topic="javascript" sources={javaScriptSources} />} />
				<Route path="/react" element={<QuestionsPage topic="react" sources={reactSources} />} />
				<Route path="/node" element={<QuestionsPage topic="node" sources={nodeSources} />} />
				<Route path="/dsa" element={<QuestionsPage topic="dsa" sources={dsaSources} />} />
			</Routes> 
		</Router>
	);
}

export default Header;