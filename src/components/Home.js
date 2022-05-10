import React from "react";
import { useNavigate } from "react-router";
import Search from "./Search";
import Shelves from "./Shelves";

export default function Home() {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      {window.pathname === "/search" ? (
        <Search />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelves />
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => navigate("/search")}>Add a book</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
