import React from "react";
import BookshelfChanger from "../BookshelfChanger/BookshelfChanger";

const Book = props => {
  const {title, authors, imageLinks, shelf} = props;
  
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${imageLinks.thumbnail})`
          }}
        ></div>
        <BookshelfChanger selectedValue={shelf}/>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{(authors && (authors.length!==0)) && authors.map(author=>author)}</div>
    </div>
  );
};

export default Book;