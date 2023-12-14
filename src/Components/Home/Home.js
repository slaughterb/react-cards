import React from 'react';
import CardList from '../CardList/CardList';

const CARDS = [
  { 
    id: 1,
    question: 'How does this app work? (Click and see!)',
    answer: 'You may flip over each of the presented flashcards to review certain questions'
  },
  {
    id: 2,
    question: 'What content can I review?',
    answer: 'There is a variety of programming related trivia that can be accessed and read through'
  },
  {
    id: 3,
    question: 'How do I select the content I want to review?',
    answer: 'The top navigation menu has links to different data sets containing questions in their respective topic'
  }
];

const Home = () => {
	return (
		<div>
			<div class="overlay-container">
				<h1>React Cards</h1>
				<h2>Review Technical Trivia</h2>
			</div>
			<CardList flashcards={CARDS} />
		</div>
	);
}

export default Home;