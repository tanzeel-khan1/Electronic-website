import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "why is Owner of Facebook'?",
    options: ["Mark Zuckerberg", "Billgates", "Jeff Bezos", "Elon Must"],
    answer: "Mark Zuckerberg",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    answer: "4",
  },
];
function Quiz() {
  const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
  const   [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer)  {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
        setCurrent(next);
    } else {
           setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-box">

        
        {showResult ? (
          <div className="result">
                 <h2>Quiz Finished!</h2>
            <p>Your Score: {score} / {questions.length}  </p>
          </div>
        ) : (
          <>
            <h2>{questions[current].question}</h2>
        <div className="options">
                        {questions[current].options.map((option, idx) => (
                <button key={idx} onClick={() => handleAnswer(option)}>


           {option}
                  </button>
              ))}
            </div>
            </>
        )}
      </div>
    </div>

  );
}
export default Quiz;

