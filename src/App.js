import React from "react";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import { BooksContextProvider } from "./BooksContext";
import NotFound from "./components/NotFound";

export default function BooksApp() {
  return (
    <div className="app">
      <BooksContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BooksContextProvider>
    </div>
  );
}
