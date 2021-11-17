import React from "react";
import { Link } from "react-router-dom";

function CloseSearch(props) {
  return (
    <Link to="/">
      <button className="close-search" onClick={props.onReconstituteSearch}>
        Close
      </button>
    </Link>
  );
}

export default CloseSearch;
