import React from "react";

function SearchBooks(){
        return (
          <div className="search-books">
            <SearchBar />
            <SearchResults books={props.books} />
          </div>
        );
};

export default SearchBooks;