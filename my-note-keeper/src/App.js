import { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import SearchBar from "./components/SearchBar/SearchBar";
import TakeNote from "./components/TakeNote/TakeNote";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [notes]);

  const fetchData = async () => {
    try {
      await axios.get('http://localhost:3001/notes').then((response) => {
        setNotes(response.data);
        setLoading(false)
      })
    } catch (e) {
      setError(e);
    }
  };
  
  const creatNote = async (noteData) => {
    try {
      const response = await axios.post('http://localhost:3001/notes', noteData);
      const newNote = response.data;
      setNotes([...notes, newNote]);
    } catch (error) {
      setError(error)
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:3001/notes/${noteId}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    } catch (error) {
      setError(error)
    }
  };

  const updateNote = async (note) =>{
    try {
      await axios.put(`http://localhost:3001/notes/${note.id}`, {title:note.title, content:note.content}).then((response)=>{
        const updatedNote  = response.data;
        const noteIndex = notes.findIndex((note) => note.noteID === note.id);
        if (noteIndex !== -1) {
          const updatedNotes = [...notes];
          updatedNotes[noteIndex] = updatedNote;
          setNotes(updatedNotes);
        }
      })
    } catch (error) {
      setError(error)
    }
  }

  if(loading) return <p className="loading">Loading</p> 
  if(error) return <p>Error, please try later</p> 


  return (
    <div className="App">
      <SearchBar />
      <TakeNote creatNote={creatNote}/>
      <div className="notes-container">
        {notes.length? notes.map((note, i)=>{
          return <Note key={i} id={note._id} title={note.title} content={note.content} date={note.createdAt} deleteNote={deleteNote} updateNote={updateNote}/>
        }): <p>No Notes Found</p>}
      </div>
    </div>
  );
}

export default App;
