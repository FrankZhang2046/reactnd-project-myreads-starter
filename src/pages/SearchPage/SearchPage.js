import React from "react";
import * as BooksAPI from '../../BooksAPI';
import './SearchPage.scss';
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResult from "../../components/SearchResult/SearchResult";

export default class SearchPage extends React.Component {
  state={
    queryInput: '',
    result: []
  }

  handleQueryInput=(event)=>{
    this.setState({queryInput: event.target.value})
  }

  performSearch=()=>{
    BooksAPI.search(this.state.queryInput).then(result=>this.setState({result}))
  }

  reshelf=(bookID, shelf)=>{
    const bookToReshelf = this.state.result.find(item=>item.id === bookID);
    // const filteredSearchResult = this.state.result.filter(book=>book.id !== bookID);
    BooksAPI.update(bookToReshelf, shelf).then();
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar queryInput={this.state.queryInput} handleQueryInput={this.handleQueryInput} performSearch={this.performSearch}/>
        <SearchResult result={this.state.result} reshelf={this.reshelf}/>
      </div>
    );
  }
}
