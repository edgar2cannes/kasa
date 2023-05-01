import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Page/About";
import Home from "./Page/Home";
import Logement from "./Page/Logement";
import Error from "./Page/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}