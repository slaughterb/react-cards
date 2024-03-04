import React from 'react';
import Flashcard from '../Flashcard/Flashcard';

const CardList = ({ flashcards }) => {
	return (
		<div className="card-container">
			{flashcards.map((card, i) => {
				return (
					<div key={i}>
						<div className="card-header overlay-container">#{card.id} of {flashcards.length}</div>
						<Flashcard flashcard={card} key={card.id} />
					</div>
				)
			})}
		</div>
	);
}

export default CardList;