import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Book from "./Book";
import BookShelf from "./BookShelf";
class BookList extends Component {
  render() {
    // console.log("BookList All Props", this.props);
    const { booksList, onChangeShelf } = this.props;
    //Filtering the Books array based on categories
    // console.log("BooksList", booksList);
    // const currentlyReading = booksList.filter(
    //   book => book.shelf === "currentlyReading"
    // );
    // const wantToRead = booksList.filter(book => book.shelf === "wantToRead");
    // const read = booksList.filter(book => book.shelf === "read");
    const shelves = {
      currentlyReading: "Currently Reading",
      wantToRead: "Want To Read ",
      read: "Read"
    };
    // console.log("BooksList currentlyReading", currentlyReading);
    // console.log("BooksList wantToRead", wantToRead);
    // console.log("BooksList read", read);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object.keys(shelves).map((shelfKey, index) => (
              <BookShelf
                shelfTitle={shelves[shelfKey]}
                shelfBooks={booksList.filter(book => book.shelf === shelfKey)}
                onChangeShelf={onChangeShelf}
                key={shelfKey}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
