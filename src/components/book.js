import React from "react";

function Book(props) {

  const propBookShelf = props.bookshelf;
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
        <div className="book-shelf-changer">
          <select value={propBookShelf}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.onebook.title}</div>
      <div className="book-authors">{props.onebook.author}</div>
    </div>
  );
}

export default Book;
