import React from "react";
import Signup from "./components/signup";
import login from "./components/login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
