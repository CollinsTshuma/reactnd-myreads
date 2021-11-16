import React from "react";
import ShelfChanger from "./shelfchanger";

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.onebook.imageurl})`,
          }}
        />
        <ShelfChanger
          onebook={props.onebook}
          bookshelf={props.bookshelf}
          shiftBookToShelf={props.shiftBookToShelf}
        />
      </div>
      <div className="book-title">{props.onebook.title}</div>
      <div className="book-authors">{props.onebook.author}</div>
    </div>
  );
}

export default Book;
