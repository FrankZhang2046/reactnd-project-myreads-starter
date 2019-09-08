import React from "react";
import BookshelfChanger from "../BookshelfChanger/BookshelfChanger";
import PropTypes from 'prop-types';

const Book = props => {
  const {title, authors, imageLinks, shelf, id, reshelf} = props;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})`
          }}
        ></div>
        <BookshelfChanger {...props} id={id} selectedValue={shelf} reshelf={reshelf}/>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{(authors && (authors.length!==0)) && authors.map(author=>author)}</div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired, 
  imageLinks: PropTypes.object.isRequired, 
  shelf: PropTypes.string, 
  id: PropTypes.string.isRequired, 
  reshelf: PropTypes.func.isRequired,
}

export default Book;