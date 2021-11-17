import React from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Book from "./components/book";
import BookShelves from "./components/bookshelves";
import CloseSearch from "./components/closesearch";
import ListBooksTitle from "./components/listbookstitle";
import OpenSearch from "./components/opensearch";
import SearchBooksInput from "./components/searchbooksinput";
import { debounce } from "throttle-debounce";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,

    books: [],
    seekBooks: [],
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  };

  shiftBookToShelf = (onebook, bookshelf) => {
    BooksAPI.update(onebook, bookshelf).then((books) => {
      console.log(books);
    });

    const Book = this.state.books;
    const modifiedBooks = Book.map((book) => {
      if (book.id === onebook.id) {
        book.bookshelf = bookshelf;
      }
      return book;
    });

    this.setState({
      books: modifiedBooks,
    });
  };

  lookForBooks = debounce(250, false, (query) => {
    console.log(query);
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        console.log(books);
        if (books.error) {
          this.setState({ seekBooks: [] });
        } else {
          this.setState({ seekBooks: books });
        }
      });
    } else {
      this.setState({ seekBooks: [] });
    }
  });

  reconstituteSearch = () => {
    this.setState({ seekBooks: [] });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/search">
            <div className="search-books">
              <div className="search-books-bar">
                <CloseSearch onReconstituteSearch={this.reconstituteSearch} />
                <SearchBooksInput onLookingFor={this.lookForBooks} />
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.seekBooks.map((onebook) => (
                    <Book
                      onebook={onebook}
                      bookshelf="none"
                      key={onebook.id}
                      shiftBookToShelf={this.shiftBookToShelf}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </Route>

          <Route exact path="/">
            <div className="list-books">
              <ListBooksTitle />
              <div className="list-books-content">
                <div>
                  <BookShelves
                    books={this.state.books}
                    shiftBookToShelf={this.shiftBookToShelf}
                  />
                </div>
              </div>
              <OpenSearch />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
