import Header from "./components/Header";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Reviews from "./components/Reviews";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Nav />
      <Routes>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
