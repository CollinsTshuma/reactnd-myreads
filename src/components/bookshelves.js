import React from "react";
import BookShelf from "./bookshelf";

function BookShelves(props) {
  const ALL_SHELVES = [
    { moniker: "Currently Reading", key: "currentlyReading" },
    { moniker: "Want To Read", key: "wantToRead" },
    { moniker: "Read", key: "read" },
  ];

  return (
    <div>
      {ALL_SHELVES.map((shelf) => (
        <li key={shelf.key}>
          <BookShelf
            shelf={shelf}
            books={props.books}
            shiftBookToShelf={props.shiftBookToShelf}
          />
        </li>
      ))}
    </div>
  );
}

export default BookShelves;
