import { createContext, useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

// Destructing The API'S Functions
const { getAll, update, search } = BooksAPI;

const BooksContext = createContext([]);

export function BooksContextProvider(props) {
  const [allBooks, setAllBooks] = useState([]);
  // Setting query Search State
  const [result, setResult] = useState("");
  const [bookSearchResult, setBookSearchResult] = useState([]);
  const [bookIdMap, setBookIdMap] = useState([new Map()]);
  const [mergedBooks, setMergedBooks] = useState([]);

  // Get All Books Data
  useEffect(() => {
    getAll().then((data) => {
      setAllBooks(data);
      setBookIdMap(booksMap(data));
    });
  }, []);

  // Change Shelf Handler
  function bookShelfChanger(book, shelf) {
    const updatedBookShelf = allBooks.map((ele) => {
      if (ele.id === book.id) {
        book.shelf = shelf;
        return book;
      } else {
        return ele;
      }
    });

    setAllBooks(updatedBookShelf);
    update(book, shelf);
  }

  // Calling query Search API
  useEffect(() => {
    let searchResult = true;

    if (result) {
      search(result).then((data) => {
        if (data.error) {
          setBookSearchResult([]);
        } else {
          if (searchResult === true) {
            setBookSearchResult(data);
          }
        }
      });
    }

    // Unmount Data from Latest Query
    return () => {
      searchResult = false;
      setBookSearchResult([]);
    };
  }, [result]);

  useEffect(() => {
    const combined = bookSearchResult.map((book) => {
      if (bookIdMap.has(book.id)) {
        return bookIdMap.get(book.id);
      } else {
        return book;
      }
    });
    setMergedBooks(combined);
  }, [bookSearchResult]);

  function booksMap(books) {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  }
  console.log(mergedBooks);
  return (
    <BooksContext.Provider
      value={{
        allBooks,
        bookShelfChanger,
        result,
        setResult,
        bookSearchResult,
        setBookSearchResult,
        mergedBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
