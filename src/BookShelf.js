import React from "react";
// import { Link } from "react-router-dom";
import Book from "./Book";
// I converted it to functional Component because it just do the UI without having any state
function BookShelf(props) {
  // console.log(this.props);
  const { shelfTitle, shelfBooks, onChangeShelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map((book, index) => (
            <li key={book.id}>
              <Book bookInfo={book} onChangeShelf={onChangeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

// class BookShelf extends Component {
//   render() {
//     // console.log(this.props);
//     const { shelfTitle, shelfBooks, onChangeShelf } = this.props;
//     return (
//       <div className="bookshelf">
//         <h2 className="bookshelf-title">{shelfTitle}</h2>
//         <div className="bookshelf-books">
//           <ol className="books-grid">
//             {shelfBooks.map((book, index) => (
//               <li key={book.id}>
//                 <Book bookInfo={book} onChangeShelf={onChangeShelf} />
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     );
//   }
// }

export default BookShelf;
