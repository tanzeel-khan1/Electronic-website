import { useState } from "react";
import "./App.css";

export default function SurveyApp() {
  const [responses, setResponses] = useState({});
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const personalQuestions = [
    "What is your name?",
    "What is your address?",
    "What is your contact number?"
  ];

  const studyQuestions = [
    "What is your highest level of education?",
    "How satisfied are you with our service?",
    "Would you recommend us to others?",
    "Any suggestions for improvement?"
  ];

  const handleChange = (index, value) => {
    setResponses({ ...responses, [index]: value });
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleSubmit = () => {
    console.log("Survey Responses:", responses);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <h2 className="title">Survey</h2>
          {submitted ? (
            <p className="thank-you">Thank you for your feedback!</p>
          ) : step === 1 ? (
            <div>
              {personalQuestions.map((question, index) => (
                <div key={index} className="question-container">
                  <label className="question-label">
                    {question}
                  </label>
                  <input
                    type="text"
                    className="question-input"
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                </div>
              ))}
              <button onClick={handleNext} className="submit-button">
                Next
              </button>
            </div>
          ) : (
            <div>
              {studyQuestions.map((question, index) => (
                <div key={index} className="question-container">
                  <label className="question-label">
                    {question}
                  </label>
                  <input
                    type="text"
                    className="question-input"
                    onChange={(e) => handleChange(index + personalQuestions.length, e.target.value)}
                  />
                </div>
              ))}
              <button onClick={handleSubmit} className="submit-button">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
