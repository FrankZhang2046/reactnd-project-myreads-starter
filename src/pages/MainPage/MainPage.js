import React, { Component } from "react";
//importing api call methods
import * as BooksAPI from "../../BooksAPI.js";
//importing react components
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import AddButton from '../../components/AddButton/AddButton';
//importing necessary dependencies
import { Link } from "react-router-dom";

export default class MainPage extends Component {
  state = {
    books: [],
    shelves: [
      { key: "currentlyReading", value: "Currently Reading" },
      { key: "wantToRead", value: "Want To Read" },
      { key: "read", value: "Read" }
    ],
    read: [],
    currentlyReading: [],
    wantToRead: []
  };

  componentDidMount() {
    //data initialization
    this.loadData();
  }

  compileInLibraryReport=()=>{
    //compose books that are currently in the library into a dictionary to be passed into the SearchPage page level component via <link>
    const inLibrary={};
    this.state.books.map(
      (book)=>inLibrary[`${book.id}`] = book.shelf
    );
    return inLibrary;
  }

  loadData=()=>{
    BooksAPI.getAll().then(result => this.setState({ books: result }));      
  }

  reshelf=(bookID, shelf)=>{
    //handles changing the 'shelf' property of a book from one to another
    const bookToReshelf = this.state.books.find(item=>item.id === bookID);
    BooksAPI.update(bookToReshelf, shelf).then(event=>{this.loadData()});
  }

  componentDidUpdate(prevProp, prevState) {
    //this method distributes newly retrieved books (via 'BooksAPI.getAll()') into their proper shelves
    if (this.state.books !== prevState.books) {
      const { books } = this.state;
      this.setState({
        read: books.filter(book => book.shelf === "read"),
        currentlyReading: books.filter(
          book => book.shelf === "currentlyReading"
        ),
        wantToRead: books.filter(book => book.shelf === "wantToRead")
      });
    }
  }

  render() {
    return (
      <div className="list-books">
        <TitleBlock onClick={this.compileInLibraryReport}/>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => (
              <Bookshelf
                key={shelf.key}
                shelfName={shelf.value}
                stack={this.state[`${shelf.key}`]}
                reshelf={this.reshelf}
              />
            ))}
          </div>
        </div>
        <Link to={{
          pathname:'/search',
          state: {inLibrary: this.compileInLibraryReport()}
        }}>
            <AddButton />
        </Link>
      </div>
    );
  }
}
