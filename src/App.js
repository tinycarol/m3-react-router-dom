import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-2">
        <Router />
      </div>
    </div>
  );
}

export default App;
