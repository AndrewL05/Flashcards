import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const cards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of Spain?", answer: "Madrid" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What is the capital of Italy?", answer: "Rome" },
    { question: "What country is this?", answer: "Mexico" },
    { question: "What country is this?", answer: "China" },
    { question: "What country is this?", answer: "The Bahamas" },
    { question: "What is the output of this code snippet: console.log('what is the output');", answer: "'what is the output' was the output" },
    { question: "Who is this?", answer: "Bruno Mars" }
  ];

  const [next, setNext] = useState(0);
  const [flip, setFlip] = useState(false);
  const [visitedCards, setVisitedCards] = useState([]);

  const flipCard = () => {
    setFlip(!flip);
  };

  const nextPage = () => {
    let randomCard;
    do {
      randomCard = Math.floor(Math.random() * cards.length);
    } while (visitedCards.includes(randomCard));

    setVisitedCards([...visitedCards, randomCard]);
    setNext(randomCard);
    setFlip(false);

    // Reset visited cards if all cards have been visited
    if (visitedCards.length === cards.length - 1) {
      setVisitedCards([]);
    }
  };

  return (
    <div className="App">
      <Card onClick={flipCard} title={cards[next].question} info={flip ? cards[next].answer : ''} flip={flip} cardNum={cards.length} />
      <button onClick={nextPage}> → </button>
    </div>
  );
};

export default App;