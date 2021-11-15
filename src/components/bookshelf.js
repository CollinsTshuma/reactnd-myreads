import React from "react";
import Book from "./book";

function BookShelf(props) {
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookshelf.moniker}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books
            .filter((onebook) => onebook.bookshelf === props.bookshelf.key)
            .map((onebook) => (
              <li>
                <Book
                  onebook={onebook}
                  bookshelf={props.bookshelf.key}
                  key={onebook.id}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
