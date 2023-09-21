import Note from "./components/Note/Note";
import SearchBar from "./components/SearchBar/SearchBar";
import TakeNote from "./components/TakeNote/TakeNote";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <TakeNote />
      <div className="notes-container">
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}

export default App;
