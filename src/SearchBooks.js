import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { DebounceInput } from "react-debounce-input";

class SearchBooks extends Component {
  state = {
    // query: "",
    searchResults: []
  };
  //https://www.npmjs.com/package/react-debounce-input
  updateQuery = query => {
    // this.setState({ query: query.trim() });
    if (query) {
      BooksAPI.search(query, 10).then(books => {
        // console.log("search Result", books);

        if (
          !books.error &&
          document.getElementById("search-box").value !== ""
        ) {
          books.map(book => {
            //update the search results with the current books shelfs
            let booksInState = this.props.booksList.filter(
              b => b.id === book.id
            );
            // console.log(check);
            if (booksInState.length > 0) book.shelf = booksInState[0].shelf;
          });
          this.setState({ searchResults: books });
        } else {
          this.setState({ searchResults: [] });
        }
        // console.log(books);
      });
    } else {
      this.setState({ searchResults: [] });
    }
  };
  clearQuery = () => {
    this.setState({ query: "" });
  };
  componentDidMount() {
    // console.log("hello");
    // if (this.state.query) {
    // BooksAPI.search(this.state.query, 20).then(books => {
    //   this.setState({ searchResults: books });
    //   // console.log(books);
    // });
    // }
    document.getElementById("search-box").focus();
  }
  render() {
    // const { query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <DebounceInput
              id="search-box"
              minLength={2}
              debounceTimeout={300}
              element="input"
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults &&
              this.state.searchResults.map((book, index) => (
                // let booksInState = this.props.booksList.filter(
                //   b => b.id === book.id
                // );
                // // console.log(check);
                // if (booksInState.length > 0) book.shelf = booksInState[0].shelf;

                <li key={book.id}>
                  <Book
                    bookInfo={book}
                    onChangeShelf={this.props.onChangeShelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
