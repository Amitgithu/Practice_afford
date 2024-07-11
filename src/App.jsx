import React from "react";
import { Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import Quotes from "./components/Quotes";
import Recipes from "./components/Recipes";
import Comments from "./components/Comments";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
