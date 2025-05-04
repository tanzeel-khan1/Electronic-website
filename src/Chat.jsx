import { useEffect, useState } from "react";
import "./Abd.css";

function Chat() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const [iphone16Notes, setIphone16Notes] = useState([]);
  const [iphone15Notes, setIphone15Notes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes?.length !== 0) {
      setNotes(savedNotes);
      setIphone16Notes(savedNotes.filter(note => note.id.toString().includes('16')));
      setIphone15Notes(savedNotes.filter(note => note.id.toString().includes('15')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const getCurrentTimeAndDay = () => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const time = now.toLocaleTimeString();
    return { day, time };
  };

  const addNote = (phone) => {
    if (input.trim() === '') return;

    const { day, time } = getCurrentTimeAndDay();

    const newNote = { 
      id: phone === 'iphone16' ? `16_${Date.now()}` : `15_${Date.now()}`, 
      text: input,
      day: day,
      time: time,
    };

    setNotes([...notes, newNote]);

    if (phone === 'iphone16') {
      setIphone16Notes([...iphone16Notes, newNote]);
    } else {
      setIphone15Notes([...iphone15Notes, newNote]);
    }

    setInput('');
  };

  const removeNote = (id, phone) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);

    if (phone === 'iphone16') {
      setIphone16Notes(updatedNotes.filter(note => note.id.toString().includes('16')));
    } else {
      setIphone15Notes(updatedNotes.filter(note => note.id.toString().includes('15')));
    }
  };

  const showAlert = () => {
    alert('Yeh Kal Apky Ghar par Deliver hojayaga');
  };

  return (
    <>
      <div className="specil">
        <img 
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-iphone16hero-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=MjUrdW9rK0I3Y0hBcFdUR2pNVTRtQVFBVUN4RXE3Y3R0dll5SWIrN0ZjT3h4Q1pzSzliK1BIZFF3RWwzVmo0NlhHUkcvNmtpMGxDZTE1ejhaNlcyMDhpeFZabmFRL2tkSk9HeFdpWGtBay9UT01KOWpHdXNqbndCcFNuZ3JRNmI" alt="iPhone 16"/>
        <h1>iPhone 16 Plus</h1>
        <button onClick={showAlert}>Buy Now</button> 
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addNote('iphone16')}>Add</button>

        <div className="notes">
          <h2>Notes for iPhone 15:</h2>
          {iphone15Notes.map(note => (
            <div key={note.id}>
              <p>{note.text}</p>
              <p><small>{note.day} - {note.time}</small></p> 
              <button onClick={() => removeNote(note.id, 'iphone15')}>Delete</button>
            </div>
          ))}
        </div>
      </div>

      <div className="specil">
        <h1>iPhone 15 Plus</h1>
        <img 
          src="https://regen.pk/cdn/shop/files/REGEN-iPhone15proMax-BlackTitanium.png?v=1744469083" alt="iPhone 15" />
        <button onClick={showAlert}>Buy Now</button>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addNote('iphone15')}>Add</button>

        <div className="notes">
          <h2>Notes for iPhone 16:</h2>
          {iphone16Notes.map(note => (
            <div key={note.id}>
              <p>{note.text}</p>
              <p><small>{note.day} - {note.time}</small></p> 
              <button onClick={() => removeNote(note.id, 'iphone16')}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chat;
