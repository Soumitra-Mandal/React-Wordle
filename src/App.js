import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import TextGrid from "./components/TextGrid";

function App() {
  return (
    <div className="App">
      <Header title="Wordle" />
      <div className="body">
        <TextGrid />
      </div>
    </div>
  );
}

export default App;
