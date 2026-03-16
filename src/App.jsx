import "./App.css";
import LogicBoard from "./components/LogicBoard";
import Navbar from "./components/Navbar";
import SleepGif from "./components/SleepGif";

function App() {
  return (
    <div className="window-wrapper">
      <main class="container">
        <Navbar />
        <LogicBoard />
        <SleepGif />
      </main>
    </div>
  );
}

export default App;
