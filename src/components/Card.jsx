import React from 'react';
import '../App.css';

const Card = ({ title, info, flip, onClick, cardNum }) => {
  return (
    <div className={`card ${flip ? 'flipped' : ''}`} onClick={onClick}>
        <h1>Quiz Flashcards</h1>
        <h3>Test your knowledge!</h3>
        <h4>Number of cards: {cardNum}</h4>
      <div className="container">
        <div className="card-inner">
          <div className="card-front">
            <h2>{title}</h2>
          </div>
          <div className="card-back">
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


