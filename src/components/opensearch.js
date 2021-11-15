import React from "react";

function OpenSearch() {
  return (
    <div className="open-search">
      <button onClick={() => this.setState({ showSearchPage: true })}>
        Add a book
      </button>
    </div>
  );
}

export default OpenSearch;
