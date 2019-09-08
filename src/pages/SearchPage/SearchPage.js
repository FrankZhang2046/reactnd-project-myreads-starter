import React from "react";
import * as BooksAPI from "../../BooksAPI";
import "./SearchPage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResult from "../../components/SearchResult/SearchResult";

export default class SearchPage extends React.Component {
  state = {
    queryInput: "",
    result: [],
    inLibrary: {}
  };

  componentDidMount() {
    this.setState({ inLibrary: this.props.location.state.inLibrary });
  }

  flattenResponse = response => {
    const flattenedDictionary = {};
    Object.keys(response).map(key => {
      return response[key].map(bookID => {
        return flattenedDictionary[bookID] = key;
      });
    });
    this.setState({ inLibrary: flattenedDictionary });
  };

  handleQueryInput = event => {
      this.setState({ queryInput: event.target.value });
      if(this.state.queryInput!==''){
        this.performSearch();
      }
      else if(this.state.queryInput===''){
        this.setState({result:[]})
      }
  };

  checkLibrary=(resultArray=this.state.result)=> {
    let newResult = [];
    if(resultArray.length > 1){
      //use the filter method to make sure all returned search results have thumbnails
      newResult=resultArray
      .filter(book=>book.imageLinks !== undefined)
      .map(
        book=>{
          if (Object.keys(this.state.inLibrary).includes(book.id)) {
            book.shelf = this.state.inLibrary[`${book.id}`];
            return book;
          } 
          else if(book.shelf){delete book.shelf; return book;}
          else return book;
        }
      )    
    }

    this.setState({result: newResult})
  }

  performSearch = () => {
    BooksAPI.search(this.state.queryInput).then(result => {
      this.checkLibrary(result);
    });
  };

  reshelf = (bookID, shelf) => {
    const bookToReshelf = this.state.result.find(item => item.id === bookID);
    BooksAPI.update(bookToReshelf, shelf).then(result => {
      this.flattenResponse(result);
      this.checkLibrary();
    });
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar
          queryInput={this.state.queryInput}
          handleQueryInput={this.handleQueryInput}
        />
        <SearchResult queryInput={this.state.queryInput} result={this.state.result} reshelf={this.reshelf} />
      </div>
    );
  }
}
