import React from "react";
import "./Bookshelf.scss";
import Book from '../Book/Book';

const Bookshelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
