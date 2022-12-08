import Header from "./components/Header";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Reviews from "./components/Reviews";
import Landing from "./components/Landing";
import SingleReview from "./components/Single-review";
import Comments from "./components/Comments";

function App() {
  // const [vote, setVote] = useState(0);
  return (
    <div className="App">
      <Header className="App-header" />
      <Nav />
      <Routes>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
        <Route
          path="/reviews/:review_id/comments"
          element={<Comments />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
