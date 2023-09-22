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

  const fetchData = () => {
    try {
      axios.get('http://localhost:3001/notes').then((response) => {
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

  if(loading) return <p className="loading">Loading</p> 
  if(error) return <p>Error, please try later</p> 


  return (
    <div className="App">
      <SearchBar />
      <TakeNote creatNote={creatNote}/>
      <div className="notes-container">
        {notes.length? notes.map((note, i)=>{
          return <Note key={i} title={note.title} content={note.content} date={note.createdAt}/>
        }): <p>No Notes Found</p>}
      </div>
    </div>
  );
}

export default App;
