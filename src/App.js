import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import TextGrid from "./components/TextGrid";

function App() {
  return (
    <div className="App">
      <Header title="Wordle" />
      <div className="body">
        <TextGrid nRows={5}/>
      </div>
    </div>
  );
}

export default App;
