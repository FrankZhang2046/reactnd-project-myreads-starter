import React from 'react';
import Book from '../Book/Book';

const SearchResult = props => {
    const { result } = props;

    return(
        <div className="search-books-results">
          <ol className="books-grid">
              {result.map(book=><li><Book {...book}/></li>)}
          </ol>
        </div>
    )
}

export default SearchResult;