import React from "react";
import "./Bookshelf.scss";
import Book from '../Book/Book';

const Bookshelf = props => {
  const {shelfName, stack} = props;

  return (
    <div className="bookshelf">
      {console.log(props.stack)}
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {stack.map(book=><li><Book {...book} shelf={book.shelf}/></li>)}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
