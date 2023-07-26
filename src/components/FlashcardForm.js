// FlashcardForm.js
import React, { useState } from "react";

const FlashcardForm = ({ onAddFlashcard }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === "" || answer.trim() === "") {
      return;
    }
    onAddFlashcard({ question, answer });
    setQuestion("");
    setAnswer("");
  };

  return (
    <div>
      <form className="flashcard-form" onSubmit={handleSubmit}>
        <label>
          Question: &nbsp;
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <label>
          Answer: &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <button type="submit">Add Flashcard</button>
      </form>
    </div>
  );
};

export default FlashcardForm;
