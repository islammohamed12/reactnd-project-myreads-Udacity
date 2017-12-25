import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Book extends Component {
  onChangeShelf = event => {
    const shelf = event.target.value;
    // console.log(this.props.bookInfo, shelf);
    if (this.props.onChangeShelf)
      this.props.onChangeShelf(this.props.bookInfo, shelf);
  };
  render() {
    // console.log(this.props);

    const { bookInfo } = this.props;
    let bookCover;
    if (bookInfo.imageLinks !== undefined)
      bookCover = bookInfo.imageLinks.thumbnail;

    let authors = bookInfo.authors ? bookInfo.authors.join(" , ") : "";
    // https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookCover})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={bookInfo.shelf ? bookInfo.shelf : "none"}
              onChange={this.onChangeShelf}
            >
              <option value="moveto" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
