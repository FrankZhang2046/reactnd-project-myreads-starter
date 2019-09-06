import React from 'react';
import Book from '../Book/Book';

const SearchResult = props => {
    const { result, reshelf} = props;

    return(
        <div className="search-books-results">
          <ol className="books-grid">
              {result.length >1 ? result.map(book=><li><Book {...book} reshelf={reshelf}/></li>) : null}
          </ol>
        </div>
    )
}

export default SearchResult;