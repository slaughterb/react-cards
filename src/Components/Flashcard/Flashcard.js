import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
	const [flip, setFlip] = useState(false);

	return (
		<div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
			<div className="front">
				{flashcard.question}
			</div>
			<div className="back">
				<hr />
				{flashcard.answer}
			</div>
		</div>
	);
};

export default Flashcard;