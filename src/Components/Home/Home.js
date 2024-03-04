import React from 'react';
import CardList from '../CardList/CardList';

const CARDS = [
  { 
    id: 1,
    question: 'How does this app work? (Click and see!)',
    answer: 'You may flip over each of the presented flashcards to review certain questions.'
  },
  {
    id: 2,
    question: 'What content can I review?',
    answer: 'There is a variety of programming related trivia that can be accessed and read through. Generally up to the current point there has been an emphasis on JavaScript and front end oriented concepts.'
  },
  {
    id: 3,
    question: 'How do I select the content I want to review?',
    answer: 'The top navigation menu has links to different data sets containing questions in their respective topic. There are quiz flashcards on common technologies such as JavaScript and its popular libraries.'
  }
];

const Home = () => {
	return (
		<div>
			<div className="overlay-container">
				<h1>React Cards</h1>
				<h2>Review Technical Trivia</h2>
			</div>
			<CardList flashcards={CARDS} />
		</div>
	);
}

export default Home;