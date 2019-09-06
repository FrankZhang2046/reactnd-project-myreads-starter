import React from "react";
import Book from "../Book/Book";

const Bookshelf = props => {
  const { shelfName, stack, reshelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {stack.map(book => (
            <li>
              <Book {...book} shelf={book.shelf} reshelf={reshelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
