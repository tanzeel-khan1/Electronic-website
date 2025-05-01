// import React, { useState, useEffect } from 'react';

// function Notepad() {
//   const [notes, setNotes] = useState([]);
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     const savedNotes = JSON.parse(localStorage.getItem('notes'));


//     if (savedNotes?.length !== 0) {
//       setNotes(savedNotes)  ;
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('notes', JSON.stringify(notes));
//   }, [notes]);

//   const addNote = () => {
//     if (input.trim() === '') return;
//     const newNote = { id: Date.now(), text: input };
//     setNotes([...notes, newNote]);
//     setInput('');
//   };

//   const deleteNote = (id) => {
//     setNotes(notes.filter(note => note.id !== id));
//   };

//   return (
//     <div>
//       <div >
//         <h1>Notes App</h1>
        
//         <div>
//           <input
//             type="text"
//             placeholder="Write a note..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}/>
//           <button onClick={addNote}>Add</button>
//           <a href='http://localhost:3000'>jgytfy</a>
//         </div>

//         <ul >
//           {notes.map(note => (
//             <li key={note.id} >
//               <span>{note.text}</span>
//               <button onClick={() => deleteNote(note.id)}> ✕  </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Notepad;



import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Tolstoy", "Hemingway", "Dostoevsky"],
    answer: "Shakespeare",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    answer: "4",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
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
            <p>Your Score: {score} / {questions.length}</p>
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
