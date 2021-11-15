import React from "react";
import BookShelf from "./bookshelf";

function BookShelves(props) {
  
  const ALL_SHELVES = [
    {moniker: "Currently Reading", key: "currentlyReading"},
    {moniker: "Want To Read", key: "wantToRead"},
    {moniker: "Read", key: "read"},
  ];

    return (
      <div >
        {ALL_SHELVES.map((bookshelf) => (
          <li>
            <BookShelf bookshelf={bookshelf} books={props.books} key={bookshelf.key}/>
          </li>
        ))}
      </div>
    );
  
}

export default BookShelves;
