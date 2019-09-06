import React from "react";

const BookshelfChanger = props => {
  const {title, id, reshelf, shelf} = props;

  return (
    <div className="book-shelf-changer">
      <select  value={shelf} onChange={(event)=>{reshelf(id, event.target.value)}}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read" >Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookshelfChanger;