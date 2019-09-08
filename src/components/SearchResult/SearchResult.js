import React from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';

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

SearchResult.propTypes={
    result: PropTypes.array.isRequired, 
    reshelf: PropTypes.func.isRequired, 
    queryInput: PropTypes.string
}

export default SearchResult;