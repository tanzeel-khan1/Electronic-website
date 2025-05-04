import { useEffect, useState } from "react";
import "./Abd.css";

function Abd(){
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    if(savedNotes?.length !== 0){
        setNotes(savedNotes);
    }
  },
   []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === '') return;
    const newNote = { id: Date.now(), text: input }; 
    setNotes([...notes, newNote]); 
    setInput('');
  };
    
    const  showAlert = () => {
        alert('Yeh Kal Apky Ghar par Deliver hojayaga ');
    };
    return(
        <>
        <div className="specil">
            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-iphone16hero-202409?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=MjUrdW9rK0I3Y0hBcFdUR2pNVTRtQVFBVUN4RXE3Y3R0dll5SWIrN0ZjT3h4Q1pzSzliK1BIZFF3RWwzVmo0NlhHUkcvNmtpMGxDZTE1ejhaNlcyMDhpeFZabmFRL2tkSk9HeFdpWGtBay9UT01KOWpHdXNqbndCcFNuZ3JRNmI"></img>
       <h1>iPhone 16 Plus</h1>
       <button onClick={showAlert}>Buy Now</button> 
       <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
       />
                 <button onClick={addNote}>Add</button>

        </div>


        



        </>
    )
}
export default Abd;



