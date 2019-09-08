import React from "react";
import PropTypes from 'prop-types';

const BookshelfChanger = props => {
  const {id, reshelf, shelf} = props;

  return (
    <div className="book-shelf-changer">
      <select  value={shelf ? shelf : "none"} onChange={(event)=>{reshelf(id, event.target.value)}}>
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

BookshelfChanger.propTypes={
  id: PropTypes.string.isRequired, 
  reshelf: PropTypes.func.isRequired, 
  shelf: PropTypes.string
}

export default BookshelfChanger;