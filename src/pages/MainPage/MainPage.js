import React, { Component } from "react";
import "./MainPage.scss";
import * as BooksAPI from "../../BooksAPI.js";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import AddButton from '../../components/AddButton/AddButton';
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
    this.loadData()
  }

  loadData=()=>{
    BooksAPI.getAll().then(result => this.setState({ books: result }));      
  }

  componentDidUpdate(prevProp, prevState) {
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
        <TitleBlock />
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => (
              <Bookshelf
                key={shelf.key}
                shelfName={shelf.value}
                stack={this.state[`${shelf.key}`]}
              />
            ))}
            {console.log(this.state)}
          </div>
        </div>
        <Link to='/search'>
            <AddButton />
        </Link>
      </div>
    );
  }
}
