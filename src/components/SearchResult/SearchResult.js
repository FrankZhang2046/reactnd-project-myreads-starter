import React from 'react';
import Book from '../Book/Book';

const SearchResult = props => {
    const { result, reshelf, queryInput} = props;

    return(
        <div className="search-books-results">
          <ol className="books-grid">
              {result.length >1 && queryInput!=='' ? result.map(book=><li key={book.id}><Book {...book} reshelf={reshelf}/></li>) : null}
          </ol>
        </div>
    )
}

export default SearchResult;