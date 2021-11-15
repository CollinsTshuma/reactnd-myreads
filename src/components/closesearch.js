import React from "react";

function CloseSearch() {
  return (
    <button
      className="close-search"
      onClick={() => this.setState({ showSearchPage: false })}
    >
      Close
    </button>
  );
}

export default CloseSearch;
