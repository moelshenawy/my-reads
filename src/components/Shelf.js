import React from "react";
import Books from "./Books";

export default function Shelf({ title, booksShelf,bookShelfChanger }) {
  return (
    <React.Fragment>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksShelf.map((book) => (
              <li key={book.id}>
                <Books book={book}  bookShelfChanger={bookShelfChanger}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
}
