import React from "react";
import * as BooksAPI from "../../BooksAPI";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResult from "../../components/SearchResult/SearchResult";

export default class SearchPage extends React.Component {
  state = {
    queryInput: "",
    result: [],
    inLibrary: {}
  };

  componentDidMount() {
    //saving the 'inlibrary' dictionary object passed from the MainPage page level component into the state. Later, we compare the 'result' array against books in the 'inLibrary' object to synchronize the value of their 'shelf' properties
    this.setState({ inLibrary: this.props.location.state.inLibrary });
  }

  flattenResponse = response => {
    //this helper method flattens the response object from the BooksAPI.change() method into a dictionary that has the same shape as the this.state.inLibrary object
    const flattenedDictionary = {};
    Object.keys(response).map(key => {
      return response[key].map(bookID => {
        return flattenedDictionary[bookID] = key;
      });
    });
    this.setState({ inLibrary: flattenedDictionary });
  };

  handleQueryInput = event => {
    //this method handles the input field value change 
      this.setState({ queryInput: event.target.value });
      if(this.state.queryInput!==''){
        this.performSearch(event.target.value);
      }
      else if(this.state.queryInput===''){
        this.setState({result:[]})
      }
  };

  checkLibrary=(resultArray=this.state.result)=> {
    //this helper method compares the passed in array argument against books in the this.state.inLibrary object, and updates the value of the 'shelf' property of books displayed in the SearchResult component 
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

  performSearch = (queryString) => {
    BooksAPI.search(queryString).then(result => {
      this.checkLibrary(result);
    });
  };

  reshelf = (bookID, shelf) => {
    //this method is similar to the 'reshelf' method in the MainPage component but slightly modified
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
