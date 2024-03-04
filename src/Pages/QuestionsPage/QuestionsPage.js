import React from 'react';
import CardList from '../../Components/CardList/CardList';
import flashcardData from '../../CardData/cardData.json';

const QuestionsPage = (props) => {
  var data = JSON.parse(JSON.stringify(flashcardData[props.topic]));
  return (
    <div>
      <div className="overlay-container">
        <h1>Flashcards Topic: { props.topic }</h1>
        <h2>Question Set Contains {data.flashcards.length} Flashcards</h2>
        <div className="sources">
          <div>Source(s): </div>
          { props.sources && props.sources.map((src, i) => (
            <div key={i}>{src}</div>
          ))}
        </div>
      </div>
      <CardList flashcards={data.flashcards} />
    </div>
  );
}

export default QuestionsPage;