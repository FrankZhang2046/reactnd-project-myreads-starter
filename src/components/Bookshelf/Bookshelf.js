import React from "react";
import Book from "../Book/Book";
import PropTypes from 'prop-types';

const Bookshelf = props => {
  const { shelfName, stack, reshelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {stack.map(book => (
            <li key={book.id}>
              <Book {...book} shelf={book.shelf} reshelf={reshelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  shelfName: PropTypes.string.isRequired, 
  stack: PropTypes.array.isRequired, 
  reshelf: PropTypes.func.isRequired
}

export default Bookshelf;
