import React, { useContext, useState } from "react";
import Shelf from "./Shelf";
import BooksContext from "../BooksContext";

export default function Shelves() {
  const { allBooks, bookShelfChanger } = useContext(BooksContext);

  // Filter AllBooks To Send them to each
  const read = allBooks.filter((book) => book.shelf === "read");
  const wantToRead = allBooks.filter((book) => book.shelf === "wantToRead");
  const currentlyReading = allBooks.filter(
    (book) => book.shelf === "currentlyReading"
  );

  return (
    <React.Fragment>
      <Shelf
        booksShelf={read}
        title={"Read"}
        bookShelfChanger={bookShelfChanger}
      />
      <Shelf
        booksShelf={wantToRead}
        title={"Want To Read"}
        bookShelfChanger={bookShelfChanger}
      />
      <Shelf
        booksShelf={currentlyReading}
        title={"Currently Reading"}
        bookShelfChanger={bookShelfChanger}
      />
    </React.Fragment>
  );
}
