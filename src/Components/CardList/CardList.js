import React from 'react';
import Flashcard from '../Flashcard/Flashcard';

const CardList = ({ flashcards }) => {
	return (
		<div className="card-container">
			{flashcards.map((card) => {
				return (
					<div>
						<div className="card-header overlay-container">#{card.id} of {flashcards.length}</div>
						<Flashcard flashcard={card} key={card.id} />
					</div>
				)
			})}
		</div>
	);
}

export default CardList;