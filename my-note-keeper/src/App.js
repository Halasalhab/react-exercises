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
  
  if(loading) return <p className="loading">Loading</p> 
  if(error) return <p>Error, please try later</p> 


  return (
    <div className="App">
      <SearchBar />
      <TakeNote setError={setError} setNotes={setNotes} notes={notes}/>
      <div className="notes-container">
        {notes.length? notes.map((note, i)=>{
          return <Note key={note._id} id={note._id} title={note.title} content={note.content} date={note.createdAt} setError={setError} setNotes={setNotes} notes={notes}/>
        }): <p>No Notes Found</p>}
      </div>
    </div>
  );
}

export default App;
