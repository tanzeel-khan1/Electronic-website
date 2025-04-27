import React, { useState, useEffect } from 'react';

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));


    if (savedNotes?.length !== 0) {
      setNotes(savedNotes)  ;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === '') return;
    const newNote = { id: Date.now(), text: input };
    setNotes([...notes, newNote]);
    setInput('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <div >
        <h1>Notes App</h1>
        
        <div>
          <input
            type="text"
            placeholder="Write a note..."
            value={input}
            onChange={(e) => setInput(e.target.value)}/>
          <button onClick={addNote}>Add</button>
          <a href='http://localhost:3000'>jgytfy</a>
        </div>

        <ul >
          {notes.map(note => (
            <li key={note.id} >
              <span>{note.text}</span>
              <button onClick={() => deleteNote(note.id)}> ✕  </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notepad;
