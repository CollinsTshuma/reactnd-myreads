import React from "react";
import Book from "./book";

function BookShelf(props) {
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf.moniker}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books
            .filter((onebook) => onebook.shelf === props.shelf.key)
            .map((onebook) => (
              <li key={onebook.id}>
                <Book
                  onebook={onebook}
                  bookshelf={props.shelf.key}
                  shiftBookToShelf={props.shiftBookToShelf}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
