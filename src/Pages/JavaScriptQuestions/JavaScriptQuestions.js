import React from 'react';
import Flashcard from '../../Components/Flashcard/Flashcard';
import CardList from '../../Components/CardList/CardList';
import flashcardData from './cardData.json';

const JavaScriptQuestions = () => {
  var data = JSON.parse(JSON.stringify(flashcardData));
  return (
    <div>
      <div className="overlay-container">
        <h1>Flashcards Topic: JavaScript</h1>
        <h2>Question Set Contains {data.flashcards.length} Flashcards</h2>
      </div>
      <CardList flashcards={data.flashcards} />
    </div>
  );
}

export default JavaScriptQuestions;