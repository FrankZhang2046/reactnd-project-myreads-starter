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

  render() {
    return (
      <div className="search-books">
        <SearchBar queryInput={this.state.queryInput} handleQueryInput={this.handleQueryInput} performSearch={this.performSearch}/>
        <SearchResult result={this.state.result}/>
      </div>
    );
  }
}
