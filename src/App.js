import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";
import BooksList from "./BooksList";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      // console.log(books);
    });
  }
  onChangeShelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState(prevState => ({
      books: prevState.books.filter(b => b.id !== book.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
    //
    // console.log("changing the shelf", book, shelf);
    // BooksAPI.update(book, shelf).then(results => {
    //   // this.setState({ books });
    //
    //   this.setState(state => ({
    //     books: state.books.filter(b => b.id !== book.id).concat([book])
    //   }));
    //   console.log(results);
    // });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksList
              booksList={this.state.books}
              onChangeShelf={this.onChangeShelf}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              booksList={this.state.books}
              onChangeShelf={this.onChangeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
