import React, { Component } from "react";

class SearchBooksInput extends Component {
  state = {
    value: "",
  };
  manageModification = (e) => {
    const { onLookingFor } = this.props;
    let fig = e.target.value;
    this.setState({ value: e.target.value }, () => {
      onLookingFor(fig);
    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.state.value}
          onChange={this.manageModification}
          autoFocus
        />
      </div>
    );
  }
}
export default SearchBooksInput;
