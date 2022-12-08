import Header from "./components/Header";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Reviews from "./components/Reviews";
import Landing from "./components/Landing";
import SingleReview from "./components/Single-review";
import Comments from "./components/Comments";
import Categories from "./components/Categories";

function App() {
  const [user, setUser] = useState("cooljmessy");
  return (
    <div className="App">
      <Header className="App-header" user={user} />
      <Nav user={user} />
      <Routes>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
        <Route
          path="/reviews/:review_id/comments"
          element={<Comments user={user} setUser={setUser} />}
        ></Route>
        <Route path="/api/categories" element={<Categories />}></Route>
      </Routes>
    </div>
  );
}

export default App;
