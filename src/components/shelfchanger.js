import React, { Component } from "react";

class ShelfChanger extends Component {
  state = {
    value: this.props.bookshelf,
  };
  
  manageModification = (e) => {
    const { shiftBookToShelf, onebook } = this.props;
    this.setState({ value: e.target.value });
    shiftBookToShelf(onebook, e.target.value);
  };

  render() {
    const { value } = this.state;
    const {manageModification}= this;
    return (
      <div className="book-shelf-changer">
        <select value={value} onChange={manageModification}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
