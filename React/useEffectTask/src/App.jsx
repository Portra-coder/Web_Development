import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./components/Products";
import Users from "./components/Users";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h2>useEffect Task</h2>
          <ul>
            <Link to="/"> products</Link>
            <Link to="/users"> users</Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
