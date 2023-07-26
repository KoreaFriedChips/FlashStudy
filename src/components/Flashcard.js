import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import FlashcardForm from "./FlashcardForm";
import {
  stoich,
  atomic,
  periodicity,
  bonding,
  energetics,
  kinetics,
  equilibrium,
  acidBase,
  redox,
  organic,
  measurement,
  optionC,
} from "../assets/questions.js";

const Flashcard = ({ category }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log(category);
    switch (category) {
      case "stoich":
        setFlashcards(stoich);
        break;
      case "atomic":
        setFlashcards(atomic);
        break;
      case "periodicity":
        setFlashcards(periodicity);
        break;
      case "equilibrium":
        setFlashcards(equilibrium);
        break;
      case "bonding":
        setFlashcards(bonding);
        break;
      case "energetics":
        setFlashcards(energetics);
        break;
      case "kinetics":
        setFlashcards(kinetics);
        break;
      case "redox":
        setFlashcards(redox);
        break;
      default:
        setFlashcards([]);
    }
  }, [location]);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };
  const handlePrevCard = () => {
    if (currentCardIndex === 0) setCurrentCardIndex(flashcards.length - 1);
    else
      setCurrentCardIndex((prevIndex) => (prevIndex - 1) % flashcards.length);
    setIsFlipped(false);
  };
  const handleCardClick = () => {
    setIsFlipped((prevState) => !prevState);
  };
  const handleAddFlashcard = (newFlashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  const flashcard = flashcards[currentCardIndex];

  return (
    <div>
      <h1>FlashStudy</h1>
      <div className={`flashcard-list`}>
        <div
          className={`flashcard ${isFlipped ? "flip" : ""}`}
          onClick={handleCardClick}
        >
          <p>
            {flashcard
              ? isFlipped
                ? flashcard.answer
                : flashcard.question
              : ""}
          </p>
        </div>
        <div className="nextButton prevButton">
          <button onClick={handleNextCard}>Next Card</button>
          <button onClick={handlePrevCard}>Prev Card</button>
        </div>
        {category === undefined ? (
          <FlashcardForm onAddFlashcard={handleAddFlashcard} />
        ) : null}
      </div>
    </div>
  );
};

export default Flashcard;
