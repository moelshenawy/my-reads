import React, { useContext } from "react";
import { useNavigate } from "react-router";
import BooksContext from "../BooksContext";
import Books from "./Books";

export default function Search() {
  const { result, setResult, bookSearchResult } = useContext(BooksContext);

  let navigate = useNavigate();

  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => navigate("/")}>
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={result}
              onChange={(e) => setResult(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookSearchResult.map((book) => (
              <li key={book.id}>
                <Books book={book} bookSearchResult={bookSearchResult} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
