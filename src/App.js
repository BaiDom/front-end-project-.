import Header from "./components/Header";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Reviews from "./components/Reviews";
import Landing from "./components/Landing";
import SingleReview from "./components/Single-review";

function App() {
  const [reviewId, setReviewId] = useState("");

  return (
    <div className="App">
      <Header className="App-header" />
      <Nav />
      <Routes>
        <Route
          path="/reviews"
          element={<Reviews reviewId={reviewId} setReviewId={setReviewId} />}
        ></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/reviews/:review_id"
          element={
            <SingleReview reviewId={reviewId} setReviewId={setReviewId} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
